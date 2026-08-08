import type { QuizFormI } from "./quiz";

export interface LessonFormI {
  id: number;
  type: "notes" | "video" | "quiz";
  name: string;
  video: string;
  notes: string;
  quiz: QuizFormI | null;
}

export interface Lesson {
  id: number;
  name: string;
  type: "video" | "notes" | "quiz";
  video: string | null;
  notes: string | null;
  course: number;
  duration: number;
  sequence: number;
  created_at: string;
}

export interface LessonSlice {
  lessons: Lesson[];
  lesson: Lesson;
}
