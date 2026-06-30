export interface User {
  id: number;
  role: "student" | "instructor" | "admin";
  wallet: number;
  skills: string[];
  bio: string;
  created_at: string;
  name: string;
  email: string;
  password: string;
  verify_code: number;
  verify_code_expiry: string;
  login_type: "email" | "google";
  is_verified: boolean;
  is_banned: boolean;
  ban_reason: string;
  avatar: string;
  is_deleted: boolean;
}

export interface Course {
  id: number;
  name: string;
  description: string;
  cover: string;
  price: number;
  owner: number;
  status: "draft" | "published" | "archived";
  level: "beginner" | "intermediate" | "advanced";
  category: string;
  rating_sum: number;
  rating_count: number;
  is_banned: boolean;
  ban_reason: string;
  skills: string[];
  duration: number;
  students_enrolled: number;
  created_at: string;
}

export interface Lesson {
  id: number;
  name: string;
  type: "video" | "notes" | "quiz";
  video: string;
  notes: string;
  course: number;
  duration: number;
  sequence: number;
  created_at: string;
}

export interface LessonProgress {
  id: number;
  lesson: number;
  user_id: number;
  completed: boolean;
  completed_at: string;
  course: number;
}

export interface Review {
  id: number;
  user_id: number;
  rating: number;
  review: string;
  created_at: Date;
  course: number;
}

export interface Transaction {
  id: number;
  type: "payout" | "enrollment" | "refund";
  status: "pending" | "completed" | "failed";
  amount: number;
  transaction_id: string;
  instructor: number;
  course: number;
  created_at: string;
}

export interface Enrollment {
  id: number;
  user_id: number;
  course: number;
  enrolled_at: string;
}

export interface Quiz {
  id: number;
  title: string;
  pass_mark: number;
  created_at: string;
  lesson: number;
}

export interface Question {
  id: number;
  quiz: number;
  question: string;
  type: "mcq" | "true_false";
  created_at: string;
}

export interface Option {
  id: number;
  question: number;
  option: string;
  correct: boolean;
}
