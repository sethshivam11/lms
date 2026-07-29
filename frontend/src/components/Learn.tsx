import {
  Brain,
  FileText,
  Pencil,
  Rocket,
  Search,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useMemo, useState } from "react";

interface Card {
  id: "search" | "hassle" | "practice" | "create" | "content" | "publish";
  icon: LucideIcon;
  tagline: string;
  title: string;
  description: string;
}

function Learn({ role }: { role: "student" | "instructor" }) {
  const [active, setActive] = useState<Card["id"]>(
    role === "student" ? "search" : "create",
  );

  const cards: Card[] =
    role === "student"
      ? [
          {
            id: "search",
            icon: Search,
            tagline: "Discover Courses",
            title: "Find the Perfect Course",
            description:
              "Browse curated categories or use powerful search to quickly find courses that match your interests and goals. Spend less time searching and more time learning.",
          },
          {
            id: "hassle",
            icon: Zap,
            tagline: "Hassle-Free Enrollment",
            title: "Start Learning Instantly",
            description:
              "Enroll in free courses with just a click. No subscriptions, no complicated processes—simply choose a course and begin your learning journey.",
          },
          {
            id: "practice",
            icon: Brain,
            tagline: "Learn by Practicing",
            title: "Turn Knowledge into Skills",
            description:
              "Strengthen your understanding with hands-on quizzes and practice activities designed to help you retain concepts and apply what you've learned.",
          },
        ]
      : [
          {
            id: "create",
            icon: Pencil,
            tagline: "Create Courses",
            title: "Build Your Course",
            description:
              "Start with an intuitive course builder that helps you organize lessons, structure your content, and create a professional learning experience with ease.",
          },
          {
            id: "content",
            icon: FileText,
            tagline: "Add Learning Content",
            title: "Engage Every Learner",
            description:
              "Upload videos, write rich notes, and create interactive quizzes to deliver engaging lessons that keep learners motivated from start to finish.",
          },
          {
            id: "publish",
            icon: Rocket,
            tagline: "Publish & Manage",
            title: "Launch with Confidence",
            description:
              "Preview your course before publishing, offer it as free or paid, and manage updates whenever you're ready—all from one place.",
          },
        ];

  const activeCard = useMemo(() => {
    return cards.find((item) => item.id === active);
  }, [active]);

  if (!activeCard) return null;

  return (
    <section
      className="flex flex-col items-center justify-center gap-16 py-20 max-w-7xl mx-auto sm:px-6 px-4 scroll-mt-16"
      id="learning"
    >
      <div className="text-center">
        <span className="font-huninn uppercase text-accent tracking-tighter">
          {role === "student" ? "Learning Experience" : "Teaching Experience"}
        </span>
        <h2 className="text-3xl tracking-tighter font-bold font-outfit">
          {role === "student"
            ? "Everything You Need to Learn Better"
            : "Everything You Need to Build Great Courses"}
        </h2>
      </div>
      <div className="grid md:grid-cols-2 items-center gap-6 sm:px-6 px-4 w-full">
        <div
          className="flex flex-col gap-4 animate-slide-right p-4 border rounded-xl md:h-56"
          key={active}
        >
          <span className="bg-accent w-fit p-3 rounded-4xl text-white">
            <activeCard.icon />
          </span>
          <h5 className="font-outfit font-semibold tracking-tight text-2xl">
            {activeCard?.title}
          </h5>
          <p className="text-muted">{activeCard?.description}</p>
        </div>
        <div className="flex flex-col gap-4">
          {cards.map((item, index) => (
            <button
              className={`border flex items-center gap-4 p-4 rounded-4xl transition-colors font-inter-tight font-medium ring-visible-offset ${active === item.id ? "bg-accent-soft text-accent border-accent" : "bg-background hover:bg-background-secondary"}`}
              onClick={() => setActive(item.id)}
              key={index}
            >
              <item.icon />
              {item.tagline}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Learn;
