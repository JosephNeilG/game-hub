import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

/** Navbar conaining logo, search bar, and color mode toggle. */
const NavBar = () => {
  return (
    <HStack paddingX={5} paddingY={2}>
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
