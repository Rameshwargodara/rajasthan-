import React, { useState, useEffect, useRef, useMemo } from 'react';
import { TitleBar } from './TitleBar';
import { ResultModal, TypingResultData } from './ResultModal';
import { RSSB_LDC_ENGLISH_LESSONS, EnglishTestLesson } from '../data/rssbLdcEnglishLessons';
import {
  FileText,
  Volume2,
  VolumeX,
  Printer,
  PlusCircle,
  X,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Download,
} from 'lucide-react';

interface EnglishTypingTestScreenProps {
  onBackToHome: () => void;
  initialLessonId?: number;
  initialTheme?: 'light' | 'dark';
}

type BackspaceMode = 'full' | 'one_word' | 'deactivate';
type HighlightMode = 'word' | 'word_error' | 'no_highlight';
type TestDuration = 1 | 2 | 5 | 10 | 15 | 20;

export const EnglishTypingTestScreen: React.FC<EnglishTypingTestScreenProps> = ({
  onBackToHome,
  initialLessonId = 1,
  initialTheme = 'light',
}) => {
  // Lessons list state (supports custom added exercises)
  const [lessons, setLessons] = useState<EnglishTestLesson[]>(() => RSSB_LDC_ENGLISH_LESSONS);
  const [selectedLessonId, setSelectedLessonId] = useState<number>(initialLessonId);

  // Appearance & Font Settings
  const [selectedFont, setSelectedFont] = useState<string>('Segoe UI, Tahoma, sans-serif');
  const [isBold, setIsBold] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(36);
  const [theme, setTheme] = useState<'light' | 'dark'>(initialTheme);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Settings Sidebar States
  const [backspaceOption, setBackspaceOption] = useState<BackspaceMode>('one_word');
  const [highlightOption, setHighlightOption] = useState<HighlightMode>('no_highlight');
  const [showScrollbar, setShowScrollbar] = useState<boolean>(true);
  const [autoScroll, setAutoScroll] = useState<boolean>(false);

  // Paragraph Settings
  const [applyWordLimit, setApplyWordLimit] = useState<boolean>(true);
  const [wordLimit, setWordLimit] = useState<number>(500);
  const [applyKeystrokeLimit, setApplyKeystrokeLimit] = useState<boolean>(false);
  const [keystrokeLimit, setKeystrokeLimit] = useState<number>(1250);

  // Word Processing Mode
  const [wordProcessorMode, setWordProcessorMode] = useState<boolean>(false);
  const [allowParagraphs, setAllowParagraphs] = useState<boolean>(false);
  const [allowTabs, setAllowTabs] = useState<boolean>(false);
  const [allowCorrection, setAllowCorrection] = useState<boolean>(false);

  // Test Execution States
  const [testDuration, setTestDuration] = useState<TestDuration>(10);
  const [typedText, setTypedText] = useState<string>('');
  const [isTesting, setIsTesting] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(10 * 60);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [backspaceCount, setBackspaceCount] = useState<number>(0);
  const [totalKeystrokes, setTotalKeystrokes] = useState<number>(0);

  // Modals
  const [showResultModal, setShowResultModal] = useState<boolean>(false);
  const [showPrintModal, setShowPrintModal] = useState<boolean>(false);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [resultData, setResultData] = useState<TypingResultData | null>(null);

  // Custom Exercise Input States
  const [customTitle, setCustomTitle] = useState<string>('');
  const [customCategory, setCustomCategory] = useState<string>('RSSB LDC Practice');
  const [customContent, setCustomContent] = useState<string>('');

  // Refs
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const targetBoxRef = useRef<HTMLDivElement>(null);
  const activeWordRef = useRef<HTMLSpanElement>(null);
  const timerRef = useRef<number | null>(null);

  const currentLesson = useMemo(() => {
    return lessons.find((l) => l.id === selectedLessonId) || lessons[0];
  }, [lessons, selectedLessonId]);

  // Clean target words array
  const targetWords = useMemo(() => {
    return currentLesson.content.trim().split(/\s+/);
  }, [currentLesson.content]);

  // User typed words array
  const typedWords = useMemo(() => {
    return typedText.length === 0 ? [] : typedText.split(/\s+/);
  }, [typedText]);

  // Active word index
  const currentWordIndex = useMemo(() => {
    if (typedText.length === 0) return 0;
    const endsWithSpace = typedText.endsWith(' ') || typedText.endsWith('\n');
    return endsWithSpace ? typedWords.length : Math.max(0, typedWords.length - 1);
  }, [typedText, typedWords]);

  // Sound generator
  const playBeep = (isError: boolean) => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (!isError) {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);
        osc.start();
        osc.stop(ctx.currentTime + 0.03);
      } else {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(180, ctx.currentTime);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      }
    } catch {
      // Ignore audio autoplay restrictions
    }
  };

  // Reset test state when switching lesson or duration
  const resetTest = (newDuration?: TestDuration) => {
    if (timerRef.current) clearInterval(timerRef.current);
    const dur = newDuration ?? testDuration;
    setIsTesting(false);
    setIsPaused(false);
    setTimeRemaining(dur * 60);
    setElapsedSeconds(0);
    setTypedText('');
    setBackspaceCount(0);
    setTotalKeystrokes(0);
    setShowResultModal(false);
    if (targetBoxRef.current) targetBoxRef.current.scrollTop = 0;
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  useEffect(() => {
    resetTest();
  }, [selectedLessonId, testDuration]);

  // Handle timer countdown
  useEffect(() => {
    if (isTesting && !isPaused) {
      timerRef.current = window.setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            handleCompleteTest();
            return 0;
          }
          return prev - 1;
        });
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTesting, isPaused, typedText]);

  // Auto-scroll target box if autoScroll is enabled
  useEffect(() => {
    if (autoScroll && activeWordRef.current && targetBoxRef.current) {
      const container = targetBoxRef.current;
      const element = activeWordRef.current;
      const containerRect = container.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();

      const relativeBottom = elementRect.bottom - containerRect.top;
      const threshold = container.clientHeight - 40;

      if (relativeBottom > threshold) {
        container.scrollTop += (relativeBottom - threshold) + 20;
      }
    }
  }, [currentWordIndex, autoScroll]);

  // Calculate Test Results
  const handleCompleteTest = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsTesting(false);

    const actualElapsed = Math.max(1, elapsedSeconds);
    const timeInMinutes = actualElapsed / 60;

    // Word based metrics
    let correctWordsCount = 0;
    let incorrectWordsCount = 0;
    let correctCharsCount = 0;

    typedWords.forEach((word, idx) => {
      if (idx < targetWords.length) {
        if (word === targetWords[idx]) {
          correctWordsCount++;
          correctCharsCount += word.length + (idx < typedWords.length - 1 ? 1 : 0);
        } else {
          incorrectWordsCount++;
        }
      } else {
        incorrectWordsCount++;
      }
    });

    const totalWordsTyped = typedWords.length;
    const totalCharsTyped = typedText.length;
    const grossWPM5 = Math.round((totalCharsTyped / 5) / timeInMinutes);
    const netWPM5 = Math.max(0, Math.round((correctCharsCount / 5) / timeInMinutes));
    const grossKPM = Math.round(totalCharsTyped / timeInMinutes);
    const grossKPH = grossKPM * 60;
    const netKPM = Math.round(correctCharsCount / timeInMinutes);
    const netKPH = netKPM * 60;

    const grossWPMWords = Math.round(totalWordsTyped / timeInMinutes);
    const netWPMWords = Math.round(correctWordsCount / timeInMinutes);
    const accuracy = totalCharsTyped > 0 ? (correctCharsCount / totalCharsTyped) * 100 : 100;

    const result: TypingResultData = {
      lessonTitle: currentLesson.title,
      lessonId: currentLesson.id,
      language: 'english',
      totalChars: totalCharsTyped,
      correctChars: correctCharsCount,
      errorCount: Math.max(0, totalCharsTyped - correctCharsCount),
      elapsedSeconds: actualElapsed,
      accuracy: Math.min(100, Math.max(0, accuracy)),
      grossWPM5,
      netWPM5,
      grossKPM,
      grossKPH,
      netKPM,
      netKPH,
      spaceWordsTotal: totalWordsTyped,
      spaceWordsCorrect: correctWordsCount,
      spaceWordsIncorrect: incorrectWordsCount,
      grossWPMWords,
      netWPMWords,
      backspaceCount,
    };

    setResultData(result);
    setShowResultModal(true);
  };

  // Keystroke handler for Backspace restrictions & Auto-start
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Auto-start timer on first keypress
    if (!isTesting && !isPaused && e.key.length === 1) {
      setIsTesting(true);
    }

    // Backspace logic
    if (e.key === 'Backspace') {
      setBackspaceCount((prev) => prev + 1);

      if (backspaceOption === 'deactivate') {
        e.preventDefault();
        playBeep(true);
        return;
      }

      if (backspaceOption === 'one_word') {
        // Prevent deleting space between previous word and current word
        const selectionStart = e.currentTarget.selectionStart;
        if (selectionStart > 0) {
          const charToDelete = typedText[selectionStart - 1];
          if (charToDelete === ' ' || charToDelete === '\n') {
            e.preventDefault();
            playBeep(true);
            return;
          }
        }
      }
    }

    // Tab key handling
    if (e.key === 'Tab') {
      if (!allowTabs) {
        e.preventDefault();
      }
    }

    // Enter key handling
    if (e.key === 'Enter') {
      if (!allowParagraphs) {
        e.preventDefault();
      }
    }
  };

  // Text change handler
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const nextVal = e.target.value;
    setTotalKeystrokes((prev) => prev + 1);

    // Apply Keystroke Limit
    if (applyKeystrokeLimit && nextVal.length >= keystrokeLimit) {
      setTypedText(nextVal.slice(0, keystrokeLimit));
      handleCompleteTest();
      return;
    }

    // Apply Word Limit
    if (applyWordLimit) {
      const words = nextVal.trim().split(/\s+/);
      if (words.length > wordLimit) {
        handleCompleteTest();
        return;
      }
    }

    setTypedText(nextVal);
  };

  // Add custom exercise submit
  const handleAddExerciseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customContent.trim()) return;

    const newId = lessons.length + 1;
    const newLesson: EnglishTestLesson = {
      id: newId,
      title: customTitle.trim() || `Exercise : ${newId}/${newId} - Custom Practice`,
      category: customCategory.trim() || 'Custom Exercise',
      content: customContent.trim(),
    };

    setLessons((prev) => [...prev, newLesson]);
    setSelectedLessonId(newId);
    setShowAddModal(false);
    setCustomTitle('');
    setCustomContent('');
  };

  // Format Timer Display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div
      id="english-test-screen-root"
      className={`min-h-screen flex flex-col font-sans select-none ${
        theme === 'dark' ? 'bg-[#181a20] text-slate-100' : 'bg-[#d6d9df] text-slate-800'
      }`}
    >
      {/* 1. Top Windows Chrome Title Bar */}
      <TitleBar title="Soni Typing Tutor - RSSB LDC English Typing Test" />

      {/* 2. Top Banner / Header Controls */}
      <div className="bg-[#dcdfe5] border-b border-slate-300 px-3 py-1.5 flex flex-wrap items-center justify-between gap-2 text-xs">
        {/* Left Side: Select Font & Bold */}
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-1 px-2 py-0.5 bg-white hover:bg-slate-100 border border-slate-300 rounded text-slate-700 shadow-2xs font-semibold cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>

          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-slate-700">Select Font:</span>
            <select
              value={selectedFont}
              onChange={(e) => setSelectedFont(e.target.value)}
              className="bg-white border border-slate-300 rounded px-2 py-0.5 text-xs text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
            >
              <option value="Segoe UI, Tahoma, sans-serif">Segoe UI</option>
              <option value="Arial, Helvetica, sans-serif">Arial</option>
              <option value="Calibri, sans-serif">Calibri</option>
              <option value="Georgia, serif">Georgia</option>
              <option value="'Courier New', Courier, monospace">Courier New</option>
            </select>
          </div>

          <label className="flex items-center gap-1 cursor-pointer select-none text-slate-700">
            <input
              type="checkbox"
              checked={isBold}
              onChange={(e) => setIsBold(e.target.checked)}
              className="rounded text-blue-600 focus:ring-0 cursor-pointer"
            />
            <span className="font-semibold">Bold</span>
          </label>
        </div>

        {/* Right Side: Quick info banner */}
        <div className="flex items-center gap-2 text-[11px] text-slate-600">
          <span className="bg-blue-100 text-blue-800 font-semibold px-2 py-0.5 rounded border border-blue-200">
            RSSB LDC 2024 Exam Mode
          </span>
          <span className="text-slate-500">100 Authentic Exam Passages Available</span>
        </div>
      </div>

      {/* 3. Main Workspace Grid */}
      <div className="flex-1 p-2 md:p-3 flex flex-col lg:flex-row gap-3 items-stretch max-w-[1750px] w-full mx-auto overflow-hidden">
        {/* ================= LEFT / CENTER: MAIN TEST PANEL ================= */}
        <div className="flex-1 flex flex-col bg-[#8d91dc] border border-[#6b6fb8] rounded-xs shadow-md overflow-hidden p-1.5 gap-1.5">
          {/* Top Purple Action Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-2 py-1 text-xs">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowPrintModal(true)}
                className="px-3 py-1 bg-[#dcdfe8] hover:bg-white text-slate-800 border border-slate-400 rounded-xs font-semibold shadow-2xs cursor-pointer flex items-center gap-1 transition-colors"
              >
                <Printer className="w-3.5 h-3.5 text-slate-700" />
                <span>Go Printout Mode</span>
              </button>

              <button
                onClick={() => setShowAddModal(true)}
                className="px-3 py-1 bg-[#dcdfe8] hover:bg-white text-slate-800 border border-slate-400 rounded-xs font-semibold shadow-2xs cursor-pointer flex items-center gap-1 transition-colors"
              >
                <PlusCircle className="w-3.5 h-3.5 text-blue-700" />
                <span>Add New Exercise</span>
              </button>
            </div>

            <div className="flex items-center gap-3">
              {/* Theme Dropdown */}
              <div className="flex items-center gap-1 text-slate-900 font-semibold">
                <span>Theme :</span>
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value as 'light' | 'dark')}
                  className="bg-white border border-slate-400 rounded-xs px-2 py-0.5 text-xs text-slate-800"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>

              {/* PDF Icon Button */}
              <button
                onClick={() => setShowPrintModal(true)}
                title="Download / Print PDF Exam Sheet"
                className="p-1 bg-white hover:bg-slate-100 border border-slate-400 rounded-xs text-red-600 shadow-2xs cursor-pointer"
              >
                <FileText className="w-4 h-4" />
              </button>

              {/* Sound Toggle */}
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                title={soundEnabled ? 'Mute Key Sound' : 'Enable Key Sound'}
                className="p-1 bg-white hover:bg-slate-100 border border-slate-400 rounded-xs text-slate-800 shadow-2xs cursor-pointer"
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
              </button>
            </div>
          </div>

          {/* TOP BOX: Target Passage Display Area */}
          <div
            ref={targetBoxRef}
            className={`flex-1 min-h-[170px] max-h-[260px] bg-white border border-slate-400 rounded-xs p-3 overflow-y-auto leading-relaxed shadow-inner ${
              showScrollbar ? 'overflow-y-scroll' : 'overflow-y-auto'
            } ${theme === 'dark' ? 'bg-slate-900 text-slate-100 border-slate-700' : 'bg-white text-slate-900'}`}
            style={{
              fontFamily: selectedFont,
              fontWeight: isBold ? 700 : 400,
              fontSize: `${fontSize * 0.55}px`,
            }}
          >
            {targetWords.map((word, idx) => {
              const isCurrent = idx === currentWordIndex;
              const isTyped = idx < typedWords.length;
              const isCorrect = isTyped && typedWords[idx] === word;
              const isWrong = isTyped && !isCorrect;

              let highlightClass = 'mr-1.5 inline-block';

              if (highlightOption === 'word') {
                if (isCurrent) {
                  highlightClass += ' bg-amber-200 text-black px-0.5 rounded-xs font-semibold';
                }
              } else if (highlightOption === 'word_error') {
                if (isCurrent) {
                  highlightClass += ' bg-amber-200 text-black px-0.5 rounded-xs font-semibold';
                } else if (isWrong) {
                  highlightClass += ' bg-red-100 text-red-700 px-0.5 rounded-xs underline';
                } else if (isCorrect) {
                  highlightClass += ' text-emerald-800';
                }
              }

              return (
                <span
                  key={idx}
                  ref={isCurrent ? activeWordRef : null}
                  className={highlightClass}
                >
                  {word}
                </span>
              );
            })}
          </div>

          {/* MIDDLE PURPLE CONTROL BAR */}
          <div className="flex flex-col gap-1 bg-[#8286d5] p-1.5 rounded-xs text-xs text-white">
            {/* Status notice */}
            <div className="text-center font-medium text-[11.5px] text-white/95">
              Select test duration and start typing. Timer will start automatically
            </div>

            {/* Controls Strip */}
            <div className="flex flex-wrap items-center justify-between gap-2 bg-[#7579cc] p-1 rounded-xs">
              {/* Duration Selector */}
              <div className="flex items-center gap-1 text-white font-semibold">
                <span>Duration :</span>
                <select
                  value={testDuration}
                  onChange={(e) => {
                    const dur = parseInt(e.target.value, 10) as TestDuration;
                    setTestDuration(dur);
                    resetTest(dur);
                  }}
                  className="bg-white text-slate-800 border border-slate-300 rounded-xs px-1.5 py-0.5 text-xs font-normal"
                >
                  <option value={1}>1 Minute</option>
                  <option value={2}>2 Minutes</option>
                  <option value={5}>5 Minutes</option>
                  <option value={10}>10 Minutes</option>
                  <option value={15}>15 Minutes</option>
                  <option value={20}>20 Minutes</option>
                </select>
              </div>

              {/* Exercise Navigation Dropdown */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    if (selectedLessonId > 1) {
                      setSelectedLessonId(selectedLessonId - 1);
                    }
                  }}
                  disabled={selectedLessonId <= 1}
                  className="px-1.5 py-0.5 bg-white text-slate-800 hover:bg-slate-100 disabled:opacity-40 rounded-xs font-bold border border-slate-300 shadow-2xs cursor-pointer"
                >
                  &lt;&lt;
                </button>

                <select
                  value={selectedLessonId}
                  onChange={(e) => setSelectedLessonId(parseInt(e.target.value, 10))}
                  className="bg-white text-slate-800 border border-slate-300 rounded-xs px-2 py-0.5 text-xs max-w-[210px] md:max-w-[270px] truncate"
                >
                  {lessons.map((lesson) => (
                    <option key={lesson.id} value={lesson.id}>
                      {lesson.title}
                    </option>
                  ))}
                </select>

                <button
                  onClick={() => {
                    if (selectedLessonId < lessons.length) {
                      setSelectedLessonId(selectedLessonId + 1);
                    }
                  }}
                  disabled={selectedLessonId >= lessons.length}
                  className="px-1.5 py-0.5 bg-white text-slate-800 hover:bg-slate-100 disabled:opacity-40 rounded-xs font-bold border border-slate-300 shadow-2xs cursor-pointer"
                >
                  &gt;&gt;
                </button>
              </div>

              {/* Start / Pause / Timer Button */}
              <div className="flex items-center gap-1">
                {!isTesting && elapsedSeconds === 0 ? (
                  <button
                    onClick={() => {
                      setIsTesting(true);
                      inputRef.current?.focus();
                    }}
                    className="px-4 py-0.5 bg-[#dcdfe8] hover:bg-white text-slate-900 border border-slate-400 rounded-xs font-bold shadow-2xs cursor-pointer transition-colors"
                  >
                    Start
                  </button>
                ) : (
                  <div className="flex items-center gap-1">
                    <div className="px-2.5 py-0.5 bg-amber-300 text-amber-950 font-mono font-bold rounded-xs text-xs border border-amber-400 shadow-inner">
                      {formatTime(timeRemaining)}
                    </div>
                    <button
                      onClick={() => setIsPaused(!isPaused)}
                      title={isPaused ? 'Resume Test' : 'Pause Test'}
                      className="px-2 py-0.5 bg-white text-slate-800 border border-slate-400 rounded-xs font-semibold shadow-2xs cursor-pointer"
                    >
                      {isPaused ? <Play className="w-3 h-3 text-emerald-600" /> : <Pause className="w-3 h-3 text-amber-600" />}
                    </button>
                    <button
                      onClick={() => handleCompleteTest()}
                      className="px-2 py-0.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xs font-semibold shadow-2xs cursor-pointer"
                    >
                      Submit
                    </button>
                  </div>
                )}
              </div>

              {/* Font Size Adjuster: A- 36 A+ */}
              <div className="flex items-center gap-0.5 bg-white p-0.5 rounded-xs border border-slate-300 text-slate-800">
                <button
                  onClick={() => setFontSize((f) => Math.max(18, f - 2))}
                  className="px-1.5 py-0.5 hover:bg-slate-200 text-xs font-bold rounded-xs cursor-pointer"
                >
                  A-
                </button>
                <span className="px-1 text-xs font-bold text-blue-900">{fontSize}</span>
                <button
                  onClick={() => setFontSize((f) => Math.min(52, f + 2))}
                  className="px-1.5 py-0.5 hover:bg-slate-200 text-xs font-bold rounded-xs cursor-pointer"
                >
                  A+
                </button>
              </div>
            </div>
          </div>

          {/* BOTTOM BOX: User Typing Input Area */}
          <div className="flex-1 min-h-[170px] max-h-[260px] bg-white border border-slate-400 rounded-xs shadow-inner flex flex-col relative overflow-hidden">
            <textarea
              ref={inputRef}
              value={typedText}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Click here and start typing the above text... Timer will start automatically."
              autoFocus
              spellCheck={false}
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              className={`w-full h-full p-3 resize-none focus:outline-hidden leading-relaxed ${
                showScrollbar ? 'overflow-y-scroll' : 'overflow-y-auto'
              } ${theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-900'}`}
              style={{
                fontFamily: selectedFont,
                fontWeight: isBold ? 700 : 400,
                fontSize: `${fontSize * 0.55}px`,
              }}
            />

            {/* Mini floating live stats footer */}
            <div className="bg-slate-100 border-t border-slate-200 px-3 py-1 flex items-center justify-between text-[11px] text-slate-600 font-medium">
              <div className="flex items-center gap-3">
                <span>
                  Words: <strong className="text-slate-800">{typedWords.length}</strong> / {targetWords.length}
                </span>
                <span>
                  Keystrokes: <strong className="text-slate-800">{typedText.length}</strong>
                </span>
                <span>
                  Backspaces: <strong className="text-slate-800">{backspaceCount}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => resetTest()}
                  className="flex items-center gap-1 text-blue-700 hover:text-blue-900 font-semibold cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Restart Test</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDEBAR: SETTINGS ================= */}
        <div className="w-full lg:w-[260px] xl:w-[280px] shrink-0 bg-[#e4e7ec] border border-slate-300 rounded-xs p-2 flex flex-col gap-2.5 text-xs text-slate-800">
          <div className="font-bold text-slate-800 border-b border-slate-300 pb-1 text-[13px]">
            Settings
          </div>

          {/* 1. Backspace Options */}
          <fieldset className="border border-slate-300 rounded-xs p-2 bg-white/70">
            <legend className="text-[11px] font-bold text-slate-700 px-1">
              Backspace Options
            </legend>
            <div className="flex flex-col gap-1.5 mt-0.5">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="backspace_opt"
                  checked={backspaceOption === 'full'}
                  onChange={() => setBackspaceOption('full')}
                  className="text-blue-600 cursor-pointer"
                />
                <span>Full Backspace</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="backspace_opt"
                  checked={backspaceOption === 'one_word'}
                  onChange={() => setBackspaceOption('one_word')}
                  className="text-blue-600 cursor-pointer"
                />
                <span>One Word Backspace</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="backspace_opt"
                  checked={backspaceOption === 'deactivate'}
                  onChange={() => setBackspaceOption('deactivate')}
                  className="text-blue-600 cursor-pointer"
                />
                <span>Deactivate Backspace</span>
              </label>
            </div>
          </fieldset>

          {/* 2. Highlight Options */}
          <fieldset className="border border-slate-300 rounded-xs p-2 bg-white/70">
            <legend className="text-[11px] font-bold text-slate-700 px-1">
              Highlight Options
            </legend>
            <div className="flex flex-col gap-1.5 mt-0.5">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="highlight_opt"
                  checked={highlightOption === 'word'}
                  onChange={() => setHighlightOption('word')}
                  className="text-blue-600 cursor-pointer"
                />
                <span>Word Highlight</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="highlight_opt"
                  checked={highlightOption === 'word_error'}
                  onChange={() => setHighlightOption('word_error')}
                  className="text-blue-600 cursor-pointer"
                />
                <span>Word + Error Highlight</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="highlight_opt"
                  checked={highlightOption === 'no_highlight'}
                  onChange={() => setHighlightOption('no_highlight')}
                  className="text-blue-600 cursor-pointer"
                />
                <span>No Highlight</span>
              </label>
            </div>
          </fieldset>

          {/* 3. Scrollbar Options */}
          <fieldset className="border border-slate-300 rounded-xs p-2 bg-white/70">
            <legend className="text-[11px] font-bold text-slate-700 px-1">
              Scrollbar Options
            </legend>
            <div className="flex flex-col gap-1.5 mt-0.5">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showScrollbar}
                  onChange={(e) => setShowScrollbar(e.target.checked)}
                  className="rounded text-blue-600 cursor-pointer"
                />
                <span>Show Scrollbar</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={autoScroll}
                  onChange={(e) => setAutoScroll(e.target.checked)}
                  className="rounded text-blue-600 cursor-pointer"
                />
                <span>Auto Scroll</span>
              </label>
            </div>
          </fieldset>

          {/* 4. Paragraph Settings */}
          <fieldset className="border border-slate-300 rounded-xs p-2 bg-white/70">
            <legend className="text-[11px] font-bold text-slate-700 px-1">
              Paragraph Settings
            </legend>
            <div className="flex flex-col gap-2 mt-0.5">
              <div>
                <label className="flex items-center gap-1.5 cursor-pointer mb-1">
                  <input
                    type="checkbox"
                    checked={applyWordLimit}
                    onChange={(e) => setApplyWordLimit(e.target.checked)}
                    className="rounded text-blue-600 cursor-pointer"
                  />
                  <span>Apply Word Limit</span>
                </label>
                <div className="flex items-center gap-1 pl-5">
                  <input
                    type="number"
                    min={50}
                    max={1500}
                    value={wordLimit}
                    onChange={(e) => setWordLimit(parseInt(e.target.value, 10) || 500)}
                    disabled={!applyWordLimit}
                    className="w-20 px-1.5 py-0.5 border border-slate-300 rounded text-xs bg-white disabled:bg-slate-100"
                  />
                  <span className="text-[10px] text-slate-500">(min=50, max=1500)</span>
                </div>
              </div>

              <div>
                <label className="flex items-center gap-1.5 cursor-pointer mb-1">
                  <input
                    type="checkbox"
                    checked={applyKeystrokeLimit}
                    onChange={(e) => setApplyKeystrokeLimit(e.target.checked)}
                    className="rounded text-blue-600 cursor-pointer"
                  />
                  <span>Apply Keystroke Limit</span>
                </label>
                <div className="flex items-center gap-1 pl-5">
                  <input
                    type="number"
                    min={200}
                    max={50000}
                    value={keystrokeLimit}
                    onChange={(e) => setKeystrokeLimit(parseInt(e.target.value, 10) || 1250)}
                    disabled={!applyKeystrokeLimit}
                    className="w-20 px-1.5 py-0.5 border border-slate-300 rounded text-xs bg-white disabled:bg-slate-100"
                  />
                  <span className="text-[10px] text-slate-500">(min 200, max 50000)</span>
                </div>
              </div>
            </div>
          </fieldset>

          {/* 5. Word Processing Mode */}
          <fieldset className="border border-slate-300 rounded-xs p-2 bg-white/70">
            <legend className="text-[11px] font-bold text-slate-700 px-1">
              Word Processing Mode
            </legend>
            <div className="flex flex-col gap-1.5 mt-0.5">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={wordProcessorMode}
                  onChange={(e) => setWordProcessorMode(e.target.checked)}
                  className="rounded text-blue-600 cursor-pointer"
                />
                <span>Word Processor Mode (SSC, Court, Steno)</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={allowParagraphs}
                  onChange={(e) => setAllowParagraphs(e.target.checked)}
                  className="rounded text-blue-600 cursor-pointer"
                />
                <span>Allow Paragraphs</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={allowTabs}
                  onChange={(e) => setAllowTabs(e.target.checked)}
                  className="rounded text-blue-600 cursor-pointer"
                />
                <span>Allow Tabs</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={allowCorrection}
                  onChange={(e) => setAllowCorrection(e.target.checked)}
                  className="rounded text-blue-600 cursor-pointer"
                />
                <span>Allow Correction</span>
              </label>
            </div>
          </fieldset>
        </div>
      </div>

      {/* ================= MODAL: PRINTOUT / OFFLINE TEST PAPER ================= */}
      {showPrintModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 border border-slate-400 rounded-md shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
            <div className="bg-slate-100 border-b border-slate-300 px-4 py-2 flex items-center justify-between">
              <span className="font-bold text-sm text-slate-800 flex items-center gap-2">
                <Printer className="w-4 h-4 text-blue-600" />
                <span>Printout Mode - {currentLesson.title}</span>
              </span>
              <button
                onClick={() => setShowPrintModal(false)}
                className="text-slate-500 hover:text-slate-800 p-1 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1 font-serif text-justify leading-loose text-base border-b border-slate-200">
              <div className="text-center font-sans font-bold text-lg mb-1 text-slate-900">
                RAJASTHAN STAFF SELECTION BOARD (RSSB) - LDC TYPING TEST
              </div>
              <div className="text-center text-xs text-slate-500 mb-6">
                Category: {currentLesson.category} | Word Count: {targetWords.length} words | Duration: {testDuration} Minutes
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded text-slate-800 text-[15px] leading-relaxed">
                {currentLesson.content}
              </div>
            </div>

            <div className="bg-slate-100 px-4 py-3 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Tip: Press Ctrl+P or click Print to generate paper test copy.
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-semibold shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Sheet</span>
                </button>
                <button
                  onClick={() => setShowPrintModal(false)}
                  className="px-4 py-1.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 rounded text-xs font-semibold shadow-xs cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL: ADD NEW EXERCISE ================= */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleAddExerciseSubmit}
            className="bg-white text-slate-900 border border-slate-400 rounded-md shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col"
          >
            <div className="bg-slate-100 border-b border-slate-300 px-4 py-2 flex items-center justify-between">
              <span className="font-bold text-sm text-slate-800 flex items-center gap-2">
                <PlusCircle className="w-4 h-4 text-blue-600" />
                <span>Add New Typing Exercise</span>
              </span>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="text-slate-500 hover:text-slate-800 p-1 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 flex flex-col gap-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Exercise Title:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Exercise 101 - Rajasthan Administrative Terminology"
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Category:
                </label>
                <input
                  type="text"
                  placeholder="e.g. RSSB LDC Custom Practice"
                  value={customCategory}
                  onChange={(e) => setCustomCategory(e.target.value)}
                  className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Exercise Text / Passage to Type:
                </label>
                <textarea
                  rows={8}
                  placeholder="Paste or type the English paragraph here..."
                  value={customContent}
                  onChange={(e) => setCustomContent(e.target.value)}
                  required
                  className="w-full p-2.5 border border-slate-300 rounded text-xs focus:ring-1 focus:ring-blue-500 focus:outline-hidden leading-relaxed font-mono"
                />
              </div>
            </div>

            <div className="bg-slate-100 border-t border-slate-200 px-4 py-2.5 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="px-3 py-1.5 bg-white hover:bg-slate-100 border border-slate-300 rounded text-xs font-semibold text-slate-700 shadow-2xs cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-semibold shadow-xs cursor-pointer"
              >
                Add & Start Practicing
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ================= MODAL: TEST SCORECARD RESULT ================= */}
      {showResultModal && resultData && (
        <ResultModal
          isOpen={showResultModal}
          result={resultData}
          onRestart={() => resetTest()}
          onRetry={() => resetTest()}
          onNextLesson={() => {
            if (selectedLessonId < lessons.length) {
              setSelectedLessonId(selectedLessonId + 1);
            } else {
              setSelectedLessonId(1);
            }
            resetTest();
          }}
          onClose={() => setShowResultModal(false)}
          onBackToHome={onBackToHome}
          hasNextLesson={selectedLessonId < lessons.length}
        />
      )}
    </div>
  );
};
