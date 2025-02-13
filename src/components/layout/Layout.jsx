import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

function Layout() {
  return (
    <div>
      <Navbar />
      Layout
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
