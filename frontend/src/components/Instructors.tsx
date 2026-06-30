import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import useBoundStore from "../store";
import { Button } from "@heroui/react";
import type { UserSlice } from "../types/user";
import { useRef } from "react";

function Instructor({
  instructor,
}: {
  instructor: UserSlice["instructors"][0];
}) {
  return (
    <div className="border border-background rounded-lg p-4 text-center snap-start hover:border-background-tertiary">
      <img src={instructor.avatar} className="w-40 mb-3" />
      <h5 className="font-medium sm:text-lg text-base whitespace-nowrap">
        {instructor.name}
      </h5>
      <p className="text-muted text-xs truncate">
        {instructor.skills.slice(0, 3).join(", ")}
      </p>
      <p className="text-xs text-muted">{instructor.courses} Courses</p>
      <Link to={`/instructor/${instructor.id}`}>
        <Button className="w-full mt-4">View Courses</Button>
      </Link>
    </div>
  );
}

function Instructors() {
  const { instructors } = useBoundStore();
  const containerRef = useRef<HTMLDivElement>(null);

  const slidePrev = () => {
    if (!containerRef.current) return;
    const scrollWidth = containerRef.current.children[0].clientWidth;
    containerRef.current.scrollBy({
      left: scrollWidth,
      behavior: "smooth",
    });
  };
  const slideNext = () => {
    if (!containerRef.current) return;
    const scrollWidth = containerRef.current.children[0].clientWidth;
    containerRef.current.scrollBy({
      left: -scrollWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center w-full mb-3">
        <h3 className="font-huninn uppercase text-muted md:text-lg text-base">
          Popular Instructors
        </h3>
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <Button variant="outline" onClick={slideNext} isIconOnly>
              <ChevronLeft />
            </Button>
            <Button variant="outline" onClick={slidePrev} isIconOnly>
              <ChevronRight />
            </Button>
          </div>
          <Link
            to="/instructors"
            className="text-accent font-inter-tight group py-2"
          >
            <div className="flex items-center gap-1 group">
              <span className="max-sm:text-sm">View All</span>
              <ArrowRight
                className="transition-transform group-hover:translate-x-1"
                strokeWidth={1.3}
                size={20}
              />
            </div>
          </Link>
        </div>
      </div>
      <div
        className="flex items-center gap-2 snap-x overflow-x-auto"
        ref={containerRef}
      >
        {instructors.map((item, index) => (
          <Instructor instructor={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Instructors;
