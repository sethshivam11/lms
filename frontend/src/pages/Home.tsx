import CourseCarousel from "../components/CourseCarousel";
import useBoundStore from "../store";
import HomeCourses from "../components/HomeCourses";
import Instructors from "../components/Instructors";

function Home() {
  const { name } = useBoundStore((state) => state.user);

  return (
    <div className="flex flex-col py-6 gap-6">
      <h3 className="font-cal-sans tracking-tight sm:text-3xl text-2xl">
        Welcome <span className="text-accent">{name}</span>
      </h3>
      <CourseCarousel />
      <HomeCourses
        variant="recommended"
        title="Recommended Courses"
        path="/explore"
      />
      <HomeCourses
        variant="category"
        title="Browse by Category"
        path="/explore"
      />
      <Instructors />
      <HomeCourses
        variant="free"
        title="Free Courses"
        path="/explore?price=0"
      />
    </div>
  );
}

export default Home;
