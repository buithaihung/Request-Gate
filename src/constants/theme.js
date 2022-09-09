import { createMuiTheme } from "@material-ui/core";
import { grey, red } from "@material-ui/core/colors";

export const XS = 0;
export const SM = 600;
export const MD = 960;
export const LG = 1280;
export const XL = 1920;

const theme = createMuiTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: XS,
      sm: SM,
      md: MD,
      lg: LG,
      xl: XL,
    },
  },
  palette: {
    primary: {
      main: "#4caf93",
      light: "#81c7b3",
      dark: "#357a66",
      contrastText: "#fff",
    },
    secondary: {
      main: red[500],
      light: red[300],
      dark: red[700],
    },
    text: {
      secondary: grey[700],
    },
  },
  shape: {
    borderRadius: 7,
  },
  spacing: 4,
  typography: {
    fontFamily: "Roboto",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    fontSize: 16,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*::-webkit-scrollbar": {
          width: 7,
        },
        "*::-webkit-scrollbar-track": {
          backgroundColor: "#ddd",
          borderTopRightRadius: 7,
          borderBottomRightRadius: 7,
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#666",
          borderTopRightRadius: 7,
          borderBottomRightRadius: 7,
        },
      },
    },
  },
});
export default theme;
