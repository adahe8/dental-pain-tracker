import { extendTheme } from "@chakra-ui/theme-utils";

const colors = {
  blue: {
    50: "#0076CC",
  },
  black: {
    50: "#333333",
  },
  red: {
    50: "#C70000",
  },
};

// const fonts = {
//   body: `'Inter', sans-serif`,
// };

const customTheme = extendTheme({
  colors,
});

export default customTheme;
