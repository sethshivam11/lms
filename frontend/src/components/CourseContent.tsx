import useBoundStore from "../store";
import { Link } from "react-router-dom";
import { FileText, ListChecks, Play } from "lucide-react";
import { formatDuration } from "../lib/helpers";

function CourseContent() {
  const { lessons } = useBoundStore();
  return (
    <div className="bg-background rounded-lg p-4 h-fit">
      <h4 className="text-xl font-semibold tracking-tight">Course Contents</h4>
      <div className="flex flex-col gap-2 mt-4">
        {lessons.map((lesson, index) => (
          <Link
            to={`/course/${lesson.course}/lesson/${lesson.id}`}
            className="flex items-center gap-2 border border-background-secondary p-2"
            key={index}
          >
            <div className="p-2 bg-accent/50 rounded-lg">
              {lesson.type === "video" ? (
                <Play />
              ) : lesson.type === "quiz" ? (
                <ListChecks />
              ) : (
                <FileText />
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted">
                {lesson.type === "quiz" ? "Quiz" : "Lesson"} {index + 1}
              </span>
              <h5 className="text-base truncate">{lesson.name}</h5>
              <span className="text-xs text-muted">
                {formatDuration(lesson.duration)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CourseContent;
