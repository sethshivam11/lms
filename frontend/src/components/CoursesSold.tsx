import { Table } from "@heroui/react";

function CoursesSold() {
  const coursesSold = [
    {
      course: "Vue.js Basics",
      amount: 6000,
      count: 3,
    },
    {
      course: "Vue.js Basics",
      amount: 6000,
      count: 3,
    },
    {
      course: "Vue.js Basics",
      amount: 6000,
      count: 3,
    },
    {
      course: "Vue.js Basics",
      amount: 6000,
      count: 3,
    },
    {
      course: "Vue.js Basics",
      amount: 6000,
      count: 3,
    },
    {
      course: "Vue.js Basics",
      amount: 6000,
      count: 3,
    },
  ];

  return (
    <div className="flex flex-col gap-4 bg-background rounded-lg p-4">
      <h5 className="text-xl font-outfit font-semibold tracking-tight">
        Courses Sold
      </h5>
      <div className="flex flex-col gap-4">
        <Table className="border">
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="min-w-[600px]">
              <Table.Header>
                <Table.Column isRowHeader>Course</Table.Column>
                <Table.Column>Amount</Table.Column>
                <Table.Column>Count</Table.Column>
              </Table.Header>
              <Table.Body>
                {coursesSold.map((item, index) => (
                  <Table.Row key={index}>
                    <Table.Cell className="font-medium">
                      {item.course}
                    </Table.Cell>
                    <Table.Cell>{item.amount}</Table.Cell>
                    <Table.Cell>{item.count}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
}

export default CoursesSold;
