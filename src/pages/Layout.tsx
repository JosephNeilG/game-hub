import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

/** Layout that always displays the NavBar, and dynamicaly shows pages.*/
const Layout = () => {
  return (
    <>
      {/* Always show navbar at top */}
      <NavBar />
      {/* Dynamic placeholder were route-specific pages get rendered */}
      <Outlet />
    </>
  );
};

export default Layout;
