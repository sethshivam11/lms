import { lazy, Suspense, useState } from "react";
import CourseDetailsForm from "../components/CourseDetailsForm";
import { Skeleton } from "@heroui/react";
import type { LessonFormI } from "../types/lesson";
import type { CourseDetailsFormI } from "../types/course";

const LessonsForm = lazy(() => import("../components/LessonsForm"));
const PublishCourse = lazy(() => import("../components/PublishCourse"));

const steps = [
  "Start with course details",
  "Add Lessons",
  "Publish your Course",
];

function CreateCourse() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [details, setDetails] = useState<CourseDetailsFormI>({
    name: "",
    subDescription: "",
    description: "",
    category: "",
    level: "",
    skills: [],
    price: "",
  });
  const [lessons, setLessons] = useState<LessonFormI[]>([]);

  function handleSubmit() {}

  return (
    <div className="flex flex-col gap-6 py-6">
      <div>
        <h3 className="tracking-tighter sm:text-3xl text-2xl font-bold">
          Create Course
        </h3>
        <p className="text-muted">
          Set up your course, add lessons, quizzes, and publish
        </p>
      </div>
      <div className="flex max-md:flex-col gap-8">
        <div className="flex md:flex-col max-md:justify-between gap-4 md:sticky top-20 h-fit">
          {steps.map((item, index) => (
            <button
              className={`flex flex-col cursor-pointer text-left disabled:cursor-not-allowed w-full`}
              onClick={() => {
                if (step <= index) return;
                setStep((index + 1) as 1 | 2 | 3);
              }}
              disabled={step <= index}
              key={index}
            >
              <span
                className={`font-huninn uppercase ${step >= index + 1 ? "text-accent" : "text-muted"} text-xl`}
              >
                Step {index + 1}
              </span>
              <p className="text-muted">{item}</p>
            </button>
          ))}
        </div>
        <div className="lg:w-2/3 flex-1">
          {step === 1 && (
            <CourseDetailsForm
              form={details}
              setForm={(value) => setDetails(value)}
              handleNext={() => setStep(2)}
            />
          )}
          {step === 2 && (
            <Suspense
              fallback={
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
              }
            >
              <LessonsForm
                lessons={lessons}
                setLessons={setLessons}
                handleBack={() => setStep(1)}
                handleNext={() => setStep(3)}
              />
            </Suspense>
          )}
          {step === 3 && <PublishCourse handleSubmit={handleSubmit} />}
        </div>
      </div>
    </div>
  );
}

export default CreateCourse;
