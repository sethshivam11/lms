import useBoundStore from "../store";
import { Link } from "react-router-dom";
import Logo from "./Logo";

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
            name: "Learn Loop",
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
            name: "Learn Loop",
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
      <div className="flex max-sm:flex-col justify-evenly items-center px-4 py-8 gap-4 font-outift">
        <Link
          to="/home"
          className="flex flex-col items-center justify-center gap-2 sm:hidden mb-4 ring-visible"
        >
          <Logo className="" />
          <h3 className="text-4xl font-extrabold font-cal-sans">Learn Loop</h3>
          <span className="text-muted font-lora text-center w-60">
            Learn, teach, and grow
          </span>
        </Link>
        {menu.map((item, index) => {
          if (item.name === "Learn Loop") {
            return (
              <Link
                to={item.path}
                key={index}
                className="flex flex-col items-center justify-center gap-2 max-sm:hidden ring-visible rounded-lg p-2"
              >
                <Logo className="w-12" />
                <h3 className="text-2xl font-bold font-cal-sans">
                  {item.name}
                </h3>
                <span className="text-muted font-lora text-center w-60">
                  Learn, teach, and grow
                </span>
              </Link>
            );
          } else
            return (
              <Link
                to={item.path}
                className="font-medium ring-visible rounded-lg p-2"
                key={index}
              >
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
            className="hover:underline hover:text-accent transition-colors ring-visible rounded"
          >
            Shivam
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Footer;
