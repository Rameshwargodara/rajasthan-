export type TypingLayout =
  | 'krutidev'
  | 'remington_gail'
  | 'remington_cbi'
  | 'inscript'
  | 'english';

export type FontChoice = 'KrutiDev' | 'DevLys';

export interface LessonProgressRecord {
  completed: boolean;
  highestProgress: number; // 0 to 100
  bestNetWPM?: number;
  accuracy?: number;
  completedAt?: number;
}

export interface ModuleProgressState {
  moduleId: string;
  lastLessonId: number;
  activeStep: number;
  completedLessons: number[]; // Array of lesson IDs
  lessonRecords: Record<number, LessonProgressRecord>;
  progressPercentage: number; // 0 to 100
  lastVisitedAt: number;
}

export interface PersistedTypingSettings {
  selectedLayout: TypingLayout;
  selectedFont: FontChoice;
  language: 'hindi' | 'english';
  activeStep: number;
  selectedLessonId: number;
  fontSize: number;
  backspaceOption: 'full' | 'oneWord' | 'deactivate';
  showKeyboard: boolean;
  playSounds: boolean;
  moveOnError: boolean;
  lastActiveModuleId: string;
}

const SETTINGS_STORAGE_KEY = 'godara_typing_tutor_settings_v2';
const MODULES_PROGRESS_KEY = 'godara_typing_module_progress_v2';
const OVERALL_PROGRESS_KEY = 'godara_typing_overall_stats_v2';

export const DEFAULT_SETTINGS: PersistedTypingSettings = {
  selectedLayout: 'krutidev',
  selectedFont: 'KrutiDev',
  language: 'hindi',
  activeStep: 2,
  selectedLessonId: 1,
  fontSize: 26,
  backspaceOption: 'oneWord',
  showKeyboard: true,
  playSounds: false,
  moveOnError: true,
  lastActiveModuleId: 'hindi-krutidev-learn',
};

// Layout Metadata Helper
export const LAYOUT_INFO: Record<
  TypingLayout,
  {
    name: string;
    shortName: string;
    description: string;
    fontFamily: string;
    language: 'hindi' | 'english';
    badge: string;
  }
> = {
  krutidev: {
    name: 'KrutiDev 010 / DevLys',
    shortName: 'KrutiDev',
    description: 'Legacy Remington Hindi Layout for High Court, CPCT, RSMSSB, UP Police & State Exams',
    fontFamily: 'KrutiDev',
    language: 'hindi',
    badge: 'Standard',
  },
  remington_gail: {
    name: 'Mangal Remington GAIL',
    shortName: 'Remington GAIL',
    description: 'Unicode Mangal Font Remington GAIL layout for SSC, High Court, UPSSSC & Central Govt',
    fontFamily: 'Mangal, sans-serif',
    language: 'hindi',
    badge: 'Unicode',
  },
  remington_cbi: {
    name: 'Mangal Remington CBI',
    shortName: 'Remington CBI',
    description: 'Unicode Mangal Font Remington CBI layout for Court and Administrative typing tests',
    fontFamily: 'Mangal, sans-serif',
    language: 'hindi',
    badge: 'Unicode',
  },
  inscript: {
    name: 'Mangal INSCRIPT',
    shortName: 'INSCRIPT',
    description: 'Official standard Govt of India Unicode INSCRIPT keyboard layout for Railway & Banking',
    fontFamily: 'Mangal, sans-serif',
    language: 'hindi',
    badge: 'Govt Standard',
  },
  english: {
    name: 'English QWERTY',
    shortName: 'English',
    description: 'Standard English alphanumeric QWERTY touch typing tutor with 60 comprehensive exercises',
    fontFamily: 'monospace, sans-serif',
    language: 'english',
    badge: 'Universal',
  },
};

/**
 * Generate a consistent unique key for storing progress of a specific module
 */
export function buildModuleId(
  layout: TypingLayout,
  step: number,
  category?: string,
  subCategory?: string
): string {
  if (category || subCategory) {
    const raw = `${category || ''}-${subCategory || ''}-${layout}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    if (raw) return raw;
  }

  const stepName =
    step === 1
      ? 'instructions'
      : step === 3
      ? 'words'
      : step === 4
      ? 'paragraphs'
      : 'learn';

  return `${layout}-${stepName}`;
}

/**
 * Safely read stored settings from localStorage
 */
export function getStoredTypingSettings(): PersistedTypingSettings {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;
  try {
    const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_SETTINGS,
      ...parsed,
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

/**
 * Save settings to localStorage
 */
export function saveTypingSettings(
  partial: Partial<PersistedTypingSettings>
): PersistedTypingSettings {
  if (typeof window === 'undefined') return { ...DEFAULT_SETTINGS, ...partial };
  try {
    const current = getStoredTypingSettings();
    const updated = { ...current, ...partial };
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error('Failed to save typing settings to localStorage:', err);
    return { ...DEFAULT_SETTINGS, ...partial };
  }
}

/**
 * Get all stored modules progress map
 */
export function getAllModulesProgress(): Record<string, ModuleProgressState> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(MODULES_PROGRESS_KEY);
    if (!raw) return {};
    return JSON.parse(raw) || {};
  } catch {
    return {};
  }
}

/**
 * Get stored progress for a specific module
 */
export function getStoredModuleProgress(
  moduleId: string,
  totalLessonsInModule: number = 60
): ModuleProgressState {
  const all = getAllModulesProgress();
  const existing = all[moduleId];

  if (existing) {
    // Recompute percentage if necessary
    const completedCount = existing.completedLessons?.length || 0;
    const computedPercentage = Math.min(
      100,
      Math.round((completedCount / Math.max(1, totalLessonsInModule)) * 100)
    );
    return {
      ...existing,
      progressPercentage: computedPercentage,
    };
  }

  return {
    moduleId,
    lastLessonId: 1,
    activeStep: 2,
    completedLessons: [],
    lessonRecords: {},
    progressPercentage: 0,
    lastVisitedAt: Date.now(),
  };
}

/**
 * Save current active lesson ID and step for a specific module
 */
export function saveCurrentLesson(
  moduleId: string,
  lessonId: number,
  activeStep: number = 2
): void {
  if (typeof window === 'undefined') return;
  try {
    const all = getAllModulesProgress();
    const current = all[moduleId] || {
      moduleId,
      lastLessonId: 1,
      activeStep: 2,
      completedLessons: [],
      lessonRecords: {},
      progressPercentage: 0,
      lastVisitedAt: Date.now(),
    };

    all[moduleId] = {
      ...current,
      lastLessonId: lessonId,
      activeStep,
      lastVisitedAt: Date.now(),
    };

    localStorage.setItem(MODULES_PROGRESS_KEY, JSON.stringify(all));

    // Also update global current
    saveTypingSettings({
      selectedLessonId: lessonId,
      activeStep,
      lastActiveModuleId: moduleId,
    });
  } catch (err) {
    console.error('Failed to save current lesson to localStorage:', err);
  }
}

/**
 * Record lesson progress or completion
 */
export function recordLessonProgress(
  moduleId: string,
  lessonId: number,
  progressPct: number, // 0 to 100
  totalLessonsInModule: number = 60,
  stats?: { netWPM?: number; accuracy?: number; isCompleted?: boolean }
): ModuleProgressState {
  if (typeof window === 'undefined') {
    return {
      moduleId,
      lastLessonId: lessonId,
      activeStep: 2,
      completedLessons: [],
      lessonRecords: {},
      progressPercentage: 0,
      lastVisitedAt: Date.now(),
    };
  }

  try {
    const all = getAllModulesProgress();
    const current = all[moduleId] || {
      moduleId,
      lastLessonId: lessonId,
      activeStep: 2,
      completedLessons: [],
      lessonRecords: {},
      progressPercentage: 0,
      lastVisitedAt: Date.now(),
    };

    const isDone = stats?.isCompleted || progressPct >= 100;
    const completedSet = new Set(current.completedLessons || []);
    if (isDone) {
      completedSet.add(lessonId);
    }

    const prevRecord = current.lessonRecords?.[lessonId] || {
      completed: false,
      highestProgress: 0,
    };

    const newRecord: LessonProgressRecord = {
      completed: prevRecord.completed || isDone,
      highestProgress: Math.max(prevRecord.highestProgress || 0, progressPct),
      bestNetWPM: Math.max(prevRecord.bestNetWPM || 0, stats?.netWPM || 0),
      accuracy: Math.max(prevRecord.accuracy || 0, stats?.accuracy || 0),
      completedAt: isDone ? Date.now() : prevRecord.completedAt,
    };

    const updatedCompletedList = Array.from(completedSet);
    const updatedPercentage = Math.min(
      100,
      Math.round((updatedCompletedList.length / Math.max(1, totalLessonsInModule)) * 100)
    );

    const updatedModule: ModuleProgressState = {
      ...current,
      lastLessonId: lessonId,
      completedLessons: updatedCompletedList,
      lessonRecords: {
        ...(current.lessonRecords || {}),
        [lessonId]: newRecord,
      },
      progressPercentage: updatedPercentage,
      lastVisitedAt: Date.now(),
    };

    all[moduleId] = updatedModule;
    localStorage.setItem(MODULES_PROGRESS_KEY, JSON.stringify(all));

    return updatedModule;
  } catch (err) {
    console.error('Failed to record lesson progress to localStorage:', err);
    return getStoredModuleProgress(moduleId, totalLessonsInModule);
  }
}

/**
 * Get total completed lessons across all modules
 */
export function getOverallProgressSummary(): {
  totalCompletedLessons: number;
  totalModulesStarted: number;
  activeLayout: TypingLayout;
  lastVisitedModuleId: string;
} {
  const all = getAllModulesProgress();
  const settings = getStoredTypingSettings();
  let totalCompleted = 0;

  Object.values(all).forEach((mod) => {
    totalCompleted += mod.completedLessons?.length || 0;
  });

  return {
    totalCompletedLessons: totalCompleted,
    totalModulesStarted: Object.keys(all).length,
    activeLayout: settings.selectedLayout,
    lastVisitedModuleId: settings.lastActiveModuleId,
  };
}

/**
 * Clear or reset progress for a specific module or all
 */
export function resetModuleProgress(
  moduleId: string,
  totalLessonsInModule: number = 60
): ModuleProgressState {
  if (typeof window === 'undefined') {
    return {
      moduleId,
      lastLessonId: 1,
      activeStep: 2,
      completedLessons: [],
      lessonRecords: {},
      progressPercentage: 0,
      lastVisitedAt: Date.now(),
    };
  }
  try {
    const all = getAllModulesProgress();
    delete all[moduleId];
    localStorage.setItem(MODULES_PROGRESS_KEY, JSON.stringify(all));
  } catch (err) {
    console.error('Failed to reset module progress:', err);
  }
  return getStoredModuleProgress(moduleId, totalLessonsInModule);
}
