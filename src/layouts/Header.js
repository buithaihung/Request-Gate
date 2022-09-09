import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Avatar,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Divider,
  Badge,
} from "@material-ui/core";
import {Menu, Close} from "@material-ui/icons";
import logo from "../assets/img/logo.png";
import { useTheme } from "./style";
import Button from "../components/Button";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useState } from "react";
import Title from "../components/Title";

const Header = (props) => {
  const { handleClick, currentUser, isMenuOpen } = props;
  const classes = useTheme();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClickInfo = () => {
    setIsOpen((pre) => !pre);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const signOut = () => {
    sessionStorage.clear();
    localStorage.clear();
    window.location.reload();
  };

  const changePassword = () => {
    history.push("/change-password");
  };

  const handleReturnHome = () => {
    history.push("/");
  };

  return (
    <AppBar color="inherit" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Box>
          <IconButton onClick={handleClick} color="inherit">
            {isMenuOpen ? <Close /> : <Menu />}
          </IconButton>
          <Button
            variant="text"
            onClick={handleReturnHome}
            title={<img className={classes.logo__img} src={logo} alt="logo" />}
          />
        </Box>
        <Box className={classes.boxRight}>
          <Button
            title={isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            variant="text"
            aria-controls={isOpen && "menu-list-grow"}
            aria-haspopup="true"
            onClick={handleClickInfo}
            startIcon={
              <Badge color="primary" variant="dot">
                <Avatar className={classes.size} alt="avatar">
                  {currentUser?.name?.charAt(0)}
                </Avatar>
              </Badge>
            }
          />
          <Popper
            className={classes.popper}
            open={isOpen}
            transition
            disablePortal
          >
            {({ TransitionProps }) => (
              <Grow {...TransitionProps}>
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={isOpen} id="menu-list-grow">
                      <MenuItem className={classes.item} disableRipple>
                        <Title
                          title={`Hello, ${currentUser?.name}`}
                          variant="subtitle2"
                        />
                      </MenuItem>
                      <Divider />
                      <MenuItem onClick={changePassword}>
                        <VpnKeyIcon className={classes.iconItem} />
                        <Title title="Change Password" />
                      </MenuItem>
                      <Divider />
                      <MenuItem onClick={signOut} className={classes.item}>
                        <ExitToAppIcon className={classes.iconItem} />
                        <Title title="Sign Out" />
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
  currentUser: PropTypes.object,
  isMenuOpen: PropTypes.bool
};
export default Header;
