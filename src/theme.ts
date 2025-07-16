import { extendTheme, type ThemeConfig } from "@chakra-ui/react";


/** Configures Chakra to use dark mode by default on first load.*/
const config: ThemeConfig = {
  initialColorMode: "dark"
};

/** Creates a custom theme with the above color mode config. */
const theme = extendTheme({config});

export default theme;
