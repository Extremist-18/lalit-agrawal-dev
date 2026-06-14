import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Cursor from "./components/Cursor/Cursor";

function Layout() {
  return (
    <>
      <Navbar />
      <Cursor />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;