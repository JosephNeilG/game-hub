import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

/** Layout that always displays the NavBar, and dynamicaly shows pages.*/
const Layout = () => {
  return (
    <>
      {/* Always show navbar at top */}
      <NavBar />
      <Box padding={5}>
        {/* Dynamic placeholder were route-specific pages get rendered */}
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
