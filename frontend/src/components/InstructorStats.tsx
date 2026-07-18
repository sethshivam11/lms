import { DollarSign, Star, Users } from "lucide-react";

function InstructorStats() {
  const stats = [
    {
      icon: Users,
      title: "Total Students",
      value: 1200,
    },
    {
      icon: DollarSign,
      title: "Total Revenue",
      value: 14265,
    },
    {
      icon: Star,
      title: "Average Rating",
      value: 4.5,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
      {stats.map(({ icon, title, value }, index) => {
        const Icon = icon;
        return (
          <div className="p-8 rounded-xl border" key={index}>
            <Icon />
            <h4 className="text-2xl font-agdasima uppercase font-bold tracking-tight text-accent">{title}</h4>
            <p className="text-4xl font-merriweather">
              {value.toLocaleString("en-IN", {
                style: title.toLowerCase().includes("revenue")
                  ? "currency"
                  : "decimal",
                currency: "INR",
                minimumFractionDigits: title.toLowerCase().includes("rating")
                  ? 1
                  : 0,
              })}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default InstructorStats;
