import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default AdminLayout;
