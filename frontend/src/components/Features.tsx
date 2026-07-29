import {
  Cog,
  Hammer,
  LineChart,
  ListTodo,
  Notebook,
  Play,
  Split,
  TrendingUp,
} from "lucide-react";

function Features({ role }: { role: "student" | "instructor" }) {
  const features =
    role === "student"
      ? [
          {
            icon: Play,
            title: "Video Lessons",
            description: "Learn with engaging, easy-to-follow video content",
          },
          {
            icon: Notebook,
            title: "Rich Notes",
            description:
              "Review concepts with beautifully formatted notes and examples",
          },
          {
            icon: ListTodo,
            title: "Interactive Quizzes",
            description:
              "Test your knowledge and reinforce what you've learned",
          },
          {
            icon: LineChart,
            title: "Progress Tracking",
            description: "Stay motivated by tracking your learning journey",
          },
        ]
      : [
          {
            icon: Hammer,
            title: "Powerful Course Builder",
            description:
              "Create structured courses with videos, rich notes, and interactive quizzes—all in one seamless workflow.",
          },
          {
            icon: Split,
            title: "Flexible Course Publishing",
            description:
              "Offer free or paid courses and decide how learners access your content",
          },
          {
            icon: TrendingUp,
            title: "Student Progress Insights",
            description:
              "Track learner progress and understand how students engage with your courses",
          },
          {
            icon: Cog,
            title: "Simple Course Management",
            description:
              "Update lessons, organize content, and publish changes whenever you're ready",
          },
        ];

  return (
    <section
      className="border-t bg-foreground sm:px-6 px-4 scroll-mt-16"
      id="features"
    >
      <div className="flex flex-col items-center justify-center gap-16 py-20 max-w-7xl mx-auto">
        <div className="text-center">
          <span className="font-huninn uppercase text-accent tracking-tighter">
            Why Learn Loop?
          </span>
          <h2 className="text-3xl tracking-tighter font-bold font-outfit text-background">
            {role === "student"
              ? "Everything You Need to Learn Better"
              : "Everything You Need to Teach Better"}
          </h2>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          {features.map((item, index) => (
            <div
              className="flex flex-col justify-center gap-6 bg-background border rounded-4xl p-6 shadow-lg shadow-muted/40 relative"
              key={index}
            >
              <span className="absolute right-4 top-4 font-huninn text-muted tracking-tighter text-sm">
                0{index + 1}
              </span>
              <span className="rounded-full text-accent bg-accent-soft w-fit p-3">
                <item.icon />
              </span>
              <div className="flex flex-col gap-2">
                <h5 className="text-xl font-cal-sans font-medium">
                  {item.title}
                </h5>
                <p className="text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
