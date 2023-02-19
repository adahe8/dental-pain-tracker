import { extendTheme } from "@chakra-ui/theme-utils";

const colors = {
  blue: {
    50: "#0583D2",
  },
  green: {
    50: "#11BD2C",
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
