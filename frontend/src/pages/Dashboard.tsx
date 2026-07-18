import { Button } from "@heroui/react";
import InstructorStats from "../components/InstructorStats";
import useBoundStore from "../store";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardCourses from "../components/DashboardCourses";
import RecentEnrollments from "../components/RecentEnrollments";
import RevenueByCourse from "../components/RevenueByCourse";
import RecentReviews from "../components/RecentReviews";

function Dashboard() {
  const { name } = useBoundStore((state) => state.user);

  return (
    <div className="flex flex-col gap-6 py-6">
      <div className="flex justify-between items-center gap-4">
        <h3 className="font-cal-sans tracking-tight sm:text-3xl text-2xl">
          Welcome <span className="text-accent">{name}</span>
        </h3>
        <Link to="/create-course">
          <Button>
            <Plus /> Create Course
          </Button>
        </Link>
      </div>
      <InstructorStats />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <div className="flex flex-col gap-4 h-fit col-span-2">
          <RevenueByCourse />
          <DashboardCourses />
          <RecentReviews />
        </div>
        <div className="flex flex-col gap-4 h-fit">
          <RecentEnrollments />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
