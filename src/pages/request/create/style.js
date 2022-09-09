import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export const useTheme = makeStyles((theme) => ({
  root: {
    height: `calc(100% - 64px)`,
    backgroundColor: "transparent",
    [theme.breakpoints.down("lg")]: {
      height: "auto",
    },
  },
  container: {
    border: "1px solid rgba(0, 0, 0, .125)",
    borderRadius: theme.shape.borderRadius,
    boxShadow: "0 7px 30px -10px rgba(150,170,180,.7)",
  },
  containerInfo: {
    border: "1px solid rgba(0, 0, 0, .125)",
    borderRadius: theme.shape.borderRadius,
  },
  box__info: {
    height: "50%",
  },
  info: {
    height: theme.spacing(30),
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  inputArea: {
    position: "relative",
  },
  input: {
    display: "inline-block",
    width: "100%",
    height: "100%",
  },
  error: {
    position: "absolute",
    bottom: theme.spacing(-5),
    left: "0",
    color: red[500],
  },
  title: {
    display: "inline-block",
    width: "40%",
    height: "100%",
  },
  box: {
    width: "100%",
  },
  boxSelect: {
    width: "60%",
    position: "relative",
  },
  btn: {
    textTransform: "capitalize",
    width: theme.spacing(25)
  },
}));
