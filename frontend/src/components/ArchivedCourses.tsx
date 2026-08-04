import { Button, EmptyState, Table, Tooltip } from "@heroui/react";
import { ArchiveRestore, Layers, Package2, Star, Users } from "lucide-react";
import RatingStars from "./RatingStars";

function ArchivedCourses() {
  const archived = [
    {
      name: "Angular Basics",
      lessons: 12,
      students_enrolled: 40,
      rating_sum: 8,
      rating_count: 2,
    },
    {
      name: "Remix Guide",
      lessons: 7,
      students_enrolled: 23,
      rating_sum: 14,
      rating_count: 4,
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
            <Table.Column className="font-huninn uppercase">
              Students
            </Table.Column>
            <Table.Column className="font-huninn uppercase">
              Rating
            </Table.Column>
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
            {archived.map((item, index) => (
              <Table.Row key={index}>
                <Table.Cell className="font-medium">{item.name}</Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2 h-full">
                    <Layers size={16} /> {item.lessons}
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2 h-full">
                    <Users size={16} />
                    {item.students_enrolled}
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2 h-full">
                    <Star className="text-warning" size={16} />
                    <RatingStars
                      stars={item.rating_sum / item.rating_count}
                      starsClassName="hidden!"
                      size={0}
                    />
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <Tooltip>
                      <Button
                        className="bg-warning-soft text-warning-soft-foreground"
                        size="sm"
                      >
                        <ArchiveRestore />
                      </Button>
                      <Tooltip.Content>
                        <p className="font-outfit">Unarchive</p>
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

export default ArchivedCourses;
