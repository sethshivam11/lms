import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Modal,
  TextField,
  Select,
  ListBox,
} from "@heroui/react";
import { ArrowUp, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import {
  durationSchema,
  nameSchema,
  notesSchema,
  videoSchema,
} from "../schema/lesson";
import RichTextField from "./RichTextField";
import { useState } from "react";
import DraggableLessons from "./DraggableLessons";
import QuizForm from "./QuizForm";
import { questionSchema } from "../schema/quiz";
import type { LessonFormI } from "../types/lesson";
import type { QuizFormI } from "../types/quiz";

function LessonsForm({
  lessons,
  setLessons,
  handleBack,
  handleNext,
}: {
  lessons: LessonFormI[];
  setLessons: (lessons: LessonFormI[]) => void;
  handleBack: () => void;
  handleNext: () => void;
}) {
  const [invalid, setInvalid] = useState(false);
  const [lesson, setLesson] = useState<LessonFormI>({
    id: 0,
    type: "notes",
    name: "",
    video: "",
    duration: "",
    notes: "",
  });
  const [quiz, setQuiz] = useState<QuizFormI>({
    passMark: "",
    instructions: "",
    questions: [
      {
        id: 1,
        question: "",
        type: "mcq",
        options: [
          {
            id: 1,
            option: "",
            correct: false,
          },
          {
            id: 2,
            option: "",
            correct: false,
          },
        ],
      },
    ],
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    switch (lesson.type) {
      case "notes":
        const notes = notesSchema.safeParse(lesson.notes);
        setInvalid(notes.success);
        break;
      case "video":
        const result = notesSchema.safeParse(lesson.notes);
        setInvalid(result.success);
        break;
      case "quiz":
        quiz.questions.map((item) => {
          const result = questionSchema.safeParse(item);
          setInvalid(result.success);
          return;
        });
        break;
      default:
        return;
    }
    setLesson({
      id: 0,
      type: "notes",
      name: "",
      video: "",
      duration: "",
      notes: "",
    });
    setLessons([
      ...lessons,
      { ...lesson, id: lessons[lessons.length - 1].id + 1 },
    ]);
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h4 className="text-xl font-semibold tracking-tight">Add Lessons</h4>
        <p className="text-muted text-sm">Add Lessons to your course</p>
      </div>
      <DraggableLessons
        lessons={lessons}
        setLessons={(lessons) => setLessons(lessons)}
      />
      <Form
        className="flex flex-col gap-4 bg-background/50 p-4 rounded-xl"
        onSubmit={handleSubmit}
        onInvalid={() => setInvalid(true)}
      >
        <h5 className="text-xl font-semibold text-center tracking-tight text-accent">
          Lesson Details
        </h5>
        <div className="grid grid-cols-4 gap-4">
          <Select
            name="type"
            placeholder="Type of Lesson"
            value={lesson.type}
            onChange={(value) =>
              setLesson((prev) => ({
                ...prev,
                type: value?.toString() as LessonFormI["type"],
              }))
            }
          >
            <Label>
              Type <span className="text-danger">*</span>
            </Label>
            <Select.Trigger>
              <Select.Value className="capitalize" />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                {["notes", "video", "quiz"].map((item, index) => (
                  <ListBox.Item
                    id={item}
                    textValue={item}
                    className="capitalize"
                    key={index}
                  >
                    {item}
                  </ListBox.Item>
                ))}
              </ListBox>
            </Select.Popover>
          </Select>
          <TextField
            name="name"
            type="text"
            autoComplete="name"
            className="col-span-3"
            value={lesson.name}
            onChange={(value) => setLesson({ ...lesson, name: value })}
            validate={(value) => {
              const result = nameSchema.safeParse(value);
              return result.success ? null : result.error.issues[0].message;
            }}
          >
            <Label>
              {lesson.type === "quiz" ? "Title" : "Name"}{" "}
              <span className="text-danger">*</span>
            </Label>
            <Input
              placeholder={
                lesson.type === "quiz" ? "Title of Quiz" : "Name the lesson"
              }
            />
            <FieldError />
          </TextField>
        </div>
        {lesson.type === "video" && (
          <div className="grid grid-cols-4 gap-4">
            <TextField
              name="video"
              type="text"
              className="flex-1 col-span-3"
              validate={(value) => {
                const result = videoSchema.safeParse(value);
                return result.success ? null : result.error.issues[0].message;
              }}
            >
              <Label>
                Video <span className="text-danger">*</span>
              </Label>
              <div className="relative">
                <Input
                  placeholder="URL of the video uploaded to YouTube"
                  className="w-full"
                />
                <Modal>
                  <Modal.Trigger className="absolute top-0 right-0 z-10 -mt-2 -mr-2 size-fit rounded-full">
                    <button
                      type="button"
                      className="p-2 bg-accent-soft text-accent rounded-full backdrop-blur-md italic font-xs leading-2"
                    >
                      i
                    </button>
                  </Modal.Trigger>
                  <Modal.Backdrop>
                    <Modal.Container>
                      <Modal.Dialog>
                        <Modal.CloseTrigger />
                        <Modal.Body></Modal.Body>
                      </Modal.Dialog>
                    </Modal.Container>
                  </Modal.Backdrop>
                </Modal>
              </div>
              <Description>
                Please make sure that video must be public or unlisted
              </Description>
              <FieldError />
            </TextField>
            <TextField
              name="duration"
              type="number"
              validate={(value) => {
                const result = durationSchema.safeParse(value);
                return result.success ? null : result.error.issues[0].message;
              }}
            >
              <Label>
                Duration <span className="text-danger">*</span>
              </Label>
              <Input placeholder="Duration (in seconds)" />
              <FieldError />
            </TextField>
          </div>
        )}
        {(lesson.type === "video" || lesson.type === "notes") && (
          <RichTextField
            label={
              <>
                Notes
                {lesson.type === "notes" && (
                  <span className="text-danger"> *</span>
                )}
              </>
            }
            value={lesson.notes}
            placeholder="Provide notes to students"
            onChange={(value) =>
              setLesson((prev) => ({ ...prev, notes: value }))
            }
            invalid={invalid}
            validate={(value) => {
              const result = notesSchema.safeParse(value);
              return result.success ? null : result.error.issues[0].message;
            }}
          />
        )}
        {lesson.type === "quiz" && (
          <QuizForm quiz={quiz} setQuiz={setQuiz} invalid={invalid} />
        )}
        <div className="flex justify-center gap-4">
          <Button variant="tertiary" type="submit">
            {lessons.length === 0 ? <Plus /> : <ArrowUp />} Add Lesson
          </Button>
        </div>
      </Form>
      <div className="flex justify-between gap-2">
        <Button variant="outline" type="button" onClick={handleBack}>
          <ChevronLeft />
          Back
        </Button>
        <Button type="button" onClick={handleNext}>
          Continue
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}

export default LessonsForm;
