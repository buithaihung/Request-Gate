import { useEffect, useMemo } from "react";
import { listMenuItem } from "../constants/listMenuItem";
import Content from "./Content";
import Header from "./Header";
import Menu from "./Menu";
import { useTheme } from "./style";
import PropTypes from "prop-types";
// import { setSizeScreen, setStatusSideBar } from "../redux/actions/info";
// import { getCurrentUser } from "../redux/actions/user";
// import { connect } from "react-redux";
import { getWindowDimensions } from "../helper";
import { LG } from "../constants/theme";

const TRUE = "true";
const statusSideBarLocal = localStorage.getItem("statusSideBar");

const Layout = (props) => {
  const {
    children,
    currentUser,
    // fetchCurrentUser,
    statusSideBar,
    // setStatusSideBarStore,
    // setSizeScreenDispatch,
    sizeScreen,
  } = props;
  const classes = useTheme();
  /**
   * CALL_API
   */
  // useEffect(() => {
  //   if (Object.keys(currentUser).length === 0) {
  //     // setSizeScreenDispatch(getWindowDimensions());
  //     // fetchCurrentUser();
  //     statusSideBarLocal !== null &&
  //       setStatusSideBarStore(statusSideBarLocal === TRUE ? true : false);
  //   }
  // }, [
  //   // fetchCurrentUser,
  //   currentUser,
  //   // setStatusSideBarStore,
  //   // setSizeScreenDispatch,
  // ]);

  const handleClick = () => {
    // setStatusSideBarStore(!statusSideBar);
    localStorage.setItem("statusSideBar", !statusSideBar);
  };

  const list = useMemo(() => {
    return listMenuItem(currentUser?.role_id);
  }, [currentUser.role_id]);
  /**
   * SCREEN
   */
  useEffect(
    () => {
      function handleResize() {
        localStorage.setItem("statusSideBar", false);
        // setSizeScreenDispatch(getWindowDimensions());
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    },
    [
      /*setSizeScreenDispatch*/
    ]
  );

  // useEffect(() => {
  //   sizeScreen?.width < LG && setStatusSideBarStore(false);
  // }, [setStatusSideBarStore, sizeScreen]);

  return (
    <div className={classes.root}>
      <Header
        handleClick={handleClick}
        currentUser={currentUser}
        isMenuOpen={statusSideBar}
      />
      <Menu isOpen={statusSideBar} list={list} />
      <Content>{children}</Content>
    </div>
  );
};

Layout.defaultProps = {
  currentUser: {},
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  currentUser: PropTypes.object,
  // fetchCurrentUser: PropTypes.func,
  // setSizeScreenDispatch: PropTypes.func,
  sizeScreen: PropTypes.object,
};

const mapStateToProps = (store) => {
  return {
    currentUser: store.user.currentUser,
    statusSideBar: store.info.statusSideBar,
    sizeScreen: store.info.sizeScreen,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchCurrentUser: () => {
//       dispatch(getCurrentUser());
//     },
//     setStatusSideBarStore: (data) => {
//       dispatch(setStatusSideBar(data));
//     },
//     setSizeScreenDispatch: (data) => {
//       dispatch(setSizeScreen(data));
//     },
//   };
// };

export default Layout;
