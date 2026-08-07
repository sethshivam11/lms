import { Link } from "react-router-dom";
import useBoundStore from "../store";
import RatingChip from "./RatingChip";
import { ArrowRight, Layers, Users } from "lucide-react";

function DashboardCourses() {
  const { courses } = useBoundStore();

  return (
    // <div className="bg-background p-4 rounded-lg w-full">
    //   <div className="flex items-center justify-between">
    //     <h4 className="text-xl font-outfit font-semibold tracking-tight">My Courses</h4>
    //     <Link
    //       to="/courses"
    //       className="text-accent ring-visible rounded-lg p-1 hover:underline underline-offset-2"
    //     >
    //       View All
    //     </Link>
    //   </div>
    //   <div className="flex flex-col gap-2 mt-4">
    //     {courses.slice(0, 4).map((item, index) => (
    //       <Link
    //         to="/courses"
    //         className="flex items-center ring-visible justify-between gap-4 p-1 pr-3 border rounded-lg"
    //         key={index}
    //       >
    //         <div className="flex items-center gap-4">
    //           <img
    //             src={item.cover}
    //             alt={item.name}
    //             className="aspect-video w-20 rounded-lg"
    //           />
    //           <div>
    //             <h6 className="font-medium tracking-tight">{item.name}</h6>
    //             <p className="text-sm text-muted">{item.lessons} lessons</p>
    //           </div>
    //         </div>
    //         <Chip
    //           className={`${item.status === "draft" ? "border-warning text-warning" : "border-accent text-accent"} bg-background capitalize border rounded-full`}
    //         >
    //           {item.status}
    //         </Chip>
    //       </Link>
    //     ))}
    //   </div>
    // </div>
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-2xl font-outfit tracking-tighter font-semibold">
          Your Courses
        </h3>
        <Link
          to="/courses"
          className="flex items-center gap-2 ring-visible rounded-lg text-accent text-sm group p-1"
        >
          View All
          <ArrowRight
            className="group-hover:translate-x-1 transition-transform"
            size={16}
          />
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-2 md:col-span-2">
        {courses.map((item, index) => (
          <div
            className="flex items-center gap-4 rounded-lg p-3 border border-default bg-background/50 relative"
            key={index}
          >
            <img src={item.cover} className="size-24 object-cover rounded-sm" />
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <p className="font-medium font-outfit tracking-tight">
                {item.name}
              </p>
              <span className="text-muted text-sm truncate">
                {item.tagline}
              </span>
              <div className="flex items-center gap-2 text-xs text-muted">
                <span className="flex items-center gap-1">
                  <Users size={14} /> {item.students_enrolled}
                </span>
                ·
                <span className="flex items-center gap-1">
                  <Layers size={14} /> {item.lessons}
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xl text-accent font-extrabold">
                  {item.price.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 0,
                  })}
                </span>
                <RatingChip
                  rating={item.rating_sum / item.rating_count}
                  className="bg-warning"
                  starClassName="text-black"
                  size={14}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardCourses;
