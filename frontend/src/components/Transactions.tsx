import { Avatar } from "@heroui/react";

function Transactions() {
  const transactions = [
    {
      avatar: "/avatar-small.png",
      name: "Kate Moore",
      course: "React.js",
      amount: 1200,
      created_at: "2026-06-09T06:05:01.891Z",
    },
    {
      avatar: "/avatar-small.png",
      name: "Kate Moore",
      course: "React.js",
      amount: 1200,
      created_at: "2026-06-09T06:05:01.891Z",
    },
    {
      avatar: "/avatar-small.png",
      name: "Kate Moore",
      course: "React.js",
      amount: 1200,
      created_at: "2026-06-09T06:05:01.891Z",
    },
    {
      avatar: "/avatar-small.png",
      name: "Kate Moore",
      course: "React.js",
      amount: 1200,
      created_at: "2026-06-09T06:05:01.891Z",
    },
    {
      avatar: "/avatar-small.png",
      name: "Kate Moore",
      course: "React.js",
      amount: 1200,
      created_at: "2026-06-09T06:05:01.891Z",
    },
  ];

  return (
    <div className="flex flex-col gap-4 bg-background rounded-lg p-4">
      <h5 className="text-xl font-outfit font-semibold tracking-tight">
        Transactions
      </h5>
      <div className="flex flex-col">
        {transactions.map((item, index) => (
          <div className="flex items-center justify-between first:border-0 border-t gap-4 py-2" key={index}>
            <div className="flex items-center gap-2">
              <Avatar className="rounded-full" size="md">
                <Avatar.Image src={item.avatar} />
                <Avatar.Fallback>{item.name[0]}</Avatar.Fallback>
              </Avatar>
              <div>
                <p className="font-medium leading-4">{item.name}</p>
                <span className="text-muted text-sm">{item.course}</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-accent text-xl font-semibold">{item.amount.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0
              })}</p>
              <span className="text-muted text-xs">
                {new Date(item.created_at).toLocaleDateString("en-IN")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transactions;
