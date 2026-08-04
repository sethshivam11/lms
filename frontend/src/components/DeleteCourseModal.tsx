import { Button, Modal, Tooltip } from "@heroui/react";
import { Trash } from "lucide-react";

function DeleteCourseModal({ courseId }: { courseId: number }) {
  const handleDelete = () => {
    console.log(courseId);
  };
  return (
    <Modal>
      <Tooltip delay={0}>
        <Button
          className="bg-danger-soft text-danger-soft-foreground"
          size="sm"
          onClick={handleDelete}
          isIconOnly
        >
          <Trash />
        </Button>
        <Tooltip.Content>
          <p className="font-outfit">Delete</p>
        </Tooltip.Content>
      </Tooltip>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog>
            <Modal.Icon className="bg-danger-soft text-danger-soft-foreground mx-auto mb-4">
              <Trash />
            </Modal.Icon>
            <Modal.Header className="items-center text-center">
              <h4 className="text-xl font-outfit font-semibold">
                Delete Course
              </h4>
            </Modal.Header>
            <Modal.Body>
              <p className="text-center">
                Are you sure you want to delete this course? This action is
                irreversible.
              </p>
            </Modal.Body>
            <Modal.Footer className="flex-col">
              <Button className="w-full bg-danger" slot="close">
                Archive
              </Button>
              <Button className="w-full" slot="close" variant="ghost">
                Cancel
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

export default DeleteCourseModal;
