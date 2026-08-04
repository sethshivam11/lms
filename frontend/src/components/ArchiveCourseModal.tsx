import { Button, Modal, Tooltip } from "@heroui/react";
import { Archive } from "lucide-react";

function ArchiveCourseModal({ courseId }: { courseId: number }) {
  const handleArchive = () => {
    console.log(courseId);
  };

  return (
    <Modal>
      <Tooltip delay={0}>
        <Button
          className="bg-warning-soft text-warning-soft-foreground"
          size="sm"
          onClick={handleArchive}
          isIconOnly
        >
          <Archive />
        </Button>
        <Tooltip.Content>
          <p className="font-outfit">Archive</p>
        </Tooltip.Content>
      </Tooltip>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog>
            <Modal.Icon className="bg-warning-soft text-warning-soft-foreground mx-auto mb-4">
              <Archive />
            </Modal.Icon>
            <Modal.Header className="items-center text-center">
              <h4 className="text-xl font-outfit font-semibold">
                Archive Course
              </h4>
            </Modal.Header>
            <Modal.Body>
              <p className="text-center">
                Are you sure you want to archive this course? You can unarchive
                it later.
              </p>
            </Modal.Body>
            <Modal.Footer className="flex-col">
              <Button className="w-full bg-warning" slot="close">
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

export default ArchiveCourseModal;
