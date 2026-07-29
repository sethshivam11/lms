import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { ListBox, ListBoxItem, Select } from "@heroui/react";
import { Check, ChevronRight } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menu = location.pathname.includes("/instructor")
    ? []
    : [
        {
          title: "Home",
          path: "#home",
        },
        { title: "Features", path: "#features" },
        { title: "Learning", path: "#learning" },
        { title: "Courses", path: "#courses" },
      ];

  const [portal, setPortal] = useState(
    location.pathname.includes("/instructor") ? "/instructor" : "/",
  );

  return (
    <nav className="border-b p-2 sticky top-0 left-0 backdrop-blur-sm bg-white/50 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="flex items-center gap-2 ring-visible p-1 rounded-lg"
          >
            <Logo />
            <span className="sm:text-2xl text-xl font-outfit font-bold tracking-tighter">
              Learn Loop
            </span>
          </Link>
          <Select
            value={portal}
            onChange={(value) => {
              if (!value) return;
              navigate(value.toString());
              setPortal(value.toString());
            }}
          >
            <Select.Trigger className="bg-transparent shadow-none pl-0">
              <Select.Value className="text-xl text-muted group font-cal-sans" />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                {["/", "/instructor"].map((item, index) => (
                  <ListBoxItem
                    id={item}
                    textValue={item}
                    key={index}
                    className="font-cal-sans text-muted"
                  >
                    {item === "/" ? "/student" : item}{" "}
                    {portal === item && (
                      <Check
                        className="group-first:hidden absolute right-2"
                        size={16}
                      />
                    )}
                  </ListBoxItem>
                ))}
              </ListBox>
            </Select.Popover>
          </Select>
        </div>
        <div className="md:flex hidden items-center justify-between w-1/3">
          {menu.map((item, index) => (
            <a
              href={item.path}
              className="text-muted text-sm font-outfit hover:text-accent p-2 rounded-lg ring-visible"
              key={index}
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className="flex gap-2">
          <Link
            to="/login"
            className="button button--sm button--outline ring-visible-offset"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="button button--sm button--primary ring-visible-offset"
          >
            Start Free <ChevronRight />
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  const location = useLocation();
  const role = location.pathname.includes("/instructor")
    ? "instructor"
    : "student";

  const nav = [
    {
      title: "Home",
      path: "#home",
    },
    {
      title: "Features",
      path: "#features",
    },
    {
      title: "Learning",
      path: "#learning",
    },
    {
      title: "Courses",
      path: "#courses",
    },
  ];

  return (
    <footer className="grid grid-cols-2 bg-footer p-10">
      <div className="flex flex-col gap-2 max-w-7xl mx-auto text-footer-foreground">
        <Logo className="w-fit" />
        <div>
          <h4 className="text-xl font-cal-sans tracking-tight">Learn Loop</h4>
          <p className="text-muted text-sm">
            Learn, teach, and grow with a modern learning platform designed for
            students and educators.
          </p>
        </div>
      </div>
      <div className="flex justify-evenly">
        <div className="flex flex-col text-footer-foreground">
          <h4 className="text-xl font-semibold">
            For {role === "instructor" ? "Instructors" : "Students"}
          </h4>
          <ul className="flex flex-col gap-2 text-muted font-outfit mt-4">
            {nav.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className="hover:underline underline-offset-2"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col text-footer-foreground">
          <h4 className="text-xl font-semibold">
            For {role === "instructor" ? "Students" : "Instructors"}
          </h4>
          <ul className="flex flex-col gap-2 text-muted font-outfit mt-4">
            <li>
              <a
                href={role === "instructor" ? "/" : "/instructor"}  
                className="hover:underline underline-offset-2"
              >
                {role === "instructor" ? "Student Portal": "Become an Instructor"}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

function LandingLayout() {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div className="min-h-screen w-full">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingLayout;
