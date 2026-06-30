import { create } from "zustand";
import { createUserSlice } from "../slices/userSlice";
import type { UserSlice } from "../types/user";
import { createCourseSlice } from "../slices/courseSlice";
import type { CourseSlice } from "../types/course";
import type { LessonSlice } from "../types/lesson";
import { createLessonSlice } from "../slices/lessonSlice";
import type { ReviewSlice } from "../types/review";
import { createReviewSlice } from "../slices/reviewSlice";

const useBoundStore = create<
  UserSlice & CourseSlice & LessonSlice & ReviewSlice
>((...a) => ({
  ...createUserSlice(...a),
  ...createCourseSlice(...a),
  ...createLessonSlice(...a),
  ...createReviewSlice(...a),
}));

export default useBoundStore;
