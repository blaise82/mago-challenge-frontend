import { createMuiTheme } from "@material-ui/core/styles";
// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    fontFamily: '"Trebuchet MS", sans-serif',
  },
  palette: {
    primary: {
      main: "#18A2B2",
    },
    secondary: {
      main: "#F50057",
    },
    background: {
      default: "#fff",
    },
  },
});
export default theme;
