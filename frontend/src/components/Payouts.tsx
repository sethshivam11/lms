import { ArrowUp, History, TriangleAlert } from "lucide-react";

function Payouts() {
  const payouts = [
    {
      status: "processed",
      amount: 1000,
      created_at: "2023-08-01T12:00:00Z",
    },
    {
      status: "pending",
      amount: 1500,
      created_at: "2023-08-02T12:00:00Z",
    },
    {
      status: "failed",
      amount: 500,
      created_at: "2023-08-03T12:00:00Z",
    },
  ];

  return (
    <div className="p-4 bg-background/60 md:col-span-2 rounded-lg h-fit">
      <h5 className="text-xl font-outfit font-semibold tracking-tight">
        Payouts
      </h5>
      <div className="flex flex-col gap-3 mt-4">
        {payouts.map((item, index) => (
          <div className="flex items-center justify-between gap-4" key={index}>
            <div className="flex items-center gap-1">
              <div
                className={`p-1.5 rounded-2xl ${item.status === "processed" ? "bg-success-soft" : item.status === "failed" ? "bg-danger-soft" : "bg-warning-soft"}`}
              >
                {item.status === "processed" ? (
                  <ArrowUp className="text-success" size={20} />
                ) : item.status === "failed" ? (
                  <TriangleAlert className="text-danger" size={20} />
                ) : (
                  <History className="text-warning" size={20} />
                )}
              </div>
              <div>
                <p className="font-medium leading-3">
                  Payment <span className="text-capitalize">{item.status}</span>
                </p>
                <span className="text-muted text-xs">
                  {new Date(item.created_at).toLocaleDateString("en-IN", {
                    dateStyle: "long",
                  })}
                </span>
              </div>
            </div>
            <div className="">
              <p
                className={`text-xl font-semibold ${item.status === "processed" ? "text-success" : item.status === "failed" ? "text-danger" : "text-warning"}`}
              >
                {item.amount.toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumFractionDigits: 0,
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Payouts;
