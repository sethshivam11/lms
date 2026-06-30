import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthLayout from "./layouts/AuthLayout";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import Earnings from "./pages/Earnings";
import Explore from "./pages/Explore";
import MyCourses from "./pages/MyCourses";
import Profile from "./pages/Profile";
import Reviews from "./pages/Reviews";
import Settings from "./pages/Settings";
import "./App.css";
import Course from "./pages/Course";

function App() {
  return (
    <div className="min-h-screen w-full font-lora">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route element={<Courses />} path="/courses" />
          <Route element={<Course />} path="/course/:courseId" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<Earnings />} path="/earnings" />
          <Route element={<Explore />} path="/explore" />
          <Route element={<Home />} path="/home" />
          <Route element={<MyCourses />} path="/my-courses" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<Reviews />} path="/reviews" />
          <Route element={<Settings />} path="/settings" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
