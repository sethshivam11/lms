import useBoundStore from "../store";
import { Button, Chip } from "@heroui/react";
import { CheckCircle, CreditCard, History, Shield, Users } from "lucide-react";
import { formatDuration } from "../lib/helpers";
import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";

function CourseDetails() {
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
    <div className="h-80 w-full">
      <img
        src={course.cover}
        className="absolute top-0 left-0 w-full h-80 object-cover"
      />
      <div className="bg-linear-to-b from-black/20 to-black/80 absolute top-0 left-0 w-full h-80">
        <div className="flex justify-between max-w-7xl mx-auto h-full">
          <div className="flex flex-col gap-2 justify-end p-6 flex-1">
            <Chip
              variant="soft"
              className="capitalize rounded-full self-start font-poppins"
            >
              {course.category}
            </Chip>
            <div>
              <h5 className="text-3xl tracking-tight font-bold text-background">
                {course.name}
              </h5>
              <p className="text-background-secondary/80 text-base">
                {course.subDescription}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {course.skills?.map((item, index) => (
                <Chip
                  className="bg-accent capitalize rounded-full text-white"
                  key={index}
                >
                  {item}
                </Chip>
              ))}
            </div>
            <div className="flex items-center gap-2 text-background-secondary/60 text-sm">
              <RatingStars
                stars={course.rating_sum / course.rating_count}
                subText={"rated"}
                subTextClassName="text-background-secondary/60"
              />
              <span>·</span>
              <div className="flex items-center gap-1">
                <History size={16} /> {formatDuration(course.duration)}
              </div>
              <span>·</span>
              <div className="flex items-center gap-1">
                <Users size={16} />{" "}
                {course.students_enrolled.toLocaleString("en-IN", {
                  style: "decimal",
                })}{" "}
                students
              </div>
              <span>·</span>
              <div>
                created by{" "}
                <Link
                  to={`/instructor/${course.owner}`}
                  className="text-white font-semibold hover:underline underline-offset-2"
                >
                  {course.owner_name}
                </Link>
              </div>
            </div>
          </div>
          <div className="py-2 flex flex-col justify-end h-full">
            <div className="flex flex-col gap-2 bg-background p-4 rounded-lg w-80">
              <h5 className="text-xl tracking-tight font-semibold">
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
              <Button className="w-full mt-3">Enroll</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
