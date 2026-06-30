import { Link } from "react-router-dom";
import type { Course } from "../types/course";
import { formatDuration } from "../lib/helpers";
import { Chip } from "@heroui/react";
import { Star } from "lucide-react";

function MyCourseCard({ course }: { course: Course }) {
  return (
    <Link
      to={`/course/${course.id}`}
      className="flex flex-col group rounded-lg overflow-hidden border border-background hover:border-background-tertiary"
    >
      <div className="relative overflow-hidden">
        <img
          src={course.cover}
          alt={course.name}
          className="group-hover:scale-105 transition-transform duration-700 w-full aspect-video object-cover"
        />
      </div>
      <div className="flex items-center justify-between gap-1 pr-3">
        <div className="flex flex-col p-3 w-4/5">
          <h5 className="sm:text-xl text-lg tracking-tight font-semibold">
            {course.name}
          </h5>
          <p className="text-muted sm:text-base text-sm truncate w-full">
            {course.subDescription}
          </p>
          <p className="sm:text-sm text-xs text-muted">
            {formatDuration(course.duration)} · {course.lessons} lessons
          </p>
          <div className="flex flex-wrap items-center gap-1 mt-1">
            {course.skills?.map((item, index) => (
              <Chip
                className="rounded-full bg-white border border-accent text-accent capitalize"
                key={index}
              >
                {item}
              </Chip>
            ))}
          </div>
        </div>
        <Chip className="rounded-full bg-warning border border-black font-semibold">
          {(course.rating_sum / course.rating_count).toLocaleString("en-IN", {
            style: "decimal",
            maximumFractionDigits: 1,
          })}
          <Star size={16} />
        </Chip>
      </div>
    </Link>
  );
}

export default MyCourseCard;
