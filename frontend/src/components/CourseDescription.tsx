import useBoundStore from "../store";

function CourseDescription() {
  const { course } = useBoundStore();
  return (
    <div className="p-4 bg-background rounded-lg">
      <h4 className="text-xl font-semibold tracking-tight">Description</h4>
      <p className="font-quicksand mt-2">{course.description}</p>
    </div>
  );
}

export default CourseDescription;
