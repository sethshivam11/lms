import useBoundStore from "../store";
import { CheckCircle, CreditCard, Shield } from "lucide-react";
import { Button, cn } from "@heroui/react";

function EnrollCourse({ className }: { className?: string }) {
  const { course } = useBoundStore();

  const benefits = [
    {
      icon: CheckCircle,
      text: "Lifetime Access",
    },
    {
      icon: Shield,
      text: "Secured Payments",
    },
    {
      icon: CreditCard,
      text: "One Time Payment",
    },
  ];

  return (
    <div
      className={cn(
        "py-2 pr-2 flex flex-col justify-end h-full",
        className,
      )}
    >
      <div className="flex flex-col gap-2 bg-background p-4 rounded-lg w-80">
        <h5 className="text-xl tracking-tight font-semibold font-outfit">
          Enroll into course
        </h5>
        <h3 className="text-3xl tracking-tighter text-accent font-bold">
          {course.price.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
          })}
        </h3>
        <ul className="flex flex-col gap-2 text-sm text-muted">
          {benefits.map((item, index) => (
            <li className="flex items-center gap-2" key={index}>
              <item.icon size={16} className="text-accent" /> {item.text}
            </li>
          ))}
        </ul>
        <Button className="w-full bg-linear-to-b from-accent/50 to-accent bg-transparent mt-3">Enroll</Button>
      </div>
    </div>
  );
}

export default EnrollCourse;
