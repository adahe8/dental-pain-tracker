import { extendTheme } from "@chakra-ui/theme-utils";

const colors = {
  blue: {
    50: "#0583D2",
  },
  green: {
    50: "#659F8A",
  },
  red: {
    50: "#C70000",
  },
  bblue: {
    50: "#CCE1EE"
  }
};

// const fonts = {
//   body: `'Inter', sans-serif`,
// };

const customTheme = extendTheme({
  colors,
});

export default customTheme;
