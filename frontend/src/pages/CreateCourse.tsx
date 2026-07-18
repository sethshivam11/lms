import { useState } from "react";
import CourseDetailsForm, { type FormI } from "../components/CourseDetailsForm";
import LessonsForm, { type LessonI } from "../components/LessonsForm";
import PublishCourse from "../components/PublishCourse";

const steps = [
  "Start with course details",
  "Add Lessons",
  "Publish your Course",
];

function CreateCourse() {
  const [step, setStep] = useState<1 | 2 | 3>(2);
  const [details, setDetails] = useState<FormI>({
    name: "",
    subDescription: "",
    description: "",
    category: "",
    level: "",
    skills: [],
    price: "",
  });
  const [lessons, setLessons] = useState<LessonI[]>([]);

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
            <LessonsForm
              lessons={lessons}
              setLessons={setLessons}
              handleBack={() => setStep(1)}
              handleNext={() => setStep(3)}
            />
          )}
          {step === 3 && <PublishCourse handleSubmit={handleSubmit} />}
        </div>
      </div>
    </div>
  );
}

export default CreateCourse;
