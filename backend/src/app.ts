import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorHandler from "./middlewares/error.middleware";
import { User as UserI } from "./utils/types";
import path from "path";

import authRoutes from "./routes/auth.route";
import userRoutes from "./routes/user.route";
import courseRoutes from "./routes/course.route";
import reviewRoutes from "./routes/review.route";
import lessonRoutes from "./routes/lesson.route";
import progressRoutes from "./routes/progress.route";
import instructorRoutes from "./routes/instructor.route";
import transactionRoutes from "./routes/transaction.route";

declare global {
  namespace Express {
    interface User extends UserI {}
    interface Request {
      user?: User;
      file?: Multer.File;
    }
  }
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(express.static("public"));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/courses", courseRoutes);
app.use("/api/v1/reviews", reviewRoutes);
app.use("/api/v1/lessons", lessonRoutes);
app.use("/api/v1/progress", progressRoutes);
app.use("/api/v1/instructors", instructorRoutes);
app.use("/api/v1/transactions", transactionRoutes);

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "frontend", "dist")));
  app.get(/.*/, (_, res) => {
    res.sendFile(path.join(__dirname1, "frontend", "dist", "index.html"));
  });
} else {
  app.get("/", (_, res) => {
    res.send("App is under development!");
  });
}

app.use(errorHandler);

export default app;
