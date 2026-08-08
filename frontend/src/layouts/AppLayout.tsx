import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AppLayout() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <div className={location.pathname.includes("/lesson/") ? "" : "relative"}>
        <div
          className={`${location.pathname.includes("/connect/") ? "md:min-h-screen md:px-6" : "min-h-screen md:px-6 px-4"} max-w-7xl mx-auto w-full`}
        >
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
