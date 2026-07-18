import { Link } from "react-router-dom";
import useBoundStore from "../store";
import { Chip } from "@heroui/react";

function DashboardCourses() {
  const { courses } = useBoundStore();

  return (
    <div className="bg-background p-4 rounded-lg w-full">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-semibold tracking-tight">My Courses</h4>
        <Link
          to="/courses"
          className="text-accent hover:underline underline-offset-2"
        >
          View All
        </Link>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        {courses.slice(0, 4).map((item, index) => (
          <Link
            to="/courses"
            className="flex items-center justify-between gap-4 p-1 pr-3 border rounded-lg"
            key={index}
          >
            <div className="flex items-center gap-4">
              <img
                src={item.cover}
                alt={item.name}
                className="aspect-video w-20 rounded-lg"
              />
              <div>
                <h6 className="font-medium tracking-tight">{item.name}</h6>
                <p className="text-sm text-muted">{item.lessons} lessons</p>
              </div>
            </div>
            <Chip
              className={`${item.status === "draft" ? "border-warning text-warning" : "border-accent text-accent"} bg-background capitalize border rounded-full`}
            >
              {item.status}
            </Chip>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DashboardCourses;
