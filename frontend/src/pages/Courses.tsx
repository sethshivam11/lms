import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import ManageCourses from "../components/ManageCourses";
import DraftCourses from "../components/DraftCourses";
import ArchivedCourses from "../components/ArchivedCourses";

function Courses() {
  return (
    <div className="flex flex-col gap-6 py-6">
      <div className="flex justify-between items-center gap-4">
        <div>
          <h3 className="font-cal-sans tracking-tight sm:text-3xl text-2xl">
            My Courses
          </h3>
          <p className="text-muted">Manage, edit and track all your courses</p>
        </div>
        <Link
          to="/create-course"
          className="button button--primary ring-visible-offset"
        >
          <Plus />
          <span className="max-sm:hidden">Create Course</span>
        </Link>
      </div>
      <ManageCourses />

      <div>
        <h3 className="font-cal-sans tracking-tight sm:text-3xl text-2xl">
          Drafts
        </h3>
        <p className="text-muted">Work in progress</p>
      </div>
      <DraftCourses />

      <div>
        <h3 className="font-cal-sans tracking-tight sm:text-3xl text-2xl">
          Archived
        </h3>
        <p className="text-muted">Work in progress</p>
      </div>
      <ArchivedCourses />
    </div>
  );
}

export default Courses;
