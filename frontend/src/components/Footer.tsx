import { BookOpen } from "lucide-react";
import useBoundStore from "../store";
import { Link } from "react-router-dom";

function Footer() {
  const { role } = useBoundStore((state) => state.user);
  const portfolio = import.meta.env.PORTFOLIO_URL;

  const menu =
    role === "student"
      ? [
          {
            name: "Home",
            path: "/home",
          },
          {
            name: "Courses",
            path: "/explore",
          },
          {
            name: "LMS",
            path: "/home",
          },
          {
            name: "My Courses",
            path: "/my-courses",
          },
          {
            name: "Connect",
            path: "/connect",
          },
        ]
      : [
          {
            name: "Dashboard",
            path: "/dashboard",
          },
          {
            name: "Earnings",
            path: "/earnings",
          },
          {
            name: "LMS",
            path: "/home",
          },
          {
            name: "Courses",
            path: "/courses",
          },
          {
            name: "Reviews",
            path: "/reviews",
          },
        ];
  return (
    <div className="flex flex-col bg-footer text-footer-foreground tracking-tight">
      <div className="flex max-sm:flex-col justify-evenly items-center px-4 py-8 gap-4 font-inter-tight">
        <Link
          to="/home"
          className="flex flex-col items-center justify-center gap-2 sm:hidden mb-4"
        >
          <BookOpen size={50} strokeWidth={1.5} />
          <h3 className="text-4xl font-extrabold font-lora">LMS</h3>
          <span className="font-inter-tight font-medium">
            Learning Management System
          </span>
        </Link>
        {menu.map((item, index) => {
          if (item.name === "LMS") {
            return (
              <Link
                to={item.path}
                key={index}
                className="flex flex-col items-center justify-center gap-2 max-sm:hidden"
              >
                <BookOpen size={50} strokeWidth={1.5} />
                <h3 className="text-4xl font-extrabold font-lora">
                  {item.name}
                </h3>
                <span className="font-inter-tight font-medium">
                  Learning Management System
                </span>
              </Link>
            );
          } else
            return (
              <Link to={item.path} className="font-medium" key={index}>
                {item.name}
              </Link>
            );
        })}
      </div>
      <div className="flex items-center justify-between border-t border-footer-border p-4 text-xs text-background-secondary">
        <span>&copy; Copyright Reserved</span>
        <span>
          Made with ❤️ by{" "}
          <Link
            to={portfolio}
            target="_blank"
            className="hover:underline hover:text-accent transition-all"
          >
            Shivam
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Footer;
