import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import useBoundStore from "../store";
import HomeCard from "./HomeCard";
import { Button } from "@heroui/react";
import { useState } from "react";

interface Props {
  variant?: "recommended" | "free" | "category";
  title: string;
  path: string;
}

function HomeCourses({ variant, title, path }: Props) {
  const { courses } = useBoundStore();

  const [current, setCurrent] = useState("All");

  return (
    <div className="w-full">
      <div className="flex justify-between items-center w-full mb-3">
        <h3 className="font-huninn uppercase text-muted sm:text-lg text-base">
          {title}
        </h3>
        {variant !== "category" && (
          <Link to={path} className="text-accent font-inter-tight">
            <div className="flex gap-1 group">
              <span className="max-sm:text-sm">View All</span>
              <ArrowRight
                className="transition-transform group-hover:translate-x-1"
                strokeWidth={1.3}
                size={20}
              />
            </div>
          </Link>
        )}
      </div>
      {variant === "category" && (
        <div className="flex items-center gap-2 mb-3">
          {Array.from([
            "All",
            ...new Set(courses.map((item) => item.category)),
          ]).map((item) => (
            <Button
              variant={item === current ? "primary" : "outline"}
              className="rounded-full capitalize transition-colors text-sm"
              onClick={() => setCurrent(item)}
            >
              {item}
            </Button>
          ))}
        </div>
      )}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
        {courses
          .filter(
            (item) =>
              (item.category === current || current === "All") &&
              (variant !== "free" || item.price === 0),
          )
          .map((item, index) => (
            <HomeCard course={item} key={index} />
          ))}
      </div>
    </div>
  );
}

export default HomeCourses;
