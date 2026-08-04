import { Button, Modal, Tooltip } from "@heroui/react";
import { ArrowUpFromLine } from "lucide-react";

function PublishCourseModal({ courseId }: { courseId: number }) {
  const handlePublish = () => {
    console.log(courseId);
  };

  return (
    <Modal>
      <Tooltip delay={0}>
        <Button
          className="bg-success-soft text-success-soft-foreground"
          size="sm"
          onClick={handlePublish}
          isIconOnly
        >
          <ArrowUpFromLine />
        </Button>
        <Tooltip.Content>
          <p className="font-outfit">Publish</p>
        </Tooltip.Content>
      </Tooltip>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog>
            <Modal.Icon className="bg-success-soft text-success-soft-foreground mx-auto mb-4">
              <ArrowUpFromLine />
            </Modal.Icon>
            <Modal.Header className="items-center text-center">
              <h4 className="text-xl font-outfit font-semibold">
                Publish Course
              </h4>
            </Modal.Header>
            <Modal.Body>
              <p className="text-center">
                Are you sure you want to publish this course? You can archive it
                later.
              </p>
            </Modal.Body>
            <Modal.Footer className="flex-col">
              <Button className="w-full bg-success" slot="close">
                Publish
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

export default PublishCourseModal;
