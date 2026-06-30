import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AuthLayout() {
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

export default AuthLayout;
