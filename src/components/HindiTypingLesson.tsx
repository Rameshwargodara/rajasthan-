import React, { useState, useEffect, useRef, useMemo } from 'react';
import { TitleBar } from './TitleBar';
import { KrutiKeyboard } from './KrutiKeyboard';
import { LeftHand, RightHand } from './HandIndicators';
import { AltCodesModal } from './AltCodesModal';
import { ResultModal, TypingResultData } from './ResultModal';
import {
  KEY_TO_HINDI,
  getFingerForKey,
  cleanHindiChar,
  KRUTI_ALT_CODES,
} from '../lib/krutiMapping';
import { HINDI_LEARN_KEYS_LESSONS, HindiLesson } from '../data/hindiLessons';
import { ENGLISH_LESSONS, EnglishLesson } from '../data/englishLessons';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  BookOpen,
  Keyboard as KeyboardIcon,
  FileText,
  Type,
  Volume2,
  VolumeX,
  Languages,
  Zap,
  Target,
} from 'lucide-react';

interface HindiTypingLessonProps {
  onBackToHome: () => void;
  initialLanguage?: 'hindi' | 'english';
}

function playKeySound(isError: boolean) {
  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (!isError) {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(650, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } else {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, ctx.currentTime);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    }
  } catch {
    // Ignore audio context autoplay errors
  }
}

/**
 * Checks if a vowel/matra character is standalone (individual without a base consonant),
 * so it needs extra width/spacing to avoid overlapping on itself.
 * If the vowel is on a letter (e.g. 'ds' = के), this returns false to preserve normal ligature rendering.
 */
function isIndividualVowel(chars: Array<string | { char: string }>, idx: number): boolean {
  const getChar = (i: number) => {
    if (i < 0 || i >= chars.length) return '';
    const item = chars[i];
    return typeof item === 'string' ? item : item.char;
  };

  const currentChar = getChar(idx);
  // Target individual matras like 's' (े), 'S' (ै), 'a' (ं), 'q' (ु), 'w' (ू)
  if (
    currentChar !== 's' &&
    currentChar !== 'S' &&
    currentChar !== 'q' &&
    currentChar !== 'w' &&
    currentChar !== 'a'
  ) {
    return false;
  }

  // Find boundaries of the current whitespace-delimited word
  let start = idx;
  while (start > 0 && getChar(start - 1) !== ' ' && getChar(start - 1) !== '\n') {
    start--;
  }
  let end = idx;
  while (end < chars.length - 1 && getChar(end + 1) !== ' ' && getChar(end + 1) !== '\n') {
    end++;
  }

  // Base consonants in KrutiDev layout
  const BASE_CONSONANTS = /[dl;'gjrtvueiopzxcvbnmDLGJRTVEIOPZXCVBNM]/;
  for (let i = start; i <= end; i++) {
    if (BASE_CONSONANTS.test(getChar(i))) {
      return false; // There is a base consonant in this word -> matra is on a letter
    }
  }

  return true; // Standalone individual vowel without any consonant
}

export const HindiTypingLesson: React.FC<HindiTypingLessonProps> = ({
  onBackToHome,
  initialLanguage = 'hindi',
}) => {
  // Language mode: Hindi (KrutiDev/DevLys) or English
  const [language, setLanguage] = useState<'hindi' | 'english'>(initialLanguage);

  // Current Selected Exercise (1 to 60)
  const [selectedLessonId, setSelectedLessonId] = useState<number>(1);

  // Active lessons pool based on language
  const lessonsList: Array<HindiLesson | EnglishLesson> =
    language === 'hindi' ? HINDI_LEARN_KEYS_LESSONS : ENGLISH_LESSONS;

  const currentLesson =
    lessonsList.find((l) => l.id === selectedLessonId) || lessonsList[0];

  // Target ASCII sequence from active lesson
  const targetContent = currentLesson.content;
  const targetChars = useMemo(() => targetContent.split(''), [targetContent]);

  const [typedChars, setTypedChars] = useState<
    Array<{ char: string; isCorrect: boolean }>
  >([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Switch Lesson
  const handleSelectLesson = (id: number) => {
    setSelectedLessonId(id);
    setTypedChars([]);
    setCurrentIndex(0);
    setErrorCount(0);
    setBackspaceCount(0);
    setStartTime(null);
    setElapsedSeconds(0);
    setIsFinished(false);
    setResultData(null);
    targetContainerRef.current?.scrollTo({ top: 0, behavior: 'instant' });
    userContainerRef.current?.scrollTo({ top: 0, behavior: 'instant' });
    setTimeout(() => {
      inputRef.current?.focus();
    }, 40);
  };

  // Font settings
  const [selectedFont, setSelectedFont] = useState<'KrutiDev' | 'DevLys'>('KrutiDev');
  const [isBold, setIsBold] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(26);

  // Settings
  const [backspaceOption, setBackspaceOption] = useState<
    'full' | 'oneWord' | 'deactivate'
  >('oneWord');
  const [showKeyboard, setShowKeyboard] = useState<boolean>(true);
  const [playSounds, setPlaySounds] = useState<boolean>(false);
  const [moveOnError, setMoveOnError] = useState<boolean>(true);
  const [showAltModal, setShowAltModal] = useState<boolean>(false);

  // Active step (1: Instructions, 2: Learn Keys, 3: Practice Words, 4: Paragraphs)
  const [activeStep, setActiveStep] = useState<number>(2);

  // Stats
  const [errorCount, setErrorCount] = useState<number>(0);
  const [backspaceCount, setBackspaceCount] = useState<number>(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [resultData, setResultData] = useState<TypingResultData | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const activeSpanRef = useRef<HTMLSpanElement | null>(null);
  const targetContainerRef = useRef<HTMLDivElement>(null);
  const userContainerRef = useRef<HTMLDivElement>(null);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (startTime && !isFinished && currentIndex < targetChars.length) {
      interval = setInterval(() => {
        setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [startTime, isFinished, currentIndex, targetChars.length]);

  // Expected character & key
  const expectedChar = targetChars[currentIndex] || '';
  const expectedKey = expectedChar;

  // Active finger and hand mapping
  const fingerInfo = getFingerForKey(expectedKey || 'g');

  // Focus hidden input on change
  useEffect(() => {
    if (activeStep !== 1) {
      inputRef.current?.focus();
    }
  }, [activeStep, selectedLessonId, language]);

  // Auto-scroll target text box: ONLY scroll when active letter reaches the bottom line of the target box
  useEffect(() => {
    if (activeSpanRef.current && targetContainerRef.current) {
      const container = targetContainerRef.current;
      const element = activeSpanRef.current;
      const elementTop = element.offsetTop;
      const elementBottom = elementTop + element.offsetHeight;
      const containerScrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const visibleBottom = containerScrollTop + containerHeight;

      // Bottom threshold: strictly only scroll once the cursor's bottom edge reaches or passes below the visible bottom of the box
      if (elementBottom > visibleBottom - 2) {
        container.scrollTo({
          top: elementBottom - containerHeight + 6,
          behavior: 'smooth',
        });
      } else if (elementTop < containerScrollTop) {
        // Backspaced above the current visible top
        container.scrollTo({
          top: Math.max(0, elementTop - 4),
          behavior: 'smooth',
        });
      }
    }
  }, [currentIndex]);

  // Auto-scroll bottom user box independently: only scroll down when lines fill up
  useEffect(() => {
    if (userContainerRef.current) {
      const userBox = userContainerRef.current;
      if (userBox.scrollHeight - userBox.scrollTop > userBox.clientHeight) {
        userBox.scrollTo({
          top: userBox.scrollHeight - userBox.clientHeight,
          behavior: 'smooth',
        });
      }
    }
  }, [typedChars.length]);

  const handleContainerClick = () => {
    if (activeStep !== 1) {
      inputRef.current?.focus();
    }
  };

  // Calculate speed metrics using BOTH methods
  const timeMinutes = Math.max(1 / 60, elapsedSeconds / 60);
  const totalTyped = typedChars.length;
  const correctCount = typedChars.filter((t) => t.isCorrect).length;
  const accuracy = totalTyped > 0 ? Math.round((correctCount / totalTyped) * 100) : 100;

  // Method 1: Word-by-Word (Space-Delimited)
  const targetWords = useMemo(
    () => targetContent.trim().split(/\s+/).filter(Boolean),
    [targetContent]
  );
  const typedString = typedChars.map((t) => t.char).join('');
  const typedWords = useMemo(
    () => typedString.trim().split(/\s+/).filter(Boolean),
    [typedString]
  );

  let correctSpaceWords = 0;
  for (let i = 0; i < typedWords.length; i++) {
    if (typedWords[i] === targetWords[i]) {
      correctSpaceWords++;
    }
  }

  const grossWPMWords = Math.round(typedWords.length / timeMinutes);
  const netWPMWords = Math.round(correctSpaceWords / timeMinutes);

  // Method 2: Standard 5.5 Characters per Word
  const grossWPM55 = Math.round((totalTyped / 5.5) / timeMinutes);
  const netWPM55 = Math.max(0, Math.round((correctCount / 5.5) / timeMinutes));

  const progressPercent = Math.min(
    100,
    Math.round((currentIndex / Math.max(1, targetChars.length)) * 100)
  );

  // Finish trigger
  const handleFinishLesson = (
    finalTyped: Array<{ char: string; isCorrect: boolean }>,
    finalErrors: number,
    finalBackspaces: number
  ) => {
    setIsFinished(true);
    const finalTotal = finalTyped.length;
    const finalCorrect = finalTyped.filter((t) => t.isCorrect).length;
    const finalAccuracy =
      finalTotal > 0 ? Math.round((finalCorrect / finalTotal) * 100) : 100;
    const finalMinutes = Math.max(1 / 60, elapsedSeconds / 60);

    const fTypedStr = finalTyped.map((t) => t.char).join('');
    const fTypedWords = fTypedStr.trim().split(/\s+/).filter(Boolean);
    let fCorrectWords = 0;
    for (let i = 0; i < fTypedWords.length; i++) {
      if (fTypedWords[i] === targetWords[i]) {
        fCorrectWords++;
      }
    }

    const gWPMWords = Math.round(fTypedWords.length / finalMinutes);
    const nWPMWords = Math.round(fCorrectWords / finalMinutes);
    const gWPM55 = Math.round((finalTotal / 5.5) / finalMinutes);
    const nWPM55 = Math.max(0, Math.round((finalCorrect / 5.5) / finalMinutes));

    setResultData({
      lessonTitle: currentLesson.title,
      lessonId: selectedLessonId,
      language,
      totalChars: finalTotal,
      correctChars: finalCorrect,
      errorCount: finalErrors,
      elapsedSeconds,
      accuracy: finalAccuracy,
      spaceWordsTotal: fTypedWords.length,
      spaceWordsCorrect: fCorrectWords,
      grossWPMWords: gWPMWords,
      netWPMWords: nWPMWords,
      grossWPM55: gWPM55,
      netWPM55: nWPM55,
      backspaceCount: finalBackspaces,
    });
  };

  // Handle key press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (showAltModal || isFinished) return;

    if (e.key === 'Backspace') {
      e.preventDefault();
      setBackspaceCount((prev) => prev + 1);
      if (backspaceOption === 'deactivate') {
        if (playSounds) playKeySound(true);
        return;
      }

      if (backspaceOption === 'full' || backspaceOption === 'oneWord') {
        if (currentIndex > 0) {
          const newTyped = [...typedChars];
          newTyped.pop();
          setTypedChars(newTyped);
          setCurrentIndex((prev) => Math.max(0, prev - 1));
          if (playSounds) playKeySound(false);
        }
      }
      return;
    }

    if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
      e.preventDefault();

      if (!startTime) {
        setStartTime(Date.now());
      }

      const pressedKey = e.key;
      const expectedCharTarget = targetChars[currentIndex];
      const isCorrect = pressedKey === expectedCharTarget;

      if (playSounds) {
        playKeySound(!isCorrect);
      }

      let nextErrors = errorCount;
      if (!isCorrect) {
        nextErrors = errorCount + 1;
        setErrorCount(nextErrors);
      }

      if (isCorrect || moveOnError) {
        const newTyped = [...typedChars, { char: pressedKey, isCorrect }];
        setTypedChars(newTyped);
        const nextIdx = currentIndex + 1;
        setCurrentIndex(nextIdx);

        // Check if finished
        if (nextIdx >= targetChars.length) {
          handleFinishLesson(newTyped, nextErrors, backspaceCount);
        }
      }
    }
  };

  // Reset exercise
  const handleRestart = () => {
    setTypedChars([]);
    setCurrentIndex(0);
    setErrorCount(0);
    setBackspaceCount(0);
    setStartTime(null);
    setElapsedSeconds(0);
    setIsFinished(false);
    setResultData(null);
    targetContainerRef.current?.scrollTo({ top: 0, behavior: 'instant' });
    userContainerRef.current?.scrollTo({ top: 0, behavior: 'instant' });
    inputRef.current?.focus();
  };

  const handleNextLesson = () => {
    if (selectedLessonId < lessonsList.length) {
      handleSelectLesson(selectedLessonId + 1);
    }
  };

  return (
    <div
      id="typing-tutor-screen"
      onClick={handleContainerClick}
      className="min-h-screen bg-[#c8cbd2] flex flex-col font-sans select-none text-slate-800"
    >
      {/* Title Bar */}
      <TitleBar
        title={`Soni Typing Tutor 5.1.168 - ${
          language === 'hindi' ? 'Hindi Typing (KrutiDev)' : 'English Typing'
        }`}
      />

      {/* Steps Header Nav Bar */}
      <div
        id="typing-steps-nav"
        className="bg-[#f0f0f0] border-b border-slate-300 px-3 py-1 flex items-center justify-between text-xs"
      >
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <button
            onClick={() => setActiveStep(1)}
            className={`px-2.5 py-0.5 rounded text-xs font-medium cursor-pointer transition-colors flex items-center gap-1 ${
              activeStep === 1
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-300'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>1. Instructions</span>
          </button>

          <span className="text-slate-400 font-mono text-[10px] px-0.5">--&gt;</span>

          <button
            onClick={() => setActiveStep(2)}
            className={`px-2.5 py-0.5 rounded text-xs font-semibold cursor-pointer shadow-xs transition-colors flex items-center gap-1 ${
              activeStep === 2
                ? 'bg-[#6366f1] text-white shadow-indigo-200'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-300'
            }`}
          >
            <KeyboardIcon className="w-3.5 h-3.5" />
            <span>2. Learn Keys (60 Lessons)</span>
          </button>

          <span className="text-slate-400 font-mono text-[10px] px-0.5">--&gt;</span>

          <button
            onClick={() => setActiveStep(3)}
            className={`px-2.5 py-0.5 rounded text-xs font-medium cursor-pointer transition-colors flex items-center gap-1 ${
              activeStep === 3
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-300'
            }`}
          >
            <Type className="w-3.5 h-3.5" />
            <span>3. Practice Words</span>
          </button>

          <span className="text-slate-400 font-mono text-[10px] px-0.5">--&gt;</span>

          <button
            onClick={() => setActiveStep(4)}
            className={`px-2.5 py-0.5 rounded text-xs font-medium cursor-pointer transition-colors flex items-center gap-1 ${
              activeStep === 4
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-300'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>4. Type Paragraphs</span>
          </button>
        </div>

        <button
          onClick={onBackToHome}
          className="flex items-center gap-1 px-2.5 py-0.5 bg-white hover:bg-slate-100 border border-slate-300 rounded text-xs font-medium text-slate-700 cursor-pointer shadow-2xs transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home Menu</span>
        </button>
      </div>

      {/* STEP 1: READ INSTRUCTIONS SCREEN */}
      {activeStep === 1 && (
        <div className="flex-1 p-3 overflow-y-auto max-w-5xl w-full mx-auto">
          <div className="bg-white border border-slate-300 rounded-md p-5 shadow-sm">
            <h2 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2 border-b pb-2">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              {language === 'hindi'
                ? 'Hindi Typing (KrutiDev 010 / DevLys 010) Guidelines'
                : 'English Typing Tutor Guidelines & Rules'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-700 mt-3">
              <div className="bg-slate-50 border border-slate-200 rounded p-3">
                <h3 className="font-bold text-slate-900 mb-1.5 text-sm text-indigo-900">
                  1. Home Row Placement (आधार पंक्ति)
                </h3>
                <ul className="list-disc list-inside space-y-1 leading-relaxed">
                  <li><strong>Left Hand:</strong> A, S, D, F (Hindi: ं, े, क, ि, ह)</li>
                  <li><strong>Right Hand:</strong> J, K, L, ; (Hindi: र, ा, स, य, श)</li>
                  <li>Both thumbs rest on the <strong>Space Bar</strong>.</li>
                  <li>Always return fingers to the Home Row after hitting other rows.</li>
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded p-3">
                <h3 className="font-bold text-slate-900 mb-1.5 text-sm text-indigo-900">
                  2. Speed Measurement Formulas (2 Methods)
                </h3>
                <ul className="list-disc list-inside space-y-1 leading-relaxed">
                  <li><strong>Method 1 (Space-Delimited Words):</strong> Every space-separated word typed is counted. Net Speed counts only 100% correct words.</li>
                  <li><strong>Method 2 (5.5 Characters / Word):</strong> Standard formula: (Correct Keystrokes / 5.5) / Time in Minutes.</li>
                </ul>
              </div>

              {language === 'hindi' && (
                <div className="bg-slate-50 border border-slate-200 rounded p-3">
                  <h3 className="font-bold text-slate-900 mb-1.5 text-sm text-indigo-900">
                    3. Key Alt-Codes Reference (ऑल्ट कोड्स)
                  </h3>
                  <div className="grid grid-cols-2 gap-1 font-mono text-[11px]">
                    {KRUTI_ALT_CODES.slice(0, 6).map((ac, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-1 rounded border border-slate-200 flex justify-between items-center"
                      >
                        <span className="font-bold text-indigo-700">{ac.code}</span>
                        <span className="font-bold text-slate-900 font-kruti text-sm">
                          {ac.char}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-slate-50 border border-slate-200 rounded p-3">
                <h3 className="font-bold text-slate-900 mb-1.5 text-sm text-indigo-900">
                  {language === 'hindi' ? '4. Matras & Ordering' : '3. Posture & Technique'}
                </h3>
                <ul className="list-disc list-inside space-y-1 leading-relaxed">
                  {language === 'hindi' ? (
                    <>
                      <li><strong>Chhoti Ee (ि):</strong> Press <code className="bg-slate-200 px-1 rounded font-mono">f</code> before consonant (e.g. <code className="bg-slate-200 px-1 rounded font-mono">fd</code> = कि).</li>
                      <li><strong>Badi Ee (ी):</strong> Press consonant then <code className="bg-slate-200 px-1 rounded font-mono">h</code> (e.g. <code className="bg-slate-200 px-1 rounded font-mono">dh</code> = की).</li>
                      <li><strong>Aa Matra (ा):</strong> Press consonant then <code className="bg-slate-200 px-1 rounded font-mono">k</code> (e.g. <code className="bg-slate-200 px-1 rounded font-mono">dk</code> = का).</li>
                    </>
                  ) : (
                    <>
                      <li>Keep your wrists hovering above the keyboard without resting heavily on the desk.</li>
                      <li>Look at the text on the screen, avoiding looking down at your fingers.</li>
                      <li>Type in a continuous rhythmic flow for maximum accuracy.</li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <button
                onClick={() => setActiveStep(2)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-1.5 rounded text-xs shadow-md cursor-pointer transition-colors"
              >
                Start Typing Exercises (Exercise 1 to 60) &rarr;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 3 & STEP 4: EMPTY SECTIONS (READY FOR USER PROVIDED LESSONS) */}
      {(activeStep === 3 || activeStep === 4) && (
        <div className="flex-1 p-6 overflow-y-auto max-w-2xl w-full mx-auto flex flex-col items-center justify-center">
          <div className="bg-white border border-slate-300 rounded-lg p-8 shadow-sm text-center w-full">
            <div className="w-14 h-14 bg-indigo-50 border border-indigo-200 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
              {activeStep === 3 ? (
                <Type className="w-7 h-7" />
              ) : (
                <FileText className="w-7 h-7" />
              )}
            </div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              {activeStep === 3 ? '3. Practice Words' : '4. Type Paragraphs'}
            </h2>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              This section is currently empty. Custom exercises for{' '}
              <strong>
                {activeStep === 3 ? 'Practice Words' : 'Type Paragraphs'}
              </strong>{' '}
              will be added here once provided.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => setActiveStep(2)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded text-xs shadow-md cursor-pointer transition-colors flex items-center justify-center gap-1.5"
              >
                <KeyboardIcon className="w-4 h-4" />
                <span>Go to Learn Keys (60 Lessons)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: MAIN INTERACTIVE TYPING WORKSPACE (60 LESSONS) */}
      {activeStep === 2 && (
        <div className="flex-1 p-2 flex gap-2 overflow-hidden max-w-[1700px] w-full mx-auto">
          {/* Left Side: Select Font & Left Hand */}
          <div className="w-48 shrink-0 flex flex-col justify-between items-center py-1">
            {/* Select Font Box (only for Hindi) */}
            {language === 'hindi' ? (
              <div className="w-full bg-slate-100 border border-slate-300 rounded p-2 shadow-2xs">
                <h3 className="text-xs font-bold text-slate-800 mb-1">Select Font</h3>
                <div className="flex flex-col gap-1 text-xs text-slate-700">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="fontType"
                      checked={selectedFont === 'KrutiDev'}
                      onChange={() => setSelectedFont('KrutiDev')}
                      className="accent-blue-600"
                    />
                    <span className="font-medium text-xs">KrutiDev</span>
                  </label>

                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="fontType"
                      checked={selectedFont === 'DevLys'}
                      onChange={() => setSelectedFont('DevLys')}
                      className="accent-blue-600"
                    />
                    <span className="font-medium text-xs">DevLys</span>
                  </label>

                  <label className="flex items-center gap-1.5 cursor-pointer pt-1 border-t border-slate-200">
                    <input
                      type="checkbox"
                      checked={isBold}
                      onChange={(e) => setIsBold(e.target.checked)}
                      className="accent-blue-600"
                    />
                    <span className="font-semibold text-xs">Bold</span>
                  </label>
                </div>
              </div>
            ) : (
              <div className="w-full bg-slate-100 border border-slate-300 rounded p-2 shadow-2xs">
                <h3 className="text-xs font-bold text-slate-800 mb-1">Font Style</h3>
                <label className="flex items-center gap-1.5 cursor-pointer text-xs text-slate-700">
                  <input
                    type="checkbox"
                    checked={isBold}
                    onChange={(e) => setIsBold(e.target.checked)}
                    className="accent-blue-600"
                  />
                  <span className="font-semibold">Bold Font</span>
                </label>
              </div>
            )}

            {/* Exercise Focus Keys */}
            <div className="w-full bg-slate-100 border border-slate-300 rounded p-2 shadow-2xs mt-1 text-[11px] text-slate-700">
              <div className="font-bold text-indigo-900 mb-0.5">
                Exercise {selectedLessonId}
              </div>
              <div className="bg-white p-1 rounded border border-slate-200 font-mono text-[10.5px] text-slate-800">
                Keys: <strong className="text-indigo-600">{currentLesson.focusKeys}</strong>
              </div>
            </div>

            {/* Left Hand Indicator */}
            <div className="my-auto py-1 flex flex-col items-center">
              <LeftHand
                activeFingerIndex={
                  fingerInfo.hand === 'left' || fingerInfo.hand === 'both'
                    ? fingerInfo.fingerIndex
                    : null
                }
                isActive={fingerInfo.hand === 'left' || fingerInfo.hand === 'both'}
              />
            </div>
          </div>

          {/* Center: Target Box, Controller Bar, User Typing Box, and Keyboard */}
          <div className="flex-1 flex flex-col gap-1.5 min-w-0">
            {/* Hidden text input capturing real keystrokes */}
            <input
              ref={inputRef}
              type="text"
              className="opacity-0 absolute pointer-events-none -left-9999px"
              onKeyDown={handleKeyDown}
              autoFocus
            />

            {/* Purple Container for Target & Input */}
            <div className="bg-[#9da4eb] p-2 rounded shadow-md border border-indigo-400 flex flex-col gap-1.5">
              {/* 1. Target Text Box (White) - Expanded height for more lines, tight line spacing */}
              <div
                ref={targetContainerRef}
                className={`bg-white rounded p-2.5 h-[145px] md:h-[155px] overflow-y-auto border border-slate-300 shadow-inner select-none leading-snug whitespace-pre-wrap break-words ${
                  isBold ? 'font-bold' : 'font-normal'
                }`}
                style={{
                  fontFamily: language === 'hindi' ? selectedFont : 'monospace, sans-serif',
                  fontSize: `${fontSize}px`,
                }}
              >
                {targetChars.map((char, idx) => {
                  const isCurrent = idx === currentIndex;
                  const isPassed = idx < currentIndex;
                  const isWrong = isPassed && typedChars[idx] && !typedChars[idx].isCorrect;
                  const isStandalone = language === 'hindi' && isIndividualVowel(targetChars, idx);

                  return (
                    <span
                      key={idx}
                      ref={isCurrent ? activeSpanRef : null}
                      className={`${
                        isStandalone
                          ? 'inline-block min-w-[0.65em] px-0.5 text-center'
                          : 'inline'
                      } ${
                        isCurrent
                          ? 'bg-black text-white px-0.5 rounded-[1px] shadow-xs ring-1 ring-amber-300'
                          : isWrong
                          ? 'text-red-600 bg-red-100 font-bold'
                          : isPassed
                          ? 'text-slate-400'
                          : 'text-slate-900'
                      }`}
                    >
                      {char}
                    </span>
                  );
                })}
              </div>

              {/* 2. Center Controller Strip */}
              <div className="flex flex-wrap items-center justify-between px-1 text-white text-xs font-semibold select-none gap-1.5">
                {/* Press Indicator */}
                <div className="flex items-center gap-1 text-xs bg-indigo-900/30 px-2.5 py-0.5 rounded">
                  <span>Press :</span>
                  <span className="font-mono text-amber-300 font-bold text-sm uppercase">
                    {expectedKey === ' ' ? 'Space' : expectedKey}
                  </span>
                  {language === 'hindi' && expectedKey !== ' ' && (
                    <span
                      className="text-white/90 text-sm ml-1"
                      style={{ fontFamily: selectedFont }}
                    >
                      ({cleanHindiChar(KEY_TO_HINDI[expectedKey]) || expectedKey})
                    </span>
                  )}
                </div>

                {/* Exercise Selection (ONLY EXERCISE NUMBER) & Prev/Next */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleSelectLesson(Math.max(1, selectedLessonId - 1))}
                    disabled={selectedLessonId <= 1}
                    title="Previous Exercise"
                    className="bg-white hover:bg-slate-100 disabled:opacity-50 text-slate-800 px-1.5 py-0.5 rounded border border-slate-300 text-xs font-bold shadow-2xs cursor-pointer flex items-center"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>

                  {/* ONLY EXERCISE NUMBER IN DROPDOWN */}
                  <select
                    className="bg-white text-slate-800 px-2 py-0.5 rounded border border-slate-300 text-xs font-bold shadow-2xs cursor-pointer"
                    value={selectedLessonId}
                    onChange={(e) => handleSelectLesson(Number(e.target.value))}
                  >
                    {lessonsList.map((lesson) => (
                      <option key={lesson.id} value={lesson.id}>
                        Exercise {lesson.id}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={() =>
                      handleSelectLesson(
                        Math.min(lessonsList.length, selectedLessonId + 1)
                      )
                    }
                    disabled={selectedLessonId >= lessonsList.length}
                    title="Next Exercise"
                    className="bg-white hover:bg-slate-100 disabled:opacity-50 text-slate-800 px-1.5 py-0.5 rounded border border-slate-300 text-xs font-bold shadow-2xs cursor-pointer flex items-center"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={handleRestart}
                    title="Restart Exercise"
                    className="bg-white hover:bg-slate-100 text-slate-800 px-2 py-0.5 rounded border border-slate-300 text-xs font-bold shadow-2xs cursor-pointer flex items-center gap-1 ml-0.5"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                </div>

                {/* Font Size Adjuster */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setFontSize((prev) => Math.max(16, prev - 2))}
                    className="bg-indigo-700 hover:bg-indigo-800 px-1.5 py-0.5 rounded text-white text-xs cursor-pointer font-bold"
                  >
                    A-
                  </button>
                  <span className="px-1.5 py-0.5 bg-white text-slate-800 rounded text-xs font-bold min-w-[24px] text-center">
                    {fontSize}
                  </span>
                  <button
                    onClick={() => setFontSize((prev) => Math.min(42, prev + 2))}
                    className="bg-indigo-700 hover:bg-indigo-800 px-1.5 py-0.5 rounded text-white text-xs cursor-pointer font-bold"
                  >
                    A+
                  </button>
                </div>
              </div>

              {/* 3. User Typing Output Box (White) - Expanded height for more lines, tight line spacing */}
              <div
                ref={userContainerRef}
                className={`bg-white rounded p-2.5 h-[145px] md:h-[155px] overflow-y-auto border border-slate-300 shadow-inner select-none leading-snug whitespace-pre-wrap break-words ${
                  isBold ? 'font-bold' : 'font-normal'
                }`}
                style={{
                  fontFamily: language === 'hindi' ? selectedFont : 'monospace, sans-serif',
                  fontSize: `${fontSize}px`,
                }}
              >
                {typedChars.map((item, idx) => {
                  const isStandalone = language === 'hindi' && isIndividualVowel(typedChars, idx);
                  return (
                    <span
                      key={idx}
                      className={`${
                        isStandalone
                          ? 'inline-block min-w-[0.65em] px-0.5 text-center'
                          : 'inline'
                      } ${
                        item.isCorrect
                          ? 'text-slate-800'
                          : 'text-red-600 font-bold bg-red-100 underline decoration-red-600 px-0.5 rounded-[1px]'
                      }`}
                    >
                      {item.char}
                    </span>
                  );
                })}

                {/* Blinking cursor */}
                <span className="inline-block w-0.5 h-5 bg-slate-900 animate-pulse align-middle ml-0.5" />
              </div>

              {/* 4. On-Screen Virtual Keyboard - 100% Fully Visible */}
              {showKeyboard && (
                <div className="pt-0.5">
                  <KrutiKeyboard
                    activeKey={expectedKey}
                    isBold={isBold}
                    selectedFont={selectedFont}
                    layoutMode={language}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Settings & Real-Time Stats (2 Speed Methods) */}
          <div className="w-52 shrink-0 flex flex-col justify-between items-center py-1">
            {/* Settings Box */}
            <div className="w-full bg-slate-100 border border-slate-300 rounded p-2 shadow-2xs text-xs">
              <h3 className="font-bold text-slate-800 mb-1">Settings</h3>

              {/* Backspace Options */}
              <fieldset className="border border-slate-300 rounded p-1.5 mb-1.5 bg-white/70">
                <legend className="text-[10px] font-semibold text-slate-700 px-1">
                  Backspace Options
                </legend>
                <div className="flex flex-col gap-0.5 text-[11px] text-slate-700">
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="backspace"
                      checked={backspaceOption === 'full'}
                      onChange={() => setBackspaceOption('full')}
                      className="accent-blue-600"
                    />
                    <span>Full Backspace</span>
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="backspace"
                      checked={backspaceOption === 'oneWord'}
                      onChange={() => setBackspaceOption('oneWord')}
                      className="accent-blue-600"
                    />
                    <span>One Word</span>
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="backspace"
                      checked={backspaceOption === 'deactivate'}
                      onChange={() => setBackspaceOption('deactivate')}
                      className="accent-blue-600"
                    />
                    <span>Deactivate</span>
                  </label>
                </div>
              </fieldset>

              {/* Checkboxes */}
              <div className="flex flex-col gap-1 text-[11px] text-slate-700 mb-1.5">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showKeyboard}
                    onChange={(e) => setShowKeyboard(e.target.checked)}
                    className="accent-blue-600"
                  />
                  <span>Show Keyboard</span>
                </label>

                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={playSounds}
                    onChange={(e) => setPlaySounds(e.target.checked)}
                    className="accent-blue-600"
                  />
                  <span className="flex items-center gap-1">
                    {playSounds ? (
                      <Volume2 className="w-3 h-3 text-indigo-600" />
                    ) : (
                      <VolumeX className="w-3 h-3 text-slate-400" />
                    )}
                    <span>Key Sounds</span>
                  </span>
                </label>

                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={moveOnError}
                    onChange={(e) => setMoveOnError(e.target.checked)}
                    className="accent-blue-600"
                  />
                  <span>Move on Error</span>
                </label>
              </div>

              {/* Alt Codes Button (Hindi only) */}
              {language === 'hindi' && (
                <button
                  onClick={() => setShowAltModal(true)}
                  className="w-full bg-slate-200 hover:bg-slate-300 text-slate-800 py-0.5 px-1.5 rounded text-[10.5px] font-medium border border-slate-300 cursor-pointer shadow-2xs mb-1.5 transition-colors"
                >
                  Show Alt Codes
                </button>
              )}

              {/* 2 SPEED METHODS LIVE STATUS */}
              <div className="pt-1.5 border-t border-slate-200 text-[10.5px] text-slate-700 flex flex-col gap-1">
                {/* Method 1: Word-by-word */}
                <div className="bg-amber-50/90 border border-amber-200/80 rounded p-1">
                  <div className="text-[9.5px] font-bold text-amber-900 flex items-center gap-0.5">
                    <Target className="w-3 h-3 text-amber-600" />
                    Word Method (Net):
                  </div>
                  <div className="flex justify-between font-semibold text-amber-950 mt-0.5">
                    <span>{netWPMWords} WPM</span>
                    <span className="text-[9px] text-amber-700 font-normal">
                      Gross: {grossWPMWords}
                    </span>
                  </div>
                </div>

                {/* Method 2: 5.5 Chars */}
                <div className="bg-indigo-50/90 border border-indigo-200/80 rounded p-1">
                  <div className="text-[9.5px] font-bold text-indigo-900 flex items-center gap-0.5">
                    <Zap className="w-3 h-3 text-indigo-600" />
                    5.5 Chars Method:
                  </div>
                  <div className="flex justify-between font-semibold text-indigo-950 mt-0.5">
                    <span>{netWPM55} WPM</span>
                    <span className="text-[9px] text-indigo-700 font-normal">
                      Gross: {grossWPM55}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between pt-0.5">
                  <span>
                    Acc: <strong className="text-emerald-700">{accuracy}%</strong>
                  </span>
                  <span>
                    Errors: <strong className="text-red-600">{errorCount}</strong>
                  </span>
                  <span>
                    Time: <strong>{elapsedSeconds}s</strong>
                  </span>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-1 mt-0.5 overflow-hidden">
                  <div
                    className="bg-indigo-600 h-full transition-all duration-200"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Right Hand Indicator */}
            <div className="my-auto py-1 flex flex-col items-center">
              <RightHand
                activeFingerIndex={
                  fingerInfo.hand === 'right' || fingerInfo.hand === 'both'
                    ? fingerInfo.fingerIndex
                    : null
                }
                isActive={fingerInfo.hand === 'right' || fingerInfo.hand === 'both'}
              />
            </div>
          </div>
        </div>
      )}

      {/* Alt Codes Modal */}
      <AltCodesModal
        isOpen={showAltModal}
        onClose={() => setShowAltModal(false)}
      />

      {/* Result Completion Modal (Shows speeds with both methods) */}
      <ResultModal
        isOpen={isFinished}
        data={resultData}
        onRetry={handleRestart}
        onNextLesson={handleNextLesson}
        onClose={() => setIsFinished(false)}
        hasNextLesson={selectedLessonId < lessonsList.length}
      />
    </div>
  );
};
