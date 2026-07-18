import CourseDetails from "../components/CourseDetails";
import CourseContent from "../components/CourseContent";
import Reviews from "../components/Reviews";
import InstructorOverview from "../components/InstructorOverview";
import CourseDescription from "../components/CourseDescription";

function Course() {
  return (
    <div className="flex flex-col py-6 gap-6">
      <CourseDetails />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="flex flex-col gap-4">
          <CourseContent />
          <Reviews />
        </div>
        <div className="flex flex-col gap-4 col-span-2">
          <CourseDescription />
          <InstructorOverview />
        </div>
      </div>
    </div>
  );
}

export default Course;
