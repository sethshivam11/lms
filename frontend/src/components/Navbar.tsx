import useBoundStore from "../store";
import { Link, useLocation } from "react-router-dom";
import {
  Book,
  BookOpen,
  Cog,
  DollarSign,
  Home,
  LayoutDashboard,
  LibraryBig,
  LogOut,
  PanelLeft,
  Star,
  User,
} from "lucide-react";
import { AvatarDropdown } from "./AvatarDropdown";
import { Drawer, Button, Avatar, Accordion } from "@heroui/react";

function Navbar() {
  const location = useLocation();
  const { role, avatar, name } = useBoundStore((state) => state.user);

  const menu =
    role === "student"
      ? [
          {
            icon: Home,
            name: "Home",
            path: "/home",
          },
          {
            icon: LibraryBig,
            name: "Explore",
            path: "/explore",
          },
          {
            icon: Book,
            name: "My Courses",
            path: "/my-courses",
          },
        ]
      : [
          {
            icon: LayoutDashboard,
            name: "Dashboard",
            path: "/dashboard",
          },
          {
            icon: DollarSign,
            name: "Earnings",
            path: "/earnings",
          },
          {
            icon: Book,
            name: "Courses",
            path: "/courses",
          },
          {
            icon: Star,
            name: "Reviews",
            path: "/reviews",
          },
        ];

  return (
    <div className="flex justify-between items-center bg-transparent/50 backdrop-blur-lg w-full px-8 py-4 border-b sticky top-0 left-0 z-50">
      <Drawer>
        <Button variant="ghost" className="sm:hidden" isIconOnly>
          <PanelLeft />
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.Header>
                <Drawer.Heading>
                  <div className="flex justify-center items-center gap-2">
                    <BookOpen size={30} />
                    <span className="text-3xl font-extrabold tracking-tighter font-lora">
                      LMS
                    </span>
                  </div>
                </Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>
                <div className="flex flex-col gap-1 mt-8">
                  {menu.map((item, index) => (
                    <Link to={item.path} key={index}>
                      <Button variant="ghost" className="w-full">
                        <item.icon />
                        <span className="w-full text-left">{item.name}</span>
                      </Button>
                    </Link>
                  ))}
                </div>
              </Drawer.Body>
              <Drawer.Footer>
                <Accordion className="w-full max-w-md">
                  <Accordion.Item>
                    <Accordion.Heading>
                      <Accordion.Trigger className="rounded-lg hover:bg-hover px-2 py-1 gap-2">
                        <Avatar size="sm" className="rounded-full">
                          <Avatar.Image src={avatar ?? "/avatar-small.png"} />
                          <Avatar.Fallback delayMs={600}>
                            {name[0]}
                          </Avatar.Fallback>
                        </Avatar>
                        <span className="w-full text-left">{name}</span>
                        <Accordion.Indicator />
                      </Accordion.Trigger>
                    </Accordion.Heading>
                    <Accordion.Panel>
                      <Accordion.Body className="pt-2">
                        <Button variant="ghost" size="sm" className="w-full">
                          <User />
                          <span className="w-full text-left">Profile</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full">
                          <Cog />
                          <span className="w-full text-left">Settings</span>
                        </Button>
                        <Button
                          variant="danger-soft"
                          size="sm"
                          className="w-full"
                        >
                          <LogOut />
                          <span className="w-full text-left">Log Out</span>
                        </Button>
                      </Accordion.Body>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </Drawer.Footer>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
      <div className="flex justify-center items-center gap-2">
        <BookOpen size={30} />
        <span className="text-3xl font-extrabold tracking-tighter">LMS</span>
      </div>
      <div className="flex justify-between items-center gap-4 max-sm:hidden group">
        {menu.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`p-2 font-medium hover:text-accent ${location.pathname.includes(item.path) ? "text-accent group-hover:text-muted" : "text-muted"}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <AvatarDropdown />
    </div>
  );
}

export default Navbar;
