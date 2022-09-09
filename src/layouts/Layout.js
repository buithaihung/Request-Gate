import { useEffect, useMemo } from "react";
import { listMenuItem } from "../constants/listMenuItem";
import Content from "./Content";
import Header from "./Header";
import Menu from "./Menu";
import { useTheme } from "./style";
import PropTypes from "prop-types";
import { getWindowDimensions } from "../helper";
import { LG } from "../constants/theme";


const Layout = (props) => {
  const {
    children,
    currentUser,
    statusSideBar,
    setStatusSideBarStore,
    setSizeScreenDispatch,
    sizeScreen,
  } = props;
  const classes = useTheme();
  /**
   * CALL_API
   */


  const handleClick = () => {
    localStorage.setItem("statusSideBar", !statusSideBar);
  };

  const list = useMemo(() => {
    return listMenuItem(currentUser?.role_id);
  }, [currentUser.role_id]);
  /**
   * SCREEN
   */
  useEffect(() => {
    function handleResize() {
      localStorage.setItem("statusSideBar", false);
      setSizeScreenDispatch(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setSizeScreenDispatch]);

  useEffect(() => {
    sizeScreen?.width < LG &&
      setStatusSideBarStore(false);
  }, [setStatusSideBarStore, sizeScreen]);

  return (
    <div className={classes.root}>
      <Header handleClick={handleClick} currentUser={currentUser} isMenuOpen={statusSideBar}/>
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
  fetchCurrentUser: PropTypes.func,
  setSizeScreenDispatch: PropTypes.func,
  sizeScreen: PropTypes.object,
};

export default Layout;
