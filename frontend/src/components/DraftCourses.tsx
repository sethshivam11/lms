import { Button, EmptyState, Table, Tooltip } from "@heroui/react";
import { ArchiveRestore, Layers, Package2, Pen, Trash } from "lucide-react";

function DraftCourses() {
  const drafts = [
    {
      name: "React.js",
      lessons: 4,
      price: 1212,
    },
    {
      name: "Vue Fundamentals",
      lessons: 6,
      price: 2300,
    },
  ];

  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
            <Table.Column className="font-huninn uppercase" isRowHeader>
              Course
            </Table.Column>
            <Table.Column className="font-huninn uppercase">
              Lessons
            </Table.Column>
            <Table.Column className="font-huninn uppercase">Price</Table.Column>
            <Table.Column className="font-huninn uppercase">
              Actions
            </Table.Column>
          </Table.Header>
          <Table.Body
            renderEmptyState={() => (
              <EmptyState className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
                <Package2 />
                <span className="text-sm text-muted">No courses found</span>
              </EmptyState>
            )}
          >
            {drafts.map((item, index) => (
              <Table.Row key={index}>
                <Table.Cell className="font-medium">{item.name}</Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2 h-full">
                    <Layers size={16} /> {item.lessons}
                  </div>
                </Table.Cell>
                <Table.Cell className="text-accent text-lg">
                  {item.price.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 0,
                  })}
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <Tooltip delay={0}>
                      <Button
                        size="sm"
                        className="bg-success-soft text-success"
                        isIconOnly
                      >
                        <ArchiveRestore />
                      </Button>
                      <Tooltip.Content>
                        <p className="font-outfit">Publish</p>
                      </Tooltip.Content>
                    </Tooltip>
                    <Tooltip delay={0}>
                      <Button
                        className="bg-warning-soft text-warning"
                        size="sm"
                        isIconOnly
                      >
                        <Pen />
                      </Button>
                      <Tooltip.Content>
                        <p className="font-outfit">Edit</p>
                      </Tooltip.Content>
                    </Tooltip>
                    <Tooltip delay={0}>
                      <Button
                        className="bg-danger-soft text-danger"
                        size="sm"
                        isIconOnly
                      >
                        <Trash />
                      </Button>
                      <Tooltip.Content>
                        <p className="font-outfit">Delete</p>
                      </Tooltip.Content>
                    </Tooltip>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}

export default DraftCourses;
