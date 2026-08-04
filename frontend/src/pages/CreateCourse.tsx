import { Fragment, lazy, Suspense, useEffect, useState } from "react";
import CourseDetailsForm from "../components/CourseDetailsForm";
import { Skeleton, toast } from "@heroui/react";
import type { LessonFormI } from "../types/lesson";
import type { CourseDetailsFormI } from "../types/course";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const LessonsForm = lazy(() => import("../components/LessonsForm"));
const PublishCourse = lazy(() => import("../components/PublishCourse"));

const LessonsFormSkeleton = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-6 w-28 rounded-lg" />
        <Skeleton className="h-4 w-40 rounded-lg" />
      </div>
      <div className="flex flex-col gap-4 bg-background/50 p-4 rounded-xl">
        <Skeleton className="h-6 w-32 rounded-lg self-center" />
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col gap-2">
            <Skeleton className="w-12 h-4 rounded-lg" />
            <Skeleton className="w-full h-10 rounded-lg" />
          </div>
          <div className="flex flex-col gap-2 col-span-3">
            <Skeleton className="w-12 h-4 rounded-lg" />
            <Skeleton className="w-full h-10 rounded-lg" />
          </div>
        </div>
        <div className="flex flex-col gap-2 col-span-3">
          <Skeleton className="w-12 h-4 rounded-lg" />
          <Skeleton className="w-full h-40 rounded-lg" />
        </div>
        <Skeleton className="h-8 w-32 rounded-lg self-center" />
      </div>
      <div className="flex justify-between items-center gap-4">
        <Skeleton className="h-8 w-20 rounded-lg self-center" />
        <Skeleton className="h-8 w-24 rounded-lg self-center" />
      </div>
    </div>
  );
};

const steps = [
  "Start with course details",
  "Add Lessons",
  "Publish your Course",
];

function CreateCourse() {
  const navigate = useNavigate();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [cover, setCover] = useState<{ file: File | null; uri: string }>({
    file: null,
    uri: "",
  });
  const [details, setDetails] = useState<CourseDetailsFormI>({
    name: "",
    tagline: "",
    description: "",
    category: "",
    level: "beginner",
    skills: [],
    price: "",
  });
  const [lessons, setLessons] = useState<LessonFormI[]>([]);

  const handleSubmit = () => {
    localStorage.removeItem("course-draft");
    localStorage.setItem("courses", JSON.stringify({ details, lessons }));
    toast.success("Course saved successfully");
    navigate("/dashboard");
  };

  useEffect(() => {
    const course = JSON.parse(localStorage.getItem("course-draft") || "null");
    if (course) {
      toast.success("Continue where you left off?", {
        actionProps: {
          children: "Restore",
          onPress: () => {
            if (course?.details) setDetails(course.details);
            if (course?.lessons) setLessons(course.lessons);
            toast.clear();
          },
          size: "sm",
          className: "bg-accent-soft text-accent rounded-full text-sm",
        },
        timeout: 1000,
        onClose: () => localStorage.removeItem("course-draft"),
      });
    }
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [step]);

  return (
    <div className="flex flex-col gap-6 py-6">
      <div>
        <h3 className="tracking-tighter sm:text-3xl text-2xl font-outfit font-bold">
          Create Course
        </h3>
        <p className="text-muted">
          Set up your course, add lessons, quizzes, and publish
        </p>
      </div>
      <div className="flex max-md:flex-col gap-8">
        <div className="flex md:flex-col max-md:justify-between max-md:items-center md:gap-4 md:sticky top-20 h-fit">
          {steps.map((item, index) => (
            <Fragment key={index}>
              <button
                className={`flex flex-col cursor-pointer text-left disabled:cursor-not-allowed md:w-full`}
                onClick={() => {
                  if (step <= index && !cover && lessons.length === 0) return;
                  setStep((index + 1) as 1 | 2 | 3);
                }}
                disabled={step <= index && !cover && lessons.length === 0}
                key={index}
              >
                <span
                  className={`font-huninn uppercase ${step >= index + 1 ? "text-accent" : "text-muted"} text-xl`}
                >
                  Step {index + 1}
                </span>
                <p className="text-muted max-sm:hidden whitespace-nowrap">
                  {item}
                </p>
              </button>
              <ArrowRight
                size={20}
                className={`sm:hidden last:hidden ${step} ${index} ${step > index ? "text-accent" : "text-muted"}`}
              />
            </Fragment>
          ))}
        </div>
        <div className="lg:w-2/3 flex-1">
          {step === 1 && (
            <CourseDetailsForm
              cover={cover}
              form={details}
              setCover={setCover}
              setForm={(value) => setDetails(value)}
              handleNext={() => {
                localStorage.setItem(
                  "course-draft",
                  JSON.stringify({ details }),
                );
                setStep(2);
              }}
            />
          )}
          {step === 2 && (
            <Suspense fallback={<LessonsFormSkeleton />}>
              <LessonsForm
                lessons={lessons}
                setLessons={setLessons}
                handleBack={() => setStep(1)}
                handleNext={() => {
                  localStorage.setItem(
                    "course-draft",
                    JSON.stringify({ details, lessons }),
                  );
                  setStep(3);
                }}
              />
            </Suspense>
          )}
          {step === 3 && (
            <PublishCourse
              course={{ cover, ...details, lessons }}
              handleBack={() => setStep(2)}
              handleSubmit={handleSubmit}
              setLessons={setLessons}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateCourse;
