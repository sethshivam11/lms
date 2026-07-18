import type { LessonI } from "./LessonsForm";
import { formatDuration } from "../lib/helpers";
import { Button, Modal } from "@heroui/react";
import {
  GripVertical,
  ListTodo,
  Notebook,
  Pencil,
  Play,
  Trash,
} from "lucide-react";
import { DragDropProvider } from "@dnd-kit/react";
import { useSortable } from "@dnd-kit/react/sortable";
import { move } from "@dnd-kit/helpers";

function Lesson({
  id,
  index,
  type,
  name,
  duration,
  handleDelete,
}: {
  id: number;
  index: number;
  type: LessonI["type"];
  name: LessonI["name"];
  duration: LessonI["duration"];
  handleDelete: () => void;
}) {
  const { ref, handleRef } = useSortable({
    id,
    index,
    type: "item",
    accept: "item",
  });
  return (
    <div className="flex flex-col gap-1 w-full" ref={ref}>
      <div className="text-muted">
        <span className="text-xs">Lesson {index + 1} </span>·
        <span className="text-xs"> {formatDuration(duration)}</span>
      </div>
      <div className="flex items-center gap-2">
        <Button
          className="bg-accent-soft text-accent cursor-default group hover:bg-background-secondary hover:cursor-grab"
          size="sm"
          isIconOnly
          ref={handleRef}
        >
          <GripVertical className="group-hover:inline hidden text-black" />
          {type === "video" ? (
            <Play className="group-hover:hidden" />
          ) : type === "notes" ? (
            <ListTodo className="group-hover:hidden" />
          ) : (
            <Notebook className="group-hover:hidden" />
          )}
        </Button>
        <div className="border rounded-lg p-1.5 w-[calc(100%-8rem)]">
          <p className="text-sm text-foreground truncate">{name}</p>
        </div>
        <Button className="bg-warning-soft text-warning" size="sm" isIconOnly>
          <Pencil />
        </Button>
        <Modal>
          <Button variant="danger-soft" size="sm" isIconOnly>
            <Trash />
          </Button>
          <Modal.Backdrop>
            <Modal.Container>
              <Modal.Dialog className="sm:max-w-[360px] font-lora">
                <Modal.Header className="items-center text-center">
                  <Modal.Heading className="tracking-tight text-lg font-semibold">
                    Delete Lesson
                  </Modal.Heading>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    Changes you made will be lost. Are you sure you want to
                    delete this lesson?
                  </p>
                </Modal.Body>
                <Modal.Footer className="flex-col">
                  <Button
                    variant="danger"
                    className="w-full"
                    slot="close"
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                  <Button className="w-full" slot="close" variant="tertiary">
                    Cancel
                  </Button>
                </Modal.Footer>
              </Modal.Dialog>
            </Modal.Container>
          </Modal.Backdrop>
        </Modal>
      </div>
    </div>
  );
}

function DraggableLessons({
  lessons,
  setLessons,
}: {
  lessons: LessonI[];
  setLessons: (lessons: LessonI[]) => void;
}) {
  if (lessons.length === 0) return null;

  return (
    <DragDropProvider
      onDragEnd={(event) => {
        setLessons(move(lessons, event));
      }}
    >
      <div className="flex flex-col gap-4">
        {lessons.map((item, index) => (
          <Lesson
            {...item}
            index={index}
            handleDelete={() =>
              setLessons(lessons.filter((lesson) => lesson.id !== item.id))
            }
            key={item.id}
          />
        ))}
      </div>
    </DragDropProvider>
  );
}

export default DraggableLessons;
