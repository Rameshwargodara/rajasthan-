import React, { useState, useEffect, useRef, useMemo } from 'react';
import { TitleBar } from './TitleBar';
import { ResultModal, TypingResultData } from './ResultModal';
import { alignAndEvaluateWords } from '../lib/typingEvaluation';
import { RSSB_LDC_ENGLISH_LESSONS, EnglishTestLesson } from '../data/rssbLdcEnglishLessons';
import { parseExerciseFile, ParseResult } from '../lib/documentParser';
import {
  FileText,
  Printer,
  X,
  RotateCcw,
  ArrowLeft,
  UploadCloud,
  FileUp,
  CheckCircle2,
  AlertCircle,
  Trash2,
  Loader2,
  FileCheck,
  PlusCircle,
} from 'lucide-react';

interface EnglishTypingTestScreenProps {
  onBackToHome: () => void;
  initialLessonId?: number;
  initialTheme?: 'light' | 'dark';
}

const CUSTOM_STORAGE_KEY = 'soni_ldc_custom_exercises';

const loadStoredCustomLessons = (): EnglishTestLesson[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(CUSTOM_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Failed to read custom exercises from storage:', err);
  }
  return [];
};

const saveCustomLessonsToStorage = (customLessons: EnglishTestLesson[]) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CUSTOM_STORAGE_KEY, JSON.stringify(customLessons));
  } catch (err) {
    console.error('Failed to persist custom exercises to storage:', err);
  }
};

type BackspaceMode = 'full' | 'one_word' | 'deactivate';
type HighlightMode = 'word' | 'word_error' | 'no_highlight' | 'letter';
type TestDuration = 1 | 2 | 5 | 10 | 15 | 20;

// Reusable audio synthesizers for offline realistic typing experience
let audioCtx: AudioContext | null = null;
const getAudioContext = () => {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
};

const playKeyClick = (soundEnabled = true) => {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.045);
  } catch {
    // ignore audio failure
  }
};

const playErrorBeep = (soundEnabled = true) => {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(190, ctx.currentTime);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.09);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.095);
  } catch {
    // ignore audio failure
  }
};

export const EnglishTypingTestScreen: React.FC<EnglishTypingTestScreenProps> = ({
  onBackToHome,
  initialLessonId = 1,
}) => {
  // Lessons list state (combines official 500 lessons with custom stored exercises)
  const [lessons, setLessons] = useState<EnglishTestLesson[]>(() => {
    const custom = loadStoredCustomLessons();
    return [...RSSB_LDC_ENGLISH_LESSONS, ...custom];
  });
  const [selectedLessonId, setSelectedLessonId] = useState<number>(initialLessonId);

  // Exam Mode State: when active, hides settings sidebar and expands test area
  const [isExamMode, setIsExamMode] = useState<boolean>(false);

  // Appearance & Font Settings (exact match to screenshot: default font size 18)
  const selectedFont = 'Segoe UI, Tahoma, sans-serif';
  const isBold = false;
  const [fontSize, setFontSize] = useState<number>(18);
  const soundEnabled = true;

  // Settings Sidebar States (exact defaults from Screenshot 276)
  const [backspaceOption, setBackspaceOption] = useState<BackspaceMode>('one_word');
  const [highlightOption, setHighlightOption] = useState<HighlightMode>('no_highlight');
  const [showScrollbar, setShowScrollbar] = useState<boolean>(true);
  const [autoScroll, setAutoScroll] = useState<boolean>(false);

  // Paragraph Settings (exact defaults from Screenshot 276: Apply Word Limit checked, 600 words)
  const [applyWordLimit, setApplyWordLimit] = useState<boolean>(true);
  const [wordLimit, setWordLimit] = useState<number>(600);

  // Word Processing Mode (NTPC/SSC/Court)
  const [wordProcessorMode, setWordProcessorMode] = useState<boolean>(false);
  const [allowParagraphs, setAllowParagraphs] = useState<boolean>(false);

  // Test Execution States
  const [testDuration, setTestDuration] = useState<TestDuration>(10);
  const [typedText, setTypedText] = useState<string>('');
  const [isTesting, setIsTesting] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(10 * 60);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [backspaceCount, setBackspaceCount] = useState<number>(0);
  const [totalKeystrokes, setTotalKeystrokes] = useState<number>(0);

  // Modals
  const [showResultModal, setShowResultModal] = useState<boolean>(false);
  const [showPrintModal, setShowPrintModal] = useState<boolean>(false);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [resultData, setResultData] = useState<TypingResultData | null>(null);

  // Custom Exercise & File Import States
  const [modalTab, setModalTab] = useState<'upload' | 'manual'>('upload');
  const [customTitle, setCustomTitle] = useState<string>('');
  const [customCategory, setCustomCategory] = useState<string>('');
  const [customContent, setCustomContent] = useState<string>('');
  const [isParsingFile, setIsParsingFile] = useState<boolean>(false);
  const [parseProgress, setParseProgress] = useState<string>('');
  const [parseError, setParseError] = useState<string | null>(null);
  const [isDraggingFile, setIsDraggingFile] = useState<boolean>(false);
  const [uploadedFileMeta, setUploadedFileMeta] = useState<{
    name: string;
    size: string;
    type: string;
    words: number;
    pages?: number;
  } | null>(null);

  // Hidden file input ref
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Refs for tracking DOM elements and state without rerenders
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const targetBoxRef = useRef<HTMLDivElement>(null);
  const activeWordRef = useRef<HTMLSpanElement>(null);
  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const elapsedSecondsRef = useRef<number>(0);
  const typedTextRef = useRef<string>('');
  const handleCompleteTestRef = useRef<() => void>(() => {});

  // Retrieve current active lesson (supports up to 500 exercises)
  const currentLesson: EnglishTestLesson = useMemo(() => {
    const found = lessons.find((l) => l.id === selectedLessonId);
    if (found) return found;

    // Fallback template for any exercise from 101 to 500
    const fallbackSeed = lessons[(selectedLessonId - 1) % lessons.length];
    return {
      id: selectedLessonId,
      title: `Exercise : ${selectedLessonId}/500 - RSSB LDC Mock Test`,
      category: 'RSSB LDC Practice',
      content: fallbackSeed ? fallbackSeed.content : RSSB_LDC_ENGLISH_LESSONS[0].content,
    };
  }, [lessons, selectedLessonId]);

  // Clean raw lesson text (ensuring tabs are removed as they are not part of exams)
  const cleanTargetText = useMemo(() => {
    return currentLesson.content.replace(/\r\n/g, '\n').replace(/\t+/g, ' ').trim();
  }, [currentLesson]);

  // Split target words
  const targetWords = useMemo(() => {
    return cleanTargetText.split(/\s+/).filter(Boolean);
  }, [cleanTargetText]);

  // Split typed words
  const typedWords = useMemo(() => {
    return typedText.trim().length > 0 ? typedText.trim().split(/\s+/).filter(Boolean) : [];
  }, [typedText]);

  // Determine active target word index
  const currentWordIndex = useMemo(() => {
    if (typedText.endsWith(' ') || typedText.endsWith('\n')) {
      return typedWords.length;
    }
    return Math.max(0, typedWords.length - 1);
  }, [typedText, typedWords.length]);

  // Cursor constraint helper: keep cursor at the end
  const ensureCursorAtEnd = () => {
    if (!inputRef.current) return;
    const len = inputRef.current.value.length;
    inputRef.current.setSelectionRange(len, len);
  };

  // Reset test state
  const resetTest = (newDuration?: TestDuration) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    const dur = newDuration ?? testDuration;
    setIsTesting(false);
    startTimeRef.current = null;
    setTimeRemaining(dur * 60);
    setElapsedSeconds(0);
    elapsedSecondsRef.current = 0;
    setTypedText('');
    typedTextRef.current = '';
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
  }, [selectedLessonId, testDuration, applyWordLimit, wordLimit]);

  // When switching to Exam Mode, enforce strict official exam settings
  const handleEnterExamMode = () => {
    setIsExamMode(true);
    setBackspaceOption('one_word');
    setHighlightOption('no_highlight');
    setShowScrollbar(true);
    setAutoScroll(false);
    setApplyWordLimit(true);
    setWordLimit(600);
    setWordProcessorMode(false);
    setAllowParagraphs(false);
    resetTest();
  };

  const handleExitExamMode = () => {
    setIsExamMode(false);
    resetTest();
  };

  // Timer countdown
  useEffect(() => {
    if (isTesting) {
      if (!startTimeRef.current) {
        startTimeRef.current = Date.now();
      }
      timerRef.current = window.setInterval(() => {
        const now = Date.now();
        const start = startTimeRef.current || now;
        const actualElapsedSec = Math.floor((now - start) / 1000);
        const totalDurationSec = testDuration * 60;
        const remainingSec = Math.max(0, totalDurationSec - actualElapsedSec);

        setElapsedSeconds(actualElapsedSec);
        elapsedSecondsRef.current = actualElapsedSec;
        setTimeRemaining(remainingSec);

        if (remainingSec <= 0) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          handleCompleteTestRef.current();
        }
      }, 250);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isTesting, testDuration]);

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

  // Calculate Test Results with RSSB LDC / Rajasthan Exam Criteria
  const handleCompleteTest = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsTesting(false);

    const currentTyped = typedTextRef.current;
    const currentElapsed = Math.max(1, elapsedSecondsRef.current);
    const words = currentTyped.trim().length > 0 ? currentTyped.trim().split(/\s+/).filter(Boolean) : [];

    const evaluation = alignAndEvaluateWords(targetWords, words, currentElapsed);

    const result: TypingResultData = {
      lessonTitle: currentLesson.title,
      lessonId: currentLesson.id,
      language: 'english',
      totalChars: currentTyped.length,
      correctChars: evaluation.correctCharsCount,
      errorCount: evaluation.errorCharsCount,
      elapsedSeconds: currentElapsed,
      accuracy: evaluation.accuracy,
      grossWPM5: evaluation.grossWPM5,
      netWPM5: evaluation.netWPM5,
      grossKPM: evaluation.grossKPM,
      grossKPH: evaluation.grossKPH,
      netKPM: evaluation.netKPM,
      netKPH: evaluation.netKPH,
      spaceWordsTotal: evaluation.totalWordsTyped,
      spaceWordsCorrect: evaluation.correctWordsCount,
      spaceWordsIncorrect: evaluation.incorrectWordsCount,
      grossWPMWords: evaluation.grossWPMWords,
      netWPMWords: evaluation.netWPMWords,
      backspaceCount,
      typedParagraph: currentTyped,
      evaluatedWords: evaluation.evaluatedWords,
    };

    setResultData(result);
    setShowResultModal(true);
  };
  handleCompleteTestRef.current = handleCompleteTest;

  // Keystroke handler for Backspace restrictions, cursor locking & Auto-start
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Auto-start timer on first printable keypress
    if (!isTesting && e.key.length === 1) {
      setIsTesting(true);
      if (!startTimeRef.current) {
        startTimeRef.current = Date.now();
      }
    }

    // Disallow navigating backwards into typed text (standard government exam rule)
    if (
      e.key === 'ArrowLeft' ||
      e.key === 'ArrowUp' ||
      e.key === 'Home' ||
      e.key === 'PageUp'
    ) {
      e.preventDefault();
      ensureCursorAtEnd();
      return;
    }

    // Backspace logic
    if (e.key === 'Backspace') {
      setBackspaceCount((prev) => prev + 1);

      if (backspaceOption === 'deactivate') {
        e.preventDefault();
        playErrorBeep(soundEnabled);
        return;
      }

      if (backspaceOption === 'one_word') {
        // Prevent deleting space between previous word and current word
        const selectionStart = e.currentTarget.selectionStart;
        if (selectionStart > 0) {
          const charToDelete = typedText[selectionStart - 1];
          if (charToDelete === ' ' || charToDelete === '\n') {
            e.preventDefault();
            playErrorBeep(soundEnabled);
            return;
          }
        }
      }
    }

    // Tab key handling - strictly prohibited in government typing exams
    if (e.key === 'Tab') {
      e.preventDefault();
      return;
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
    // Strip tabs if pasted or entered (exams do not permit tab indentation)
    const nextVal = e.target.value.replace(/\t+/g, ' ');
    setTotalKeystrokes((prev) => prev + 1);

    // Auto-start timer if not already running
    if (!isTesting && nextVal.length > 0) {
      setIsTesting(true);
      if (!startTimeRef.current) {
        startTimeRef.current = Date.now();
      }
    }

    // Prevent modifying previous characters
    const prevLen = typedText.length;
    if (nextVal.length > prevLen) {
      playKeyClick(soundEnabled);
    }

    // Word limit check
    if (applyWordLimit && wordLimit > 0) {
      const words = nextVal.trim().length > 0 ? nextVal.trim().split(/\s+/).filter(Boolean) : [];
      if (words.length > wordLimit) {
        const truncatedWords = words.slice(0, wordLimit);
        const finalVal = truncatedWords.join(' ');
        setTypedText(finalVal);
        typedTextRef.current = finalVal;
        setTimeout(() => {
          handleCompleteTestRef.current();
        }, 50);
        return;
      } else if (words.length === wordLimit && (nextVal.endsWith(' ') || nextVal.endsWith('\n'))) {
        const finalVal = nextVal.trimEnd();
        setTypedText(finalVal);
        typedTextRef.current = finalVal;
        setTimeout(() => {
          handleCompleteTestRef.current();
        }, 50);
        return;
      }
    }

    setTypedText(nextVal);
    typedTextRef.current = nextVal;
  };

  // Handle storage file (text or pdf) processing
  const handleProcessFile = async (file: File) => {
    setIsParsingFile(true);
    setParseError(null);
    setParseProgress('Reading file from storage...');

    try {
      const result: ParseResult = await parseExerciseFile(file, (curr, total) => {
        setParseProgress(`Extracting text from PDF (Page ${curr} of ${total})...`);
      });

      if (result.errorMessage || !result.text) {
        setParseError(result.errorMessage || 'Could not extract text from this file.');
        setIsParsingFile(false);
        return;
      }

      // Format file size
      const sizeStr =
        file.size < 1024 * 1024
          ? `${(file.size / 1024).toFixed(1)} KB`
          : `${(file.size / (1024 * 1024)).toFixed(1)} MB`;

      setUploadedFileMeta({
        name: file.name,
        size: sizeStr,
        type: result.fileType === 'pdf' ? 'PDF Document' : 'Text File (.txt)',
        words: result.wordCount,
        pages: result.pageCount,
      });

      // Derive clean title from filename
      const cleanName = file.name
        .replace(/\.[^/.]+$/, '')
        .replace(/[_-]+/g, ' ')
        .trim();

      const nextId = Math.max(100, ...lessons.map((l) => l.id)) + 1;
      setCustomTitle(`Exercise : ${nextId}/500 - ${cleanName}`);
      setCustomCategory(result.fileType === 'pdf' ? 'Storage Import (PDF)' : 'Storage Import (.txt)');
      setCustomContent(result.text.replace(/\t+/g, ' '));
      setParseProgress('');
    } catch (err: unknown) {
      setParseError(err instanceof Error ? err.message : 'Error reading file.');
    } finally {
      setIsParsingFile(false);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setShowAddModal(true);
      setModalTab('upload');
      handleProcessFile(file);
    }
    // reset input so same file can be re-selected if desired
    e.target.value = '';
  };

  // Drag and drop handlers for upload box
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingFile(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingFile(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingFile(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleProcessFile(file);
    }
  };

  // Add custom exercise submit (supports both auto-start and save-to-list)
  const handleSaveExercise = (autoStart = true) => {
    if (!customContent.trim()) {
      setParseError('Please provide exercise text or upload a file.');
      return;
    }

    const nextId = Math.max(100, ...lessons.map((l) => l.id)) + 1;
    const newLesson: EnglishTestLesson = {
      id: nextId,
      title: customTitle.trim() || `Exercise : ${nextId}/500 - Custom Practice`,
      category: customCategory.trim() || 'Custom Exercise',
      content: customContent.replace(/\t+/g, ' ').trim(),
    };

    const updatedLessons = [...lessons, newLesson];
    setLessons(updatedLessons);

    // Save only custom lessons (id > 100) to storage
    const customOnly = updatedLessons.filter((l) => l.id > 100);
    saveCustomLessonsToStorage(customOnly);

    if (autoStart) {
      setSelectedLessonId(nextId);
      setShowAddModal(false);
    } else {
      setParseProgress('Exercise saved to tests list!');
      setTimeout(() => setParseProgress(''), 2500);
    }

    // Reset modal form
    setCustomTitle('');
    setCustomCategory('');
    setCustomContent('');
    setUploadedFileMeta(null);
    setParseError(null);
  };

  // Delete custom exercise
  const handleDeleteCustomLesson = (lessonId: number) => {
    if (window.confirm(`Are you sure you want to remove Exercise ${lessonId} from your saved tests?`)) {
      const updated = lessons.filter((l) => l.id !== lessonId);
      setLessons(updated);
      const customOnly = updated.filter((l) => l.id > 100);
      saveCustomLessonsToStorage(customOnly);

      if (selectedLessonId === lessonId) {
        setSelectedLessonId(1);
      }
    }
  };

  // Add custom exercise submit form handler
  const handleAddExerciseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSaveExercise(true);
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
      className="min-h-screen flex flex-col font-sans select-none bg-[#cbd0d8] text-slate-800"
    >
      {/* 1. Top Windows Title Bar */}
      <div className="relative">
        <TitleBar title="Soni Typing Tutor" />
        <button
          onClick={onBackToHome}
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 flex items-center gap-1 px-1.5 py-0.5 bg-white/20 hover:bg-white/40 text-white rounded text-[11px] font-semibold cursor-pointer transition-colors"
          title="Back to Soni Typing Tutor Home Menu"
        >
          <ArrowLeft className="w-3 h-3" />
          <span>Home</span>
        </button>
      </div>

      {/* Hidden file input for direct storage import of .txt and .pdf files */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".txt,.pdf,text/plain,application/pdf"
        onChange={handleFileInputChange}
        className="hidden"
      />

      {/* 2. Main Workspace Layout */}
      <div className="flex-1 p-2 md:p-3 flex flex-col lg:flex-row gap-2.5 items-stretch w-full overflow-hidden">
        {/* ================= LEFT / MAIN: TYPING TEST BOX ================= */}
        <div
          className={`flex-1 flex flex-col bg-[#8f93db] border border-[#787cb8] rounded-xs shadow-md overflow-hidden p-1.5 gap-1.5 transition-all ${
            isExamMode ? 'w-full' : ''
          }`}
        >
          {/* Top Action Ribbon (Screenshot 276 & 275) */}
          <div className="flex items-center justify-between px-1 py-0.5 text-xs">
            {/* Left: Go Printout Mode */}
            <button
              onClick={() => setShowPrintModal(true)}
              className="px-3 py-1 bg-[#e8eaf0] hover:bg-white text-[#7f1d1d] border border-[#b91c1c] font-bold text-xs rounded-xs shadow-2xs cursor-pointer transition-colors"
            >
              Go Printout Mode
            </button>

            {/* Center: Add New Exercise & Import from Storage */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  fileInputRef.current?.click();
                }}
                className="flex items-center gap-1.5 px-3 py-1 bg-[#15803d] hover:bg-[#166534] text-white font-bold text-xs rounded-xs shadow-2xs cursor-pointer transition-colors"
                title="Add new exercise directly from storage text file (.txt) or PDF (.pdf)"
              >
                <FileUp className="w-3.5 h-3.5" />
                <span>Import File (.txt / .pdf)</span>
              </button>

              <button
                onClick={() => {
                  setModalTab('upload');
                  setShowAddModal(true);
                }}
                className="flex items-center gap-1 text-[#1d4ed8] hover:underline font-semibold text-xs cursor-pointer"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Add New Exercise</span>
              </button>
            </div>

            {/* Right: Go Exam Mode / Exit Exam Mode */}
            {!isExamMode ? (
              <button
                onClick={handleEnterExamMode}
                className="px-3 py-1 bg-[#e8eaf0] hover:bg-white text-[#7f1d1d] border border-[#b91c1c] font-bold text-xs rounded-xs shadow-2xs cursor-pointer transition-colors"
              >
                Go Exam Mode
              </button>
            ) : (
              <button
                onClick={handleExitExamMode}
                className="px-3 py-1 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-xs rounded-xs shadow-xs cursor-pointer transition-colors"
              >
                Exit Exam Mode
              </button>
            )}
          </div>

          {/* TOP BOX: Target Reference Passage Display Area */}
          <div
            ref={targetBoxRef}
            className={`flex-1 min-h-[220px] max-h-[310px] bg-white border border-slate-600 rounded-xs p-3 leading-relaxed shadow-inner select-text ${
              showScrollbar ? 'overflow-y-scroll' : 'overflow-y-auto'
            } text-slate-900`}
            style={{
              fontFamily: selectedFont,
              fontWeight: isBold ? 700 : 400,
              fontSize: `${fontSize}px`,
            }}
          >
            {highlightOption === 'no_highlight' ? (
              // Plain clean text as in Screenshot 276
              <div className="whitespace-pre-wrap">{cleanTargetText}</div>
            ) : highlightOption === 'letter' ? (
              // Letter Highlight
              <div>
                {cleanTargetText.split('').map((char, cIdx) => {
                  const isCurrent = cIdx === typedText.length;
                  return (
                    <span
                      key={cIdx}
                      className={
                        isCurrent
                          ? 'bg-black text-white font-bold px-0.5 rounded-[1px]'
                          : ''
                      }
                    >
                      {char}
                    </span>
                  );
                })}
              </div>
            ) : (
              // Word Highlight or Word + Error Highlight
              targetWords.map((word, idx) => {
                const isCurrent = idx === currentWordIndex;
                const isTyped = idx < typedWords.length;
                const isCorrect = isTyped && typedWords[idx] === word;
                const isWrong = isTyped && !isCorrect;

                let highlightClass = 'mr-1.5 inline-block';

                if (highlightOption === 'word') {
                  if (isCurrent) {
                    highlightClass += ' bg-[#fef08a] text-black px-0.5 rounded-xs font-semibold';
                  }
                } else if (highlightOption === 'word_error') {
                  if (isCurrent) {
                    highlightClass += ' bg-[#fef08a] text-black px-0.5 rounded-xs font-semibold';
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
              })
            )}
          </div>

          {/* MIDDLE PURPLE CONTROL BAR (Screenshot 276 & 275) */}
          <div className="flex flex-col gap-1 bg-[#868ad2] p-1 rounded-xs text-xs text-white">
            {/* Instruction / Live Timer Notification */}
            <div className="text-center font-medium text-[11.5px] text-white/95 py-0.5">
              {isTesting ? (
                <div className="flex items-center justify-center gap-3">
                  <span className="bg-amber-300 text-amber-950 font-bold px-2 py-0.5 rounded-xs text-xs font-mono shadow-xs">
                    Time Left: {formatTime(timeRemaining)}
                  </span>
                  <span>
                    Words: <strong>{typedWords.length}</strong> / {applyWordLimit ? wordLimit : targetWords.length}
                  </span>
                  <span>
                    Backspaces: <strong>{backspaceCount}</strong>
                  </span>
                  <button
                    onClick={() => handleCompleteTest()}
                    className="px-2 py-0.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xs font-bold text-xs shadow-xs cursor-pointer ml-1"
                  >
                    Submit Test
                  </button>
                  <button
                    onClick={() => resetTest()}
                    className="px-2 py-0.5 bg-white/20 hover:bg-white/30 text-white rounded-xs text-xs cursor-pointer"
                  >
                    Restart
                  </button>
                </div>
              ) : (
                <span>Select test duration and start typing. Timer will start automatically</span>
              )}
            </div>

            {/* Controls Strip */}
            <div className="flex items-center justify-between px-1.5 py-0.5 text-xs text-white">
              {/* Left: Duration Selector */}
              <div className="flex items-center gap-1.5 font-semibold">
                <span>Duration :</span>
                <select
                  value={testDuration}
                  onChange={(e) => {
                    const dur = parseInt(e.target.value, 10) as TestDuration;
                    setTestDuration(dur);
                    resetTest(dur);
                  }}
                  className="bg-white text-slate-800 border border-slate-300 rounded-xs px-2 py-0.5 text-xs font-normal"
                >
                  <option value={1}>1 Minute</option>
                  <option value={2}>2 Minutes</option>
                  <option value={5}>5 Minutes</option>
                  <option value={10}>10 Minutes</option>
                  <option value={15}>15 Minutes</option>
                  <option value={20}>20 Minutes</option>
                </select>
              </div>

              {/* Center: Exercise Navigation: << Exercise : 1/500 >> */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    if (selectedLessonId > 1) {
                      setSelectedLessonId(selectedLessonId - 1);
                    }
                  }}
                  disabled={selectedLessonId <= 1}
                  className="px-2 py-0.5 bg-white text-slate-800 hover:bg-slate-100 disabled:opacity-40 rounded-xs font-bold border border-slate-300 shadow-2xs cursor-pointer"
                  title="Previous Exercise"
                >
                  &lt;&lt;
                </button>

                <select
                  value={selectedLessonId}
                  onChange={(e) => setSelectedLessonId(parseInt(e.target.value, 10))}
                  className="bg-white text-slate-800 border border-slate-300 rounded-xs px-2 py-0.5 text-xs min-w-[190px] max-w-[280px] md:max-w-[340px] truncate"
                >
                  {/* Custom Storage Exercises first */}
                  {lessons
                    .filter((l) => l.id > 100)
                    .map((l) => (
                      <option key={`custom-${l.id}`} value={l.id} className="font-semibold text-emerald-800">
                        ⭐ [Storage] {l.title}
                      </option>
                    ))}

                  {/* Standard 500 exercises */}
                  {Array.from({ length: 500 }, (_, i) => i + 1).map((num) => {
                    const known = lessons.find((l) => l.id === num);
                    const label = known
                      ? known.title
                      : `Exercise : ${num}/500 - RSSB LDC Mock Test`;
                    return (
                      <option key={num} value={num}>
                        {label}
                      </option>
                    );
                  })}
                </select>

                <button
                  onClick={() => {
                    if (selectedLessonId < 500) {
                      setSelectedLessonId(selectedLessonId + 1);
                    }
                  }}
                  disabled={selectedLessonId >= 500}
                  className="px-2 py-0.5 bg-white text-slate-800 hover:bg-slate-100 disabled:opacity-40 rounded-xs font-bold border border-slate-300 shadow-2xs cursor-pointer"
                  title="Next Exercise"
                >
                  &gt;&gt;
                </button>

                {/* If selected lesson is a custom imported test, show delete button */}
                {selectedLessonId > 100 && (
                  <button
                    onClick={() => handleDeleteCustomLesson(selectedLessonId)}
                    className="p-1 bg-red-100 hover:bg-red-200 text-red-700 rounded-xs border border-red-300 cursor-pointer transition-colors"
                    title="Delete this custom test from storage"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Right: Font Size Adjuster: A- 18 A+ */}
              <div className="flex items-center gap-1 bg-white p-0.5 rounded-xs border border-slate-300 text-slate-800">
                <button
                  onClick={() => setFontSize((f) => Math.max(12, f - 1))}
                  className="px-1.5 py-0.5 hover:bg-slate-200 text-xs font-bold rounded-xs cursor-pointer"
                  title="Decrease Font Size"
                >
                  A-
                </button>
                <span className="px-1 text-xs font-bold text-blue-900">{fontSize}</span>
                <button
                  onClick={() => setFontSize((f) => Math.min(32, f + 1))}
                  className="px-1.5 py-0.5 hover:bg-slate-200 text-xs font-bold rounded-xs cursor-pointer"
                  title="Increase Font Size"
                >
                  A+
                </button>
              </div>
            </div>
          </div>

          {/* BOTTOM BOX: User Typing Input Area */}
          <div className="flex-1 min-h-[220px] max-h-[310px] bg-white border border-slate-600 rounded-xs shadow-inner flex flex-col relative overflow-hidden">
            <textarea
              ref={inputRef}
              value={typedText}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onClick={ensureCursorAtEnd}
              onMouseUp={ensureCursorAtEnd}
              onSelect={ensureCursorAtEnd}
              onFocus={ensureCursorAtEnd}
              onTouchEnd={ensureCursorAtEnd}
              placeholder=""
              autoFocus
              spellCheck={false}
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              className={`w-full h-full p-3 resize-none focus:outline-hidden leading-relaxed ${
                showScrollbar ? 'overflow-y-scroll' : 'overflow-y-auto'
              } text-slate-900`}
              style={{
                fontFamily: selectedFont,
                fontWeight: isBold ? 700 : 400,
                fontSize: `${fontSize}px`,
              }}
            />
          </div>
        </div>

        {/* ================= RIGHT SIDEBAR: SETTINGS (Screenshot 276) ================= */}
        {!isExamMode && (
          <div className="w-full lg:w-[260px] xl:w-[270px] shrink-0 bg-[#e4e7ec] border border-slate-300 rounded-xs p-2 flex flex-col gap-2.5 text-xs text-slate-800 select-none">
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
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="highlight_opt"
                    checked={highlightOption === 'letter'}
                    onChange={() => setHighlightOption('letter')}
                    className="text-blue-600 cursor-pointer"
                  />
                  <span>Letter Highlight</span>
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
              <div className="flex flex-col gap-1.5 mt-0.5">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={applyWordLimit}
                    onChange={(e) => setApplyWordLimit(e.target.checked)}
                    className="rounded text-blue-600 cursor-pointer"
                  />
                  <span>Apply Word Limit</span>
                </label>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    min={50}
                    max={1500}
                    value={wordLimit}
                    onChange={(e) => setWordLimit(parseInt(e.target.value, 10) || 600)}
                    disabled={!applyWordLimit}
                    className="w-full px-2 py-0.5 border border-slate-400 rounded-xs text-xs bg-white disabled:bg-slate-100"
                  />
                </div>
                <div className="text-[10px] text-slate-500">(min=50, max=1500)</div>
              </div>
            </fieldset>

            {/* 5. Word Processing Mode(NTPC/SSC/Court) */}
            <fieldset className="border border-slate-300 rounded-xs p-2 bg-white/70">
              <legend className="text-[11px] font-bold text-slate-700 px-1">
                Word Processing Mode(NTPC/SSC/Court)
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
              </div>
            </fieldset>
          </div>
        )}
      </div>

      {/* ================= PRINTOUT MODE MODAL ================= */}
      {showPrintModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden text-slate-900 border border-slate-300">
            {/* Modal Header */}
            <div className="bg-[#2b3595] text-white px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-sm">
                <Printer className="w-4 h-4" />
                <span>Soni Typing Tutor - Printout Mode Sheet</span>
              </div>
              <button
                onClick={() => setShowPrintModal(false)}
                className="text-white/80 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Printable Content Area */}
            <div className="p-6 overflow-y-auto flex-1 font-serif text-[15px] leading-relaxed select-text">
              {/* Exam Header */}
              <div className="text-center border-b-2 border-slate-800 pb-3 mb-4">
                <h1 className="text-xl font-bold tracking-wide">SONI TYPING TUTOR</h1>
                <h2 className="text-sm font-semibold uppercase text-slate-700">
                  Rajasthan Staff Selection Board (RSSB) LDC Exam Practice Sheet
                </h2>
                <div className="flex justify-between text-xs font-sans mt-2 pt-2 border-t border-slate-300">
                  <span>
                    <strong>Exercise:</strong> {currentLesson.title}
                  </span>
                  <span>
                    <strong>Word Count:</strong> {targetWords.length} words
                  </span>
                  <span>
                    <strong>Date:</strong> {new Date().toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* Student Details Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs font-sans border border-slate-300 p-2 mb-4 bg-slate-50">
                <div>Candidate Name: ___________________________</div>
                <div>Roll Number: ___________________________</div>
                <div>Batch / Center: ___________________________</div>
                <div>Time Allowed: {testDuration} Minutes</div>
              </div>

              {/* Passage Text */}
              <div className="p-4 border border-slate-400 bg-white rounded text-justify indent-8 leading-7">
                {cleanTargetText}
              </div>

              {/* Signature Section */}
              <div className="flex justify-between items-end mt-8 pt-4 border-t border-dashed border-slate-400 text-xs font-sans">
                <div className="text-center">
                  <div className="w-40 border-b border-slate-600 mb-1"></div>
                  <span>Candidate Signature</span>
                </div>
                <div className="text-center">
                  <div className="w-40 border-b border-slate-600 mb-1"></div>
                  <span>Invigilator / Examiner Signature</span>
                </div>
              </div>
            </div>

            {/* Modal Footer Controls */}
            <div className="bg-slate-100 border-t border-slate-200 px-4 py-2 flex items-center justify-between">
              <span className="text-xs text-slate-600">
                Print this sheet for offline paper-to-screen typing practice.
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded font-bold text-xs shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Sheet</span>
                </button>
                <button
                  onClick={() => setShowPrintModal(false)}
                  className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded font-semibold text-xs cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= ADD NEW EXERCISE MODAL (STORAGE FILE & MANUAL) ================= */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3 md:p-4">
          <div className="bg-white rounded shadow-2xl max-w-2xl w-full flex flex-col overflow-hidden text-slate-900 border border-slate-300 max-h-[92vh]">
            {/* Modal Header */}
            <div className="bg-[#2b3595] text-white px-4 py-2.5 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2 font-bold text-sm">
                <FileText className="w-4 h-4 text-amber-300" />
                <span>Add Exercise to Soni Typing Tutor (From Storage .txt / .pdf)</span>
              </div>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setParseError(null);
                }}
                className="text-white/80 hover:text-white cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="flex border-b border-slate-200 bg-slate-100 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setModalTab('upload')}
                className={`flex-1 py-2 px-3 flex items-center justify-center gap-1.5 border-b-2 cursor-pointer transition-colors ${
                  modalTab === 'upload'
                    ? 'border-blue-600 bg-white text-blue-700 font-bold'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <UploadCloud className="w-3.5 h-3.5 text-blue-600" />
                <span>Import from Storage (.txt / .pdf)</span>
              </button>
              <button
                type="button"
                onClick={() => setModalTab('manual')}
                className={`flex-1 py-2 px-3 flex items-center justify-center gap-1.5 border-b-2 cursor-pointer transition-colors ${
                  modalTab === 'manual'
                    ? 'border-blue-600 bg-white text-blue-700 font-bold'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-slate-600" />
                <span>Manual Paste / Typing</span>
              </button>
            </div>

            {/* Scrollable Modal Body */}
            <div className="p-4 overflow-y-auto flex flex-col gap-3 text-xs flex-1">
              {/* Error Message Banner */}
              {parseError && (
                <div className="p-2.5 bg-red-50 border border-red-200 rounded flex items-start gap-2 text-red-700">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-semibold">{parseError}</p>
                    <p className="text-[11px] text-red-600 mt-0.5">
                      Ensure your file contains selectable text characters. You can also paste text manually in the "Manual Paste" tab.
                    </p>
                  </div>
                </div>
              )}

              {/* Upload Tab: File Drag-and-Drop Area */}
              {modalTab === 'upload' && (
                <div>
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-lg p-4 text-center flex flex-col items-center justify-center transition-all ${
                      isDraggingFile
                        ? 'border-blue-600 bg-blue-50/80 scale-[0.99]'
                        : uploadedFileMeta
                        ? 'border-emerald-500 bg-emerald-50/40'
                        : 'border-slate-300 bg-slate-50 hover:bg-slate-100/70 hover:border-slate-400'
                    }`}
                  >
                    {isParsingFile ? (
                      <div className="py-4 flex flex-col items-center gap-2 text-blue-700">
                        <Loader2 className="w-7 h-7 animate-spin text-blue-600" />
                        <span className="font-semibold text-xs">{parseProgress || 'Processing document...'}</span>
                      </div>
                    ) : uploadedFileMeta ? (
                      <div className="py-1 flex flex-col items-center gap-2 text-slate-800">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          <span className="font-bold text-xs text-emerald-800">{uploadedFileMeta.name}</span>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px]">
                          <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">
                            {uploadedFileMeta.type}
                          </span>
                          <span className="bg-slate-200 text-slate-700 px-2 py-0.5 rounded">
                            Size: {uploadedFileMeta.size}
                          </span>
                          {uploadedFileMeta.pages && (
                            <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-medium">
                              Pages: {uploadedFileMeta.pages}
                            </span>
                          )}
                          <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">
                            Words: {uploadedFileMeta.words}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="mt-1 text-[11px] text-blue-600 hover:underline font-semibold cursor-pointer"
                        >
                          Upload a different file (.txt / .pdf)
                        </button>
                      </div>
                    ) : (
                      <div className="py-2 flex flex-col items-center gap-2">
                        <div className="flex items-center gap-2 text-slate-400">
                          <div className="p-2 bg-blue-100 text-blue-700 rounded-md font-bold text-[10px]">
                            TXT
                          </div>
                          <div className="p-2 bg-red-100 text-red-700 rounded-md font-bold text-[10px]">
                            PDF
                          </div>
                        </div>
                        <div>
                          <p className="font-bold text-slate-700 text-xs">
                            Drag & drop your Text file (.txt) or PDF document (.pdf) here
                          </p>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            Supports official exam passages, legal briefs, notifications, and typing tests
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="mt-1 px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded shadow-xs cursor-pointer flex items-center gap-1.5 text-xs transition-colors"
                        >
                          <UploadCloud className="w-3.5 h-3.5" />
                          <span>Browse Device Storage</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Title & Category Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Exercise Title:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Exercise : 101/500 - High Court Mock"
                    value={customTitle}
                    onChange={(e) => setCustomTitle(e.target.value)}
                    className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs focus:outline-hidden focus:ring-1 focus:ring-blue-600 bg-white"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Category:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Storage File / Legal Draft"
                    value={customCategory}
                    onChange={(e) => setCustomCategory(e.target.value)}
                    className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs focus:outline-hidden focus:ring-1 focus:ring-blue-600 bg-white"
                  />
                </div>
              </div>

              {/* Paragraph Content Textarea */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="font-semibold text-slate-700 flex items-center gap-1">
                    <span>Exercise Content / Paragraph:</span>
                    <span className="text-[10px] text-slate-400 font-normal">
                      (You can review & edit the extracted text below)
                    </span>
                  </label>
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded border border-slate-200">
                      Words: <strong className="text-blue-700">{customContent.trim().split(/\s+/).filter(Boolean).length}</strong>
                    </span>
                    <span className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded border border-slate-200">
                      Chars: {customContent.length}
                    </span>
                  </div>
                </div>
                <textarea
                  rows={7}
                  placeholder={
                    modalTab === 'upload'
                      ? 'Upload a .txt or .pdf file above, and its parsed text will automatically appear here for your review...'
                      : 'Type or paste your custom typing test paragraph here...'
                  }
                  value={customContent}
                  onChange={(e) => setCustomContent(e.target.value)}
                  required
                  className="w-full p-2.5 border border-slate-300 rounded text-xs focus:outline-hidden focus:ring-1 focus:ring-blue-600 resize-none font-mono leading-relaxed bg-white"
                />
              </div>

              {/* Word Count Recommendation Alert */}
              <div className="bg-amber-50 border border-amber-200 rounded p-2 text-[11px] text-amber-800 flex items-center justify-between">
                <span>
                  💡 <strong>RSSB LDC Standard:</strong> 10-minute tests typically feature 500–600 words (word limit setting can be enabled in the sidebar).
                </span>
                {customContent.trim().split(/\s+/).filter(Boolean).length >= 400 && (
                  <span className="text-emerald-700 font-bold shrink-0 ml-2">✓ Ideal Exam Length</span>
                )}
              </div>
            </div>

            {/* Modal Actions Footer */}
            <div className="bg-slate-100 border-t border-slate-200 px-4 py-2.5 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setShowAddModal(false);
                  setParseError(null);
                }}
                className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded font-semibold text-xs cursor-pointer transition-colors"
              >
                Cancel
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleSaveExercise(false)}
                  disabled={!customContent.trim()}
                  className="px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded font-bold text-xs shadow-2xs cursor-pointer transition-colors disabled:opacity-40"
                  title="Save this exercise into dropdown list without starting right away"
                >
                  Save to Tests List
                </button>
                <button
                  type="button"
                  onClick={() => handleSaveExercise(true)}
                  disabled={!customContent.trim()}
                  className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded font-bold text-xs shadow-xs cursor-pointer transition-colors disabled:opacity-40 flex items-center gap-1.5"
                >
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>Save & Start Typing Test</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= OFFICIAL EVALUATION RESULT MODAL ================= */}
      {showResultModal && resultData && (
        <ResultModal
          result={resultData}
          onClose={() => setShowResultModal(false)}
          onRetry={() => {
            setShowResultModal(false);
            resetTest();
          }}
          onNextLesson={() => {
            setShowResultModal(false);
            if (selectedLessonId < 500) {
              setSelectedLessonId(selectedLessonId + 1);
            }
          }}
        />
      )}
    </div>
  );
};
