import { Outlet } from "react-router-dom";
// import useBoundStore from "../store";

const Navbar = () => {
  // const { user } = useBoundStore();
//   const menu =
//     user.role === "student"
//       ? [
//           {
//             title: "How It Works",
//           },
//           { title: "Learning tools" },
//           { title: "Groups" },
//           { title: "Connect" },
//         ]
//       : [];

  return <div></div>;
};

const Footer = () => {
  return <div></div>;
};

function LandingLayout() {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div className="min-h-screen max-w-7xl md:px-6 px-4 mx-auto w-full">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingLayout;
