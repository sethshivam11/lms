import SearchCourses from "../components/SearchCourses";
import useBoundStore from "../store";
import MyCourseCard from "../components/MyCourseCard";
import { useMemo, useState } from "react";
import { Chip } from "@heroui/react";

function MyCourses() {
  const { search, setSearch, courses } = useBoundStore();

  const [filter, setFilter] = useState<string[]>([]);

  const categories = useMemo(() => {
    return Array.from(new Set(courses.map((item) => item.category)));
  }, [courses]);

  return (
    <div className="flex flex-col py-6 gap-6">
      <h3 className="tracking-tighter sm:text-3xl text-2xl font-bold">
        My Courses
      </h3>
      <SearchCourses value={search} setValue={setSearch} />
      <div className="flex items-center gap-2">
        {categories.map((item, index) => (
          <button
            className="cursor-pointer"
            onClick={() =>
              setFilter((prev) =>
                prev.includes(item)
                  ? prev.filter((i) => i !== item)
                  : [...prev, item],
              )
            }
            key={index}
          >
            <Chip
              className={`rounded-full capitalize border border-accent ${filter.includes(item) ? "bg-accent text-white" : "bg-accent-soft text-black"}`}
            >
              {item}
            </Chip>
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
        {courses.map((item, index) => (
          <MyCourseCard course={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default MyCourses;
