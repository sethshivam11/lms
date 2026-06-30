import { Router } from "express";
import {
  markLessonComplete,
  markLessonIncomplete,
} from "../controllers/progress.controller";

const router = Router();

router.post("/mark-complete", markLessonComplete);

router.put("/mark-incomplete", markLessonIncomplete);

export default router;
