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
import {
  HINDI_LEARN_KEYS_LESSONS,
  HINDI_PRACTICE_WORDS_LESSONS,
  HINDI_TYPE_PARAGRAPH_LESSONS,
  HindiLesson,
} from '../data/hindiLessons';
import { ENGLISH_LESSONS, EnglishLesson } from '../data/englishLessons';
import {
  AppTheme,
  FontDarkness,
  applyThemeToDOM,
  getFontDarknessStyle,
  getStoredFontDarkness,
  getStoredTheme,
} from '../lib/displaySettings';
import {
  TypingLayout,
  FontChoice,
  LAYOUT_INFO,
  buildModuleId,
  getStoredTypingSettings,
  saveTypingSettings,
  getStoredModuleProgress,
  saveCurrentLesson,
  recordLessonProgress,
  resetModuleProgress,
} from '../lib/persistence';
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
  Zap,
  Target,
  Sun,
  Moon,
  Award,
  CheckCircle2,
  SlidersHorizontal,
} from 'lucide-react';

interface HindiTypingLessonProps {
  onBackToHome: () => void;
  onOpenEnglishTestScreen?: () => void;
  initialLanguage?: 'hindi' | 'english';
  initialLayout?: TypingLayout;
  theme?: AppTheme;
  onToggleTheme?: () => void;
  fontDarkness?: FontDarkness;
  onChangeFontDarkness?: (darkness: FontDarkness) => void;
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
 * Checks if a vowel/matra character is standalone (individual pure matra drill without any base consonant in the word),
 * so it needs extra width/spacing to avoid overlapping on itself during standalone matra drills.
 * If the vowel is on ANY consonant/word (e.g. 'ds' = के, 'Qq' = फु, '[kq' = खु, 'dkW' = कॉ),
 * this returns false to preserve normal font ligatures and keep the vowel attached to the base letter.
 */
function isIndividualVowel(chars: Array<string | { char: string }>, idx: number): boolean {
  const getChar = (i: number) => {
    if (i < 0 || i >= chars.length) return '';
    const item = chars[i];
    return typeof item === 'string' ? item : item.char;
  };

  const currentChar = getChar(idx);
  // Pure combining matra characters in KrutiDev layout
  const MATRA_CHARS = new Set(['s', 'S', 'q', 'w', 'a', 'W', 'z', 'f', 'h', 'k']);
  if (!MATRA_CHARS.has(currentChar)) {
    return false;
  }

  // Find boundaries of the current whitespace-delimited word token
  let start = idx;
  while (start > 0 && getChar(start - 1) !== ' ' && getChar(start - 1) !== '\n') {
    start--;
  }
  let end = idx;
  while (end < chars.length - 1 && getChar(end + 1) !== ' ' && getChar(end + 1) !== '\n') {
    end++;
  }

  // If ANY character in this word token is a consonant or non-matra letter (e.g. Q, [, d, g, l, etc.),
  // then the matra belongs to a base consonant and MUST NOT be isolated.
  for (let i = start; i <= end; i++) {
    const c = getChar(i);
    if (!MATRA_CHARS.has(c)) {
      return false; // Found a consonant or other character -> matra is attached to base consonant
    }
  }

  return true; // Standalone pure matra drill where the whole word is only matras (e.g. "ssss" or "qqqq")
}

export const HindiTypingLesson: React.FC<HindiTypingLessonProps> = ({
  onBackToHome,
  onOpenEnglishTestScreen,
  initialLanguage,
  initialLayout,
  theme: propTheme,
  onToggleTheme: propOnToggleTheme,
  fontDarkness: propFontDarkness,
  onChangeFontDarkness: propOnChangeFontDarkness,
}) => {
  // Theme state
  const [internalTheme, setInternalTheme] = useState<AppTheme>(getStoredTheme);
  const currentTheme = propTheme ?? internalTheme;

  useEffect(() => {
    applyThemeToDOM(currentTheme);
  }, [currentTheme]);

  const handleToggleTheme = () => {
    if (propOnToggleTheme) {
      propOnToggleTheme();
    } else {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setInternalTheme(nextTheme);
      localStorage.setItem('godara_typing_theme', nextTheme);
      applyThemeToDOM(nextTheme);
    }
  };

  // Font Darkness state
  const [internalDarkness, setInternalDarkness] = useState<FontDarkness>(getStoredFontDarkness);
  const currentFontDarkness = propFontDarkness ?? internalDarkness;

  const handleChangeFontDarkness = (darkness: FontDarkness) => {
    if (propOnChangeFontDarkness) {
      propOnChangeFontDarkness(darkness);
    } else {
      setInternalDarkness(darkness);
      localStorage.setItem('godara_typing_font_darkness', darkness);
    }
  };

  const darknessStyle = useMemo(
    () => getFontDarknessStyle(currentFontDarkness),
    [currentFontDarkness]
  );

  // Initial persisted settings
  const initialStored = useMemo(() => getStoredTypingSettings(), []);

  // Selected layout (KrutiDev, Remington GAIL, INSCRIPT, Remington CBI, English QWERTY)
  const [selectedLayout, setSelectedLayout] = useState<TypingLayout>(() => {
    if (initialLayout) return initialLayout;
    if (initialStored.selectedLayout) return initialStored.selectedLayout;
    return initialLanguage === 'english' ? 'english' : 'krutidev';
  });

  // Language mode: Hindi (KrutiDev/DevLys) or English
  const [language, setLanguage] = useState<'hindi' | 'english'>(() => {
    if (initialLanguage) return initialLanguage;
    return selectedLayout === 'english' ? 'english' : 'hindi';
  });

  // Active step (1: Instructions, 2: Learn Keys, 3: Practice Words, 4: Paragraphs)
  const [activeStep, setActiveStep] = useState<number>(() => initialStored.activeStep ?? 2);

  // Module identifier for persistence
  const moduleId = useMemo(
    () => buildModuleId(selectedLayout, activeStep),
    [selectedLayout, activeStep]
  );

  // Active lessons pool based on language and step
  const lessonsList: Array<HindiLesson | EnglishLesson> = useMemo(() => {
    if (language === 'english') {
      return ENGLISH_LESSONS;
    }
    if (activeStep === 3) {
      return HINDI_PRACTICE_WORDS_LESSONS;
    }
    if (activeStep === 4) {
      return HINDI_TYPE_PARAGRAPH_LESSONS;
    }
    return HINDI_LEARN_KEYS_LESSONS;
  }, [language, activeStep]);

  // Module progress record loaded from localStorage
  const [moduleProgress, setModuleProgress] = useState(() =>
    getStoredModuleProgress(moduleId, 60)
  );

  // Keep moduleProgress in sync when moduleId or lesson count changes
  useEffect(() => {
    const loaded = getStoredModuleProgress(moduleId, lessonsList.length || 60);
    setModuleProgress(loaded);
  }, [moduleId, lessonsList.length]);

  // Current Selected Exercise (1 to 60) - restored from module's saved lastLessonId
  const [selectedLessonId, setSelectedLessonId] = useState<number>(() => {
    const saved = getStoredModuleProgress(
      buildModuleId(
        initialLayout ?? initialStored.selectedLayout ?? 'krutidev',
        initialStored.activeStep ?? 2
      ),
      60
    );
    return saved.lastLessonId || initialStored.selectedLessonId || 1;
  });

  const currentLesson =
    lessonsList.find((l) => l.id === selectedLessonId) || lessonsList[0] || {
      id: 1,
      title: 'Exercise 1',
      category: 'Lesson',
      focusKeys: 'Keys',
      focusHindi: '',
      description: '',
      content: '',
    };

  // Target ASCII sequence from active lesson
  const targetContent = currentLesson.content || '';
  const targetChars = useMemo(() => targetContent.split(''), [targetContent]);

  const [typedChars, setTypedChars] = useState<
    Array<{ char: string; isCorrect: boolean }>
  >([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Layout Switch Handler
  const handleLayoutChange = (newLayout: TypingLayout) => {
    setSelectedLayout(newLayout);
    const newLang = newLayout === 'english' ? 'english' : 'hindi';
    setLanguage(newLang);
    const newModuleId = buildModuleId(newLayout, activeStep);
    const saved = getStoredModuleProgress(newModuleId, lessonsList.length || 60);
    const targetLessonId = saved.lastLessonId || 1;
    setSelectedLessonId(targetLessonId);
    setModuleProgress(saved);
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
    saveTypingSettings({
      selectedLayout: newLayout,
      language: newLang,
      selectedLessonId: targetLessonId,
      lastActiveModuleId: newModuleId,
    });
    setTimeout(() => {
      inputRef.current?.focus();
    }, 40);
  };

  // Switch Lesson
  const handleSelectLesson = (id: number) => {
    setSelectedLessonId(id);
    saveCurrentLesson(moduleId, id, activeStep);
    saveTypingSettings({
      selectedLessonId: id,
      activeStep,
      lastActiveModuleId: moduleId,
    });
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

  // Switch Step Handler
  const handleStepChange = (newStep: number) => {
    setActiveStep(newStep);
    const newModuleId = buildModuleId(selectedLayout, newStep);
    const saved = getStoredModuleProgress(newModuleId, 60);
    const targetLessonId = saved.lastLessonId || 1;
    setSelectedLessonId(targetLessonId);
    setModuleProgress(saved);
    saveCurrentLesson(newModuleId, targetLessonId, newStep);
    saveTypingSettings({
      activeStep: newStep,
      selectedLessonId: targetLessonId,
      lastActiveModuleId: newModuleId,
    });
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
  const [selectedFont, setSelectedFont] = useState<FontChoice>(
    () => initialStored.selectedFont ?? 'KrutiDev'
  );
  const [fontSize, setFontSize] = useState<number>(() => initialStored.fontSize ?? 26);

  const handleFontChange = (font: FontChoice) => {
    setSelectedFont(font);
    saveTypingSettings({ selectedFont: font });
  };

  const handleFontSizeChange = (updater: (prev: number) => number) => {
    setFontSize((prev) => {
      const next = updater(prev);
      saveTypingSettings({ fontSize: next });
      return next;
    });
  };

  // Settings
  const [backspaceOption, setBackspaceOption] = useState<
    'full' | 'oneWord' | 'deactivate'
  >(() => initialStored.backspaceOption ?? 'oneWord');
  const [showKeyboard, setShowKeyboard] = useState<boolean>(
    () => initialStored.showKeyboard ?? true
  );
  const [playSounds, setPlaySounds] = useState<boolean>(
    () => initialStored.playSounds ?? false
  );
  const [moveOnError, setMoveOnError] = useState<boolean>(
    () => initialStored.moveOnError ?? true
  );
  const [showAltModal, setShowAltModal] = useState<boolean>(false);

  const handleBackspaceOptionChange = (opt: 'full' | 'oneWord' | 'deactivate') => {
    setBackspaceOption(opt);
    saveTypingSettings({ backspaceOption: opt });
  };

  const handleShowKeyboardToggle = (val: boolean) => {
    setShowKeyboard(val);
    saveTypingSettings({ showKeyboard: val });
  };

  const handlePlaySoundsToggle = (val: boolean) => {
    setPlaySounds(val);
    saveTypingSettings({ playSounds: val });
  };

  const handleMoveOnErrorToggle = (val: boolean) => {
    setMoveOnError(val);
    saveTypingSettings({ moveOnError: val });
  };

  const handleResetModule = () => {
    const isConfirmed = window.confirm(
      `Reset all typing progress for ${LAYOUT_INFO[selectedLayout].name} (Step ${activeStep})?`
    );
    if (isConfirmed) {
      const reset = resetModuleProgress(moduleId, lessonsList.length);
      setModuleProgress(reset);
      handleSelectLesson(1);
    }
  };

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

  // Auto-scroll target text box
  useEffect(() => {
    if (currentIndex === 0) {
      if (targetContainerRef.current) targetContainerRef.current.scrollTop = 0;
      if (userContainerRef.current) userContainerRef.current.scrollTop = 0;
      return;
    }

    if (activeSpanRef.current && targetContainerRef.current) {
      const container = targetContainerRef.current;
      const element = activeSpanRef.current;

      const containerRect = container.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();

      const elementRelativeTop = elementRect.top - containerRect.top;
      const elementRelativeBottom = elementRect.bottom - containerRect.top;

      const topThreshold = 18;
      const bottomThreshold = container.clientHeight - 36;

      if (elementRelativeBottom > bottomThreshold) {
        container.scrollTop += (elementRelativeBottom - bottomThreshold) + 14;
      } else if (elementRelativeTop < topThreshold) {
        container.scrollTop = Math.max(0, container.scrollTop + elementRelativeTop - topThreshold);
      }
    }
  }, [currentIndex]);

  // Auto-scroll bottom user box independently
  useEffect(() => {
    if (userContainerRef.current) {
      const userBox = userContainerRef.current;
      userBox.scrollTop = userBox.scrollHeight;
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
    const finalElapsed = startTime
      ? Math.max(1, Math.floor((Date.now() - startTime) / 1000))
      : Math.max(1, elapsedSeconds);
    setElapsedSeconds(finalElapsed);

    const finalTotal = finalTyped.length;
    const finalCorrect = finalTyped.filter((t) => t.isCorrect).length;
    const finalAccuracy =
      finalTotal > 0 ? Number(((finalCorrect / finalTotal) * 100).toFixed(2)) : 100;
    const finalMinutes = Math.max(1 / 60, finalElapsed / 60);

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
    const gWPM5 = Math.round((finalTotal / 5) / finalMinutes);
    const nWPM5 = Math.max(0, Math.round((finalCorrect / 5) / finalMinutes));

    const gKPM = Math.round(finalTotal / finalMinutes);
    const gKPH = gKPM * 60;
    const nKPM = Math.round(finalCorrect / finalMinutes);
    const nKPH = nKPM * 60;

    setResultData({
      lessonTitle: currentLesson.title,
      lessonId: selectedLessonId,
      language,
      totalChars: finalTotal,
      correctChars: finalCorrect,
      errorCount: finalErrors,
      elapsedSeconds: finalElapsed,
      accuracy: finalAccuracy,
      grossWPM5: gWPM5,
      netWPM5: nWPM5,
      grossKPM: gKPM,
      grossKPH: gKPH,
      netKPM: nKPM,
      netKPH: nKPH,
      spaceWordsTotal: fTypedWords.length,
      spaceWordsCorrect: fCorrectWords,
      spaceWordsIncorrect: Math.max(0, fTypedWords.length - fCorrectWords),
      grossWPMWords: gWPMWords,
      netWPMWords: nWPMWords,
      backspaceCount: finalBackspaces,
    });

    // Record completed lesson progress in persistence layer
    const updatedProgress = recordLessonProgress(
      moduleId,
      selectedLessonId,
      100,
      lessonsList.length,
      {
        netWPM: nWPM5,
        accuracy: finalAccuracy,
        isCompleted: true,
      }
    );
    setModuleProgress(updatedProgress);
  };

  // Backspace action handler with robust support for One Word mode and Ctrl+Backspace
  const handleBackspaceAction = (isWordDelete: boolean) => {
    if (isFinished || typedChars.length === 0 || currentIndex === 0) return;

    setBackspaceCount((prev) => prev + 1);

    if (backspaceOption === 'deactivate') {
      if (playSounds) playKeySound(true);
      return;
    }

    if (backspaceOption === 'oneWord') {
      // In one-word backspace mode, once a word is completed and space was typed,
      // backspace is locked from crossing back into previous words
      const lastTyped = typedChars[typedChars.length - 1];
      if (lastTyped && (lastTyped.char === ' ' || lastTyped.char === '\n')) {
        // Cannot backspace across word boundary
        if (playSounds) playKeySound(true);
        return;
      }

      if (isWordDelete) {
        // Delete characters of the current active word back to the last space
        let newLen = typedChars.length;
        while (
          newLen > 0 &&
          typedChars[newLen - 1].char !== ' ' &&
          typedChars[newLen - 1].char !== '\n'
        ) {
          newLen--;
        }
        const newTyped = typedChars.slice(0, newLen);
        setTypedChars(newTyped);
        setCurrentIndex(newLen);
        if (playSounds) playKeySound(false);
      } else {
        // Delete single character within current word
        const newTyped = typedChars.slice(0, -1);
        setTypedChars(newTyped);
        setCurrentIndex((prev) => Math.max(0, prev - 1));
        if (playSounds) playKeySound(false);
      }
      return;
    }

    if (backspaceOption === 'full') {
      if (isWordDelete) {
        let newLen = typedChars.length;
        // Trim trailing spaces if any
        while (
          newLen > 0 &&
          (typedChars[newLen - 1].char === ' ' ||
            typedChars[newLen - 1].char === '\n')
        ) {
          newLen--;
        }
        // Then trim characters of previous word
        while (
          newLen > 0 &&
          typedChars[newLen - 1].char !== ' ' &&
          typedChars[newLen - 1].char !== '\n'
        ) {
          newLen--;
        }
        const newTyped = typedChars.slice(0, newLen);
        setTypedChars(newTyped);
        setCurrentIndex(newLen);
        if (playSounds) playKeySound(false);
      } else {
        const newTyped = typedChars.slice(0, -1);
        setTypedChars(newTyped);
        setCurrentIndex((prev) => Math.max(0, prev - 1));
        if (playSounds) playKeySound(false);
      }
    }
  };

  // Handle key press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (showAltModal || isFinished) return;

    if (e.key === 'Backspace') {
      e.preventDefault();
      handleBackspaceAction(e.ctrlKey || e.altKey || e.metaKey);
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

  const handleFocusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      id="typing-tutor-screen"
      className={`min-h-screen flex flex-col font-sans select-none transition-colors ${
        currentTheme === 'dark'
          ? 'dark bg-[#0b0f19] text-slate-100'
          : 'bg-[#f4f6f9] text-slate-800'
      }`}
    >
      {/* Title Bar */}
      <TitleBar
        title={`Godara Typing Tutor 5.1.168 - ${LAYOUT_INFO[selectedLayout].name} (${
          language === 'hindi' ? 'Hindi' : 'English'
        })`}
      />

      {/* Steps Header Nav Bar */}
      <div
        id="typing-steps-nav"
        className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-3 py-1 flex items-center justify-between text-xs transition-colors shadow-2xs"
      >
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <button
            onClick={() => handleStepChange(1)}
            className={`px-2.5 py-1 rounded text-xs font-medium cursor-pointer transition-colors flex items-center gap-1 ${
              activeStep === 1
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>1. Instructions</span>
          </button>

          <span className="text-slate-400 font-mono text-[10px] px-0.5">--&gt;</span>

          <button
            onClick={() => handleStepChange(2)}
            className={`px-2.5 py-1 rounded text-xs font-semibold cursor-pointer shadow-xs transition-colors flex items-center gap-1 ${
              activeStep === 2
                ? 'bg-indigo-600 text-white shadow-indigo-200 dark:shadow-none'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700'
            }`}
          >
            <KeyboardIcon className="w-3.5 h-3.5" />
            <span>2. Learn Keys (60 Lessons)</span>
          </button>

          <span className="text-slate-400 font-mono text-[10px] px-0.5">--&gt;</span>

          <button
            onClick={() => handleStepChange(3)}
            className={`px-2.5 py-1 rounded text-xs font-semibold cursor-pointer shadow-xs transition-colors flex items-center gap-1 ${
              activeStep === 3
                ? 'bg-indigo-600 text-white shadow-indigo-200 dark:shadow-none'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700'
            }`}
          >
            <Type className="w-3.5 h-3.5" />
            <span>3. Practice Words ({HINDI_PRACTICE_WORDS_LESSONS.length} Lessons)</span>
          </button>

          <span className="text-slate-400 font-mono text-[10px] px-0.5">--&gt;</span>

          <button
            onClick={() => handleStepChange(4)}
            className={`px-2.5 py-1 rounded text-xs font-semibold cursor-pointer shadow-xs transition-colors flex items-center gap-1 ${
              activeStep === 4
                ? 'bg-indigo-600 text-white shadow-indigo-200 dark:shadow-none'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>4. Type Paragraphs</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick Theme Toggle */}
          <button
            onClick={handleToggleTheme}
            title={currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="flex items-center gap-1 px-2.5 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 rounded text-xs font-medium text-slate-700 dark:text-amber-300 cursor-pointer shadow-2xs transition-colors"
          >
            {currentTheme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-indigo-600" />
                <span className="hidden sm:inline">Dark</span>
              </>
            )}
          </button>

          <button
            onClick={onBackToHome}
            className="flex items-center gap-1 px-2.5 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 rounded text-xs font-medium text-slate-700 dark:text-slate-200 cursor-pointer shadow-2xs transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home Menu</span>
          </button>
        </div>
      </div>

      {/* Typing Layout Switcher Bar & Auto-Persistence Status */}
      <div
        id="typing-layout-bar"
        className="bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-3 py-1.5 flex flex-wrap items-center justify-between gap-2 text-xs"
      >
        {/* Layout Switcher Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto">
          <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 mr-1 flex items-center gap-1">
            <SlidersHorizontal className="w-3 h-3" />
            Layout:
          </span>

          {(
            [
              'krutidev',
              'remington_gail',
              'inscript',
              'remington_cbi',
              'english',
            ] as TypingLayout[]
          ).map((lay) => {
            const isSelected = selectedLayout === lay;
            const info = LAYOUT_INFO[lay];
            return (
              <button
                key={lay}
                onClick={() => handleLayoutChange(lay)}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-700 shadow-2xs'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
                }`}
                title={info.description}
              >
                {info.shortName}
              </button>
            );
          })}
        </div>

        {/* Module Progress & Persistence Indicator */}
        <div className="flex items-center gap-2 text-[11px]">
          {onOpenEnglishTestScreen && (
            <button
              onClick={onOpenEnglishTestScreen}
              className="px-2 py-0.5 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold text-[11px] shadow-2xs flex items-center gap-1 cursor-pointer transition-colors"
              title="Open Soni Typing Tutor Exam Mode with 100 RSSB LDC English Lessons"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RSSB LDC 100 Tests (Exam Mode)</span>
            </button>
          )}

          <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded shadow-2xs">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-slate-600 dark:text-slate-400">Module Progress:</span>
            <span className="font-bold text-indigo-600 dark:text-amber-400">
              {moduleProgress.progressPercentage}%
            </span>
            <span className="text-slate-400 dark:text-slate-500">
              ({moduleProgress.completedLessons.length}/{lessonsList.length})
            </span>
          </div>
        </div>
      </div>

      {/* STEP 1: READ INSTRUCTIONS SCREEN */}
      {activeStep === 1 && (
        <div className="flex-1 p-3 overflow-y-auto max-w-5xl w-full mx-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md p-5 shadow-sm">
            <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
              <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              {language === 'hindi'
                ? 'Hindi Typing (KrutiDev 010 / DevLys 010) Guidelines'
                : 'English Typing Tutor Guidelines & Rules'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-300 mt-3">
              <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded p-3">
                <h3 className="font-bold text-slate-900 dark:text-white mb-1.5 text-sm text-indigo-900 dark:text-indigo-300">
                  1. Home Row Placement (आधार पंक्ति)
                </h3>
                <ul className="list-disc list-inside space-y-1 leading-relaxed">
                  <li><strong>Left Hand:</strong> A, S, D, F (Hindi: ं, े, क, ि, ह)</li>
                  <li><strong>Right Hand:</strong> J, K, L, ; (Hindi: र, ा, स, य, श)</li>
                  <li>Both thumbs rest on the <strong>Space Bar</strong>.</li>
                  <li>Always return fingers to the Home Row after hitting other rows.</li>
                </ul>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded p-3">
                <h3 className="font-bold text-slate-900 dark:text-white mb-1.5 text-sm text-indigo-900 dark:text-indigo-300">
                  2. Speed Measurement Formulas (2 Methods)
                </h3>
                <ul className="list-disc list-inside space-y-1 leading-relaxed">
                  <li><strong>Method 1 (Space-Delimited Words):</strong> Every space-separated word typed is counted. Net Speed counts only 100% correct words.</li>
                  <li><strong>Method 2 (5.5 Characters / Word):</strong> Standard formula: (Correct Keystrokes / 5.5) / Time in Minutes.</li>
                </ul>
              </div>

              {language === 'hindi' && (
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded p-3">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1.5 text-sm text-indigo-900 dark:text-indigo-300">
                    3. Key Alt-Codes Reference (ऑल्ट कोड्स)
                  </h3>
                  <div className="grid grid-cols-2 gap-1 font-mono text-[11px]">
                    {KRUTI_ALT_CODES.slice(0, 6).map((ac, idx) => (
                      <div
                        key={idx}
                        className="bg-white dark:bg-slate-900 p-1 rounded border border-slate-200 dark:border-slate-700 flex justify-between items-center"
                      >
                        <span className="font-bold text-indigo-700 dark:text-indigo-400">{ac.code}</span>
                        <span className="font-bold text-slate-900 dark:text-white font-kruti text-sm">
                          {ac.char}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded p-3">
                <h3 className="font-bold text-slate-900 dark:text-white mb-1.5 text-sm text-indigo-900 dark:text-indigo-300">
                  {language === 'hindi' ? '4. Matras & Ordering' : '3. Posture & Technique'}
                </h3>
                <ul className="list-disc list-inside space-y-1 leading-relaxed">
                  {language === 'hindi' ? (
                    <>
                      <li><strong>Chhoti Ee (ि):</strong> Press <code className="bg-slate-200 dark:bg-slate-700 px-1 rounded font-mono">f</code> before consonant (e.g. <code className="bg-slate-200 dark:bg-slate-700 px-1 rounded font-mono">fd</code> = कि).</li>
                      <li><strong>Badi Ee (ी):</strong> Press consonant then <code className="bg-slate-200 dark:bg-slate-700 px-1 rounded font-mono">h</code> (e.g. <code className="bg-slate-200 dark:bg-slate-700 px-1 rounded font-mono">dh</code> = की).</li>
                      <li><strong>Aa Matra (ा):</strong> Press consonant then <code className="bg-slate-200 dark:bg-slate-700 px-1 rounded font-mono">k</code> (e.g. <code className="bg-slate-200 dark:bg-slate-700 px-1 rounded font-mono">dk</code> = का).</li>
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

      {/* STEPS 2, 3, 4: MAIN INTERACTIVE TYPING WORKSPACE */}
      {(activeStep === 2 || activeStep === 3 || activeStep === 4) && (
        <div className="flex-1 p-2.5 flex gap-2.5 overflow-hidden max-w-[1700px] w-full mx-auto">
          {/* Left Side: Select Font, Font Darkness & Left Hand */}
          <div className="w-48 shrink-0 flex flex-col justify-between items-center py-0.5">
            {/* Select Font & Darkness Box */}
            <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md p-2.5 shadow-xs">
              <h3 className="text-xs font-bold text-slate-800 dark:text-slate-100 mb-1.5">
                {language === 'hindi' ? 'Select Font' : 'Font Settings'}
              </h3>
              
              {language === 'hindi' && (
                <div className="flex flex-col gap-1 text-xs text-slate-700 dark:text-slate-300 mb-2">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="fontType"
                      checked={selectedFont === 'KrutiDev'}
                      onChange={() => setSelectedFont('KrutiDev')}
                      className="accent-indigo-600"
                    />
                    <span className="font-medium text-xs">KrutiDev</span>
                  </label>

                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="fontType"
                      checked={selectedFont === 'DevLys'}
                      onChange={() => setSelectedFont('DevLys')}
                      className="accent-indigo-600"
                    />
                    <span className="font-medium text-xs">DevLys</span>
                  </label>
                </div>
              )}

              {/* Font Darkness Selection */}
              <div className="pt-1.5 border-t border-slate-200 dark:border-slate-800">
                <label className="block text-[10.5px] font-bold text-slate-800 dark:text-slate-200 mb-1">
                  Font Darkness:
                </label>
                <select
                  value={currentFontDarkness}
                  onClick={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onChange={(e) =>
                    handleChangeFontDarkness(e.target.value as FontDarkness)
                  }
                  className="w-full bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-xs font-semibold px-2 py-1 rounded border border-slate-300 dark:border-slate-700 cursor-pointer shadow-2xs outline-none"
                >
                  <option value="normal">Normal</option>
                  <option value="medium">Darker (Medium)</option>
                  <option value="bold">Bold (Dark) ⭐</option>
                  <option value="extra">Extra Dark (Deep)</option>
                </select>
              </div>
            </div>

            {/* Exercise Focus Keys */}
            <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md p-2.5 shadow-xs mt-1.5 text-[11px] text-slate-700 dark:text-slate-300">
              <div className="font-bold text-indigo-900 dark:text-indigo-400 mb-0.5">
                {activeStep === 3
                  ? 'Practice Words'
                  : activeStep === 4
                  ? 'Paragraph'
                  : 'Learn Keys'}{' '}
                - Ex {selectedLessonId}
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/80 p-1.5 rounded border border-slate-200 dark:border-slate-700 font-mono text-[10.5px] text-slate-800 dark:text-slate-200">
                Keys: <strong className="text-indigo-600 dark:text-amber-400">{currentLesson.focusKeys}</strong>
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

            {/* Container for Target & Input - Clean White in Light Mode, Dark Slate in Dark Mode */}
            <div
              className="bg-white dark:bg-slate-900 p-2.5 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col gap-2 transition-colors"
            >
              {/* 1. Target Text Box - Pure White Background in Light Mode, Ultra-Compact Sleek Highlighter */}
              <div
                ref={targetContainerRef}
                onClick={handleFocusInput}
                className="bg-white dark:bg-slate-950 rounded-md p-3 h-[145px] md:h-[155px] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-inner select-none leading-snug whitespace-pre-wrap break-words transition-colors cursor-text"
                style={{
                  fontFamily: language === 'hindi' ? selectedFont : 'monospace, sans-serif',
                  fontSize: `${fontSize}px`,
                  ...darknessStyle.cssStyle,
                }}
              >
                {targetChars.map((char, idx) => {
                  const isCurrent = idx === currentIndex;
                  const isPassed = idx < currentIndex;
                  const isWrong = isPassed && typedChars[idx] && !typedChars[idx].isCorrect;
                  const isStandalone = language === 'hindi' && isIndividualVowel(targetChars, idx);

                  // Space Character rendering - zero layout shift, seamless font space
                  if (char === ' ') {
                    return (
                      <span
                        key={idx}
                        ref={isCurrent ? activeSpanRef : null}
                        className={`inline px-0 ${
                          isCurrent
                            ? 'bg-[#fde047] dark:bg-[#eab308] text-slate-950 font-bold rounded-[1px] shadow-2xs'
                            : isPassed
                            ? 'text-slate-400 dark:text-slate-500'
                            : darknessStyle.className
                        }`}
                        style={
                          !isCurrent && !isPassed
                            ? darknessStyle.cssStyle
                            : undefined
                        }
                      >
                        {' '}
                      </span>
                    );
                  }

                  // Non-space Characters - Ultra Compact, Small, Sleek Highlighter
                  return (
                    <span
                      key={idx}
                      ref={isCurrent ? activeSpanRef : null}
                      className={`${
                        isStandalone
                          ? 'inline-block min-w-[0.55em] px-0.5 text-center'
                          : 'inline px-0'
                      } ${
                        isCurrent
                          ? 'bg-[#fde047] dark:bg-[#eab308] text-slate-950 font-bold px-0 py-0 rounded-[1px] shadow-2xs'
                          : isWrong
                          ? 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-950/70 font-bold px-0 rounded-[1px]'
                          : isPassed
                          ? 'text-slate-400 dark:text-slate-500'
                          : darknessStyle.className
                      }`}
                      style={
                        !isCurrent && !isWrong && !isPassed
                          ? darknessStyle.cssStyle
                          : undefined
                      }
                    >
                      {char}
                    </span>
                  );
                })}
              </div>

              {/* 2. Center Controller Strip */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="flex flex-wrap items-center justify-between bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700 text-xs select-none gap-1.5 transition-colors"
              >
                {/* Press Indicator & Step Status */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-xs bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 px-2.5 py-0.5 rounded shadow-2xs border border-slate-200 dark:border-slate-700">
                    <span className="text-slate-600 dark:text-slate-400 font-medium">Press :</span>
                    <span className="font-mono text-indigo-600 dark:text-amber-300 font-bold text-sm uppercase">
                      {expectedKey === ' ' ? 'Space' : expectedKey}
                    </span>
                    {language === 'hindi' && expectedKey !== ' ' && (
                      <span
                        className="text-slate-900 dark:text-slate-100 text-sm ml-1"
                        style={{
                          fontFamily: selectedFont,
                          ...darknessStyle.cssStyle,
                        }}
                      >
                        ({cleanHindiChar(KEY_TO_HINDI[expectedKey]) || expectedKey})
                      </span>
                    )}
                  </div>
                  <div className="hidden sm:flex items-center text-slate-700 dark:text-slate-200 font-bold text-xs bg-white dark:bg-slate-900 px-2 py-0.5 rounded shadow-2xs border border-slate-200 dark:border-slate-700">
                    <span>
                      {activeStep === 3
                        ? 'Practice Words'
                        : activeStep === 4
                        ? 'Paragraph'
                        : 'Learn Keys'}{' '}
                      Ex : {selectedLessonId}/{lessonsList.length}
                    </span>
                  </div>
                </div>

                {/* Exercise Selection (ONLY EXERCISE NUMBER) & Prev/Next */}
                <div
                  className="flex items-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectLesson(Math.max(1, selectedLessonId - 1));
                    }}
                    disabled={selectedLessonId <= 1}
                    title="Previous Exercise"
                    className="bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 disabled:opacity-50 text-slate-800 dark:text-slate-100 px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-600 text-xs font-bold shadow-2xs cursor-pointer flex items-center"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>

                  <select
                    id="select-exercise-number"
                    className="bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 px-2 py-0.5 rounded border border-slate-300 dark:border-slate-600 text-xs font-bold shadow-2xs cursor-pointer outline-none max-h-60"
                    value={selectedLessonId}
                    onClick={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onChange={(e) => {
                      e.stopPropagation();
                      handleSelectLesson(Number(e.target.value));
                    }}
                  >
                    {lessonsList.map((lesson) => {
                      const isCompleted = moduleProgress.completedLessons.includes(lesson.id);
                      return (
                        <option key={lesson.id} value={lesson.id} className="dark:bg-slate-800">
                          Exercise {lesson.id} {isCompleted ? '✓' : ''}
                        </option>
                      );
                    })}
                  </select>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectLesson(
                        Math.min(lessonsList.length, selectedLessonId + 1)
                      );
                    }}
                    disabled={selectedLessonId >= lessonsList.length}
                    title="Next Exercise"
                    className="bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 disabled:opacity-50 text-slate-800 dark:text-slate-100 px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-600 text-xs font-bold shadow-2xs cursor-pointer flex items-center"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRestart();
                    }}
                    title="Restart Exercise"
                    className="bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 px-2 py-0.5 rounded border border-slate-300 dark:border-slate-600 text-xs font-bold shadow-2xs cursor-pointer flex items-center gap-1 ml-0.5"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                </div>

                {/* Font Size Adjuster */}
                <div
                  className="flex items-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFontSizeChange((prev) => Math.max(16, prev - 2));
                    }}
                    className="bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 px-1.5 py-0.5 rounded text-slate-800 dark:text-slate-100 text-xs cursor-pointer font-bold border border-slate-300 dark:border-slate-600"
                  >
                    A-
                  </button>
                  <span className="px-1.5 py-0.5 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded text-xs font-bold min-w-[24px] text-center border border-slate-200 dark:border-slate-700">
                    {fontSize}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFontSizeChange((prev) => Math.min(42, prev + 2));
                    }}
                    className="bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 px-1.5 py-0.5 rounded text-slate-800 dark:text-slate-100 text-xs cursor-pointer font-bold border border-slate-300 dark:border-slate-600"
                  >
                    A+
                  </button>
                </div>
              </div>

              {/* 3. User Typing Output Box (Pure White in light mode, Dark Slate in dark) */}
              <div
                ref={userContainerRef}
                onClick={handleFocusInput}
                className="bg-white dark:bg-slate-950 rounded-md p-3 h-[145px] md:h-[155px] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-inner select-none leading-snug whitespace-pre-wrap break-words transition-colors cursor-text"
                style={{
                  fontFamily: language === 'hindi' ? selectedFont : 'monospace, sans-serif',
                  fontSize: `${fontSize}px`,
                  ...darknessStyle.cssStyle,
                }}
              >
                {typedChars.map((item, idx) => {
                  const isStandalone = language === 'hindi' && isIndividualVowel(typedChars, idx);
                  return (
                    <span
                      key={idx}
                      className={`${
                        isStandalone
                          ? 'inline-block min-w-[0.55em] px-0.5 text-center'
                          : 'inline px-0'
                      } ${
                        item.isCorrect
                          ? 'text-slate-800 dark:text-slate-100'
                          : 'text-red-600 dark:text-red-400 font-bold bg-red-100 dark:bg-red-950/70 underline decoration-red-600 px-0 rounded-[1px]'
                      }`}
                      style={item.isCorrect ? darknessStyle.cssStyle : undefined}
                    >
                      {item.char}
                    </span>
                  );
                })}

                {/* Blinking cursor */}
                <span className="inline-block w-[1.5px] h-[1em] bg-indigo-600 dark:bg-amber-400 animate-pulse align-text-bottom ml-0.5" />
              </div>

              {/* 4. On-Screen Virtual Keyboard - 100% Fully Visible */}
              {showKeyboard && (
                <div className="pt-0.5">
                  <KrutiKeyboard
                    activeKey={expectedKey}
                    isBold={currentFontDarkness !== 'normal'}
                    selectedFont={selectedFont}
                    layoutMode={language}
                    layout={selectedLayout}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Settings & Real-Time Stats (2 Speed Methods) */}
          <div className="w-52 shrink-0 flex flex-col justify-between items-center py-0.5">
            {/* Settings Box */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md p-2.5 shadow-xs text-xs"
            >
              <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-1.5 flex items-center justify-between">
                <span>Settings</span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-normal flex items-center gap-0.5">
                  <CheckCircle2 className="w-3 h-3" /> Auto-saved
                </span>
              </h3>

              {/* Backspace Options */}
              <fieldset className="border border-slate-200 dark:border-slate-700 rounded p-1.5 mb-1.5 bg-slate-50 dark:bg-slate-800/80">
                <legend className="text-[10px] font-semibold text-slate-700 dark:text-slate-300 px-1">
                  Backspace Options
                </legend>
                <div className="flex flex-col gap-0.5 text-[11px] text-slate-700 dark:text-slate-300">
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="backspace"
                      checked={backspaceOption === 'full'}
                      onChange={() => handleBackspaceOptionChange('full')}
                      className="accent-indigo-600"
                    />
                    <span>Full Backspace</span>
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="backspace"
                      checked={backspaceOption === 'oneWord'}
                      onChange={() => handleBackspaceOptionChange('oneWord')}
                      className="accent-indigo-600"
                    />
                    <span className="font-semibold text-indigo-900 dark:text-indigo-300">
                      One Word Backspace
                    </span>
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="backspace"
                      checked={backspaceOption === 'deactivate'}
                      onChange={() => handleBackspaceOptionChange('deactivate')}
                      className="accent-indigo-600"
                    />
                    <span>Deactivate</span>
                  </label>
                </div>
              </fieldset>

              {/* Checkboxes */}
              <div className="flex flex-col gap-1 text-[11px] text-slate-700 dark:text-slate-300 mb-1.5">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showKeyboard}
                    onChange={(e) => handleShowKeyboardToggle(e.target.checked)}
                    className="accent-indigo-600"
                  />
                  <span>Show Keyboard</span>
                </label>

                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={playSounds}
                    onChange={(e) => handlePlaySoundsToggle(e.target.checked)}
                    className="accent-indigo-600"
                  />
                  <span className="flex items-center gap-1">
                    {playSounds ? (
                      <Volume2 className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
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
                    onChange={(e) => handleMoveOnErrorToggle(e.target.checked)}
                    className="accent-indigo-600"
                  />
                  <span>Move on Error</span>
                </label>
              </div>

              {/* Alt Codes Button (Hindi only) */}
              {language === 'hindi' && (
                <button
                  onClick={() => setShowAltModal(true)}
                  className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 py-1 px-1.5 rounded text-[10.5px] font-medium border border-slate-300 dark:border-slate-700 cursor-pointer shadow-2xs mb-1.5 transition-colors"
                >
                  Show Alt Codes
                </button>
              )}

              {/* Reset Module Progress Button */}
              <button
                onClick={handleResetModule}
                title="Reset progress for this module"
                className="w-full bg-slate-50 dark:bg-slate-800 hover:bg-red-50 dark:hover:bg-red-950/40 text-slate-600 hover:text-red-700 dark:text-slate-400 dark:hover:text-red-300 py-0.5 px-1.5 rounded text-[10px] border border-slate-200 dark:border-slate-700 cursor-pointer transition-colors mb-1.5 flex items-center justify-center gap-1"
              >
                <RotateCcw className="w-2.5 h-2.5" />
                <span>Reset Module Progress</span>
              </button>

              {/* 2 SPEED METHODS LIVE STATUS */}
              <div className="pt-1.5 border-t border-slate-200 dark:border-slate-800 text-[10.5px] text-slate-700 dark:text-slate-300 flex flex-col gap-1">
                {/* Method 1: Word-by-word */}
                <div className="bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-700/60 rounded p-1">
                  <div className="text-[9.5px] font-bold text-amber-900 dark:text-amber-300 flex items-center gap-0.5">
                    <Target className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                    Word Method (Net):
                  </div>
                  <div className="flex justify-between font-semibold text-amber-950 dark:text-amber-100 mt-0.5">
                    <span>{netWPMWords} WPM</span>
                    <span className="text-[9px] text-amber-700 dark:text-amber-300/80 font-normal">
                      Gross: {grossWPMWords}
                    </span>
                  </div>
                </div>

                {/* Method 2: Standard 5.5 Chars */}
                <div className="bg-indigo-50/90 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-700/60 rounded p-1">
                  <div className="text-[9.5px] font-bold text-indigo-900 dark:text-indigo-300 flex items-center gap-0.5">
                    <Zap className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
                    5.5 Keystroke Method:
                  </div>
                  <div className="flex justify-between font-semibold text-indigo-950 dark:text-indigo-100 mt-0.5">
                    <span>{netWPM55} WPM</span>
                    <span className="text-[9px] text-indigo-700 dark:text-indigo-300/80 font-normal">
                      Gross: {grossWPM55}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between pt-0.5">
                  <span>
                    Acc: <strong className="text-emerald-700 dark:text-emerald-400">{accuracy}%</strong>
                  </span>
                  <span>
                    Errors: <strong className="text-red-600 dark:text-red-400">{errorCount}</strong>
                  </span>
                  <span>
                    Time: <strong>{elapsedSeconds}s</strong>
                  </span>
                </div>

                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1 mt-0.5 overflow-hidden">
                  <div
                    className="bg-indigo-600 dark:bg-amber-400 h-full transition-all duration-200"
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

      {/* Alt Codes Modal Popup */}
      {showAltModal && <AltCodesModal onClose={() => setShowAltModal(false)} />}

      {/* Comprehensive Result Dialog with BOTH Speed Methods */}
      {isFinished && resultData && (
        <ResultModal
          isOpen={true}
          result={resultData}
          data={resultData}
          onRestart={handleRestart}
          onRetry={handleRestart}
          onNextLesson={handleNextLesson}
          onClose={handleRestart}
          onBackToHome={onBackToHome}
          hasNextLesson={selectedLessonId < lessonsList.length}
        />
      )}
    </div>
  );
};
