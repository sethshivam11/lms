import { Avatar } from "@heroui/react";
import { formatDistance } from "date-fns";

function RecentEnrollments() {
  const enrollments = [
    {
      avatar: "/avatar-small.png",
      name: "Aman",
      course: "React Tutorial",
      created_at: "2026-06-09T06:05:01.891Z",
    },
    {
      avatar: "/avatar-small.png",
      name: "Sara",
      course: "CSS Tricks",
      created_at: "2026-06-09T06:05:01.891Z",
    },
    {
      avatar: "/avatar-small.png",
      name: "John",
      course: "JavaScript Deep Dive",
      created_at: "2026-06-09T06:05:01.891Z",
    },
    {
      avatar: "/avatar-small.png",
      name: "Emily",
      course: "Understanding APIs",
      created_at: "2026-06-09T06:05:01.891Z",
    },
  ];

  return (
    <div className="bg-background p-4 rounded-lg w-full">
      <h4 className="text-xl font-semibold tracking-tight">
        Recent Enrollments
      </h4>
      <div className="flex flex-col gap-2 mt-4">
        {enrollments.map((item, index) => (
          <div
            className="flex items-center justify-between gap-4 p-2 border rounded-lg"
            key={index}
          >
            <div className="flex gap-4">
              <Avatar className="rounded-full size-10">
                <Avatar.Image src={item.avatar} />
                <Avatar.Fallback>{item.name[0]}</Avatar.Fallback>
              </Avatar>
              <div>
                <h6 className="font-medium tracking-tight">
                    {item.name}
                </h6>
                <p className="text-muted text-xs">
                    {item.course}
                </p>
              </div>
            </div>
            <span className="text-xs text-muted">
              {formatDistance(new Date(item.created_at), new Date(), {
                addSuffix: true,
              })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentEnrollments;
