import { PART1_LESSONS } from './lessons/part1';
import { PART2_LESSONS } from './lessons/part2';
import { PART3_LESSONS } from './lessons/part3';
import { PART4_LESSONS } from './lessons/part4';
import { PART5_LESSONS } from './lessons/part5';

export interface EnglishTestLesson {
  id: number;
  title: string;
  category: string;
  content: string;
}

export const RSSB_LDC_ENGLISH_LESSONS: EnglishTestLesson[] = [
  ...PART1_LESSONS,
  ...PART2_LESSONS,
  ...PART3_LESSONS,
  ...PART4_LESSONS,
  ...PART5_LESSONS,
];
