import { makeStyles } from "@material-ui/core";
const WidthOfMenu = 240;
export const useTheme = makeStyles(
  (theme) => ({
    /**
     * style Menu.js
     */
    drawer: {
      width: WidthOfMenu,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: WidthOfMenu,
      backgroundColor: theme.palette.primary.main,
      borderRight: "unset",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      backgroundColor: theme.palette.primary.main,
      borderRight: "unset",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflow: "hidden",
      width: theme.spacing(15) + 1,
      [theme.breakpoints.up("xs")]: {
        width: theme.spacing(18) + 1,
      },
    },
    navLink: {
      textDecoration: "none",
      "& > *": {
        textDecoration: "none",
        color: "#fff",
      },
      "&>*:hover": {
        textDecoration: "none",
        color: theme.palette.primary.main,
        backgroundColor: "#fff",
      },
      "& > * > *:hover": {
        color: theme.palette.primary.main,
      },
    },

    navLinkActive: {
      backgroundColor: "#fff",
      textDecoration: "none",
      color: theme.palette.primary.main,
      "& > *": {
        backgroundColor: "#fff",
        color: theme.palette.primary.main,
        textDecoration: "none",
      },
      "& > * > *": {
        color: theme.palette.primary.main,
      },
      "&>*:hover": {
        backgroundColor: "#fff",
        color: theme.palette.primary.contrastText,
        textDecoration: "none",
      },
      "& > * > *:hover": {
        color: theme.palette.primary.main,
      },
    },
    listMenuItem: {
      padding: "unset",
    },

    listItem: {
      paddingLeft: theme.spacing(5.5),
    },
    listItemText: {
      paddingLeft: theme.spacing(7.5),
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize,
      fontWeight: theme.typography.fontWeightMedium,
    },
    /**
     * style Header.js
     */
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    toolBar: {
      width: "100%",
      justifyContent: "space-between",
    },
    logo__img: {
      objectFit: "cover",
      display: "block",
      maxWidth: "100%",
    },
    size: {
      width: theme.spacing(9),
      height: theme.spacing(9),
    },
    boxRight: {
      position: "relative",
    },
    popper: {
      position: "absolute !important",
      top: "50px !important",
      left: "-105px !important",
      border: "1px solid rgba(0, 0, 0, .125)",
      borderRadius: theme.shape.borderRadius,
      boxShadow: "0 7px 30px -10px rgba(150,170,180,0.5)",
    },
    iconItem: {
      fontSize: theme.spacing(5),
      marginRight: theme.spacing(2),
    },
    /**
     * style Content.js
     */
    content: {
      flexGrow: 1,
    },
    hidden: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    /**
     * style Layout.js
     */
    root: {
      display: "flex",
      height: "100vh",
    },
  }),
  { index: 1 }
);
