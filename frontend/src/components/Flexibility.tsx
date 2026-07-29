import {
  DollarSign,
  Rocket,
  SquarePen,
  Tag,
} from "lucide-react";
import { Link } from "react-router-dom";

function Flexibility({ role }: { role: "instructor" | "student" }) {
  const courses =
    role === "student"
      ? [
          {
            icon: Tag,
            title: "Learn Without Spending a Penny",
            description:
              "Explore a wide range of free courses and start learning immediately. Build new skills, discover new interests, and learn at your own pace—all without any subscription fees.",
            highlights: [
              "Instant enrollment",
              "No subscription required",
              "Learn at your own pace",
            ],
          },
          {
            icon: DollarSign,
            title: "Go Deeper with Premium Courses",
            description:
              "Access comprehensive courses created by experienced instructors. Dive into advanced topics with structured lessons, detailed notes, and interactive quizzes designed for focused learning.",
            highlights: [
              "Expert-created content",
              "In-depth learning experience",
              "Structured lessons & quizzes",
            ],
          },
        ]
      : [
          {
            icon: SquarePen,
            title: "Professional Course Builder",
            description:
              "Create polished learning experiences without complicated tools or workflows",
            highlights: [
              "Easy-to-use editor",
              "Rich content support",
              "Course organization",
            ],
          },
          {
            icon: Rocket,
            title: "Seamless Publishing",
            description:
              "Preview, publish, and manage your courses with confidence whenever you're ready",

            highlights: [
              "Course preview",
              "One-click publishing",
              "Ongoing management",
            ],
          },
        ];

  return (
    <section className="border-y sm:px-6 px-4 scroll-mt-16" id="courses">
      <div className="flex flex-col items-center justify-center gap-16 py-20 max-w-7xl mx-auto">
        <div className="text-center">
          <span className="font-huninn uppercase text-accent tracking-tighter">
            {role === "student" ? "Flexible Learning" : "Powerful Tools"}
          </span>
          <h2 className="text-3xl tracking-tighter font-bold font-outfit">
            {role === "student"
              ? "Free or Paid—The Choice Is Yours"
              : "Built for Modern Educators"}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((item, index) => (
            <div
              className={`border rounded-2xl p-6 ${role === "student" ? "first:bg-background bg-accent-soft not-first:border-accent" : "border-accent hover:bg-background transition-colors"}`}
              key={index}
            >
              <item.icon size={40} className="text-accent" />
              <h5
                className={`font-outfit font-bold text-2xl tracking-tight mt-6 ${index === 1 ? "text-accent" : ""}`}
              >
                {item.title}
              </h5>
              <p className="text-muted mt-4">{item.description}</p>
              <ul className="flex flex-col gap-2 mt-4">
                {item.highlights.map((highlight, index) => (
                  <li
                    className="flex items-center gap-2 font-merriweather text-sm"
                    key={index}
                  >
                    <div className="bg-accent rounded-full size-2" />
                    {highlight}
                  </li>
                ))}
              </ul>
              {role === "student" && (
                <Link
                  to={`/explore${index === 0 ? "?price=0" : ""}`}
                  className={`button mt-6 w-full ring-visible-offset ${index === 0 ? "button--outline" : "button--primary"}`}
                >
                  Browse {index === 0 ? "Free" : "Paid"} Courses
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Flexibility;
