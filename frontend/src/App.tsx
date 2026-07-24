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
import Instructor from "./pages/Instructor";
import CreateCourse from "./pages/CreateCourse";
import Connect from "./pages/Connect";

function App() {
  return (
    <div className="min-h-screen w-full font-lora">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route element={<Courses />} path="/courses" />
          <Route element={<CreateCourse />} path="/create-course" />
          <Route element={<Course />} path="/course/:courseId" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<Earnings />} path="/earnings" />
          <Route element={<Explore />} path="/explore" />
          <Route element={<Home />} path="/home" />
          <Route element={<MyCourses />} path="/my-courses" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<Reviews />} path="/reviews" />
          <Route element={<Connect />} path="/connect" />
          <Route element={<Instructor />} path="/instructor/:instructorId" />
          <Route element={<Settings />} path="/settings" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
