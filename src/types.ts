export interface TypingModule {
  id: string;
  title: string;
  type: 'alpha' | 'hindi' | 'punjabi' | 'number' | 'exam' | 'office' | 'custom';
  category: string;
  subCategory?: string;
  iconLabel?: string;
  badgeType?: string;
  description?: string;
}

export interface SelectedModuleState {
  isOpen: boolean;
  module: TypingModule | null;
}
