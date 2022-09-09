import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Tooltip,
} from "@material-ui/core";
import { NavLink, useLocation } from "react-router-dom";
import { memo } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useTheme } from "./style";

const Menu = (props) => {
  const { isOpen, list } = props;
  const classes = useTheme();
  const location = useLocation();
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: isOpen,
        [classes.drawerClose]: !isOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen,
        }),
      }}
    >
      <Toolbar />

      <List className={classes.listMenuItem}>
        {list?.title?.map((text, index) => (
          <Tooltip
            key={index}
            arrow
            enterDelay={0}
            placement="left"
            PopperProps={{
              popperOptions: {
                modifiers: {
                  offset: {
                    enabled: true,
                    offset: "-23px, -85px",
                  },
                },
              },
            }}
            title={!isOpen ? text : ""}
          >
            <NavLink
              key={index}
              exact
              className={classes.navLink}
              to={list.pathName[index]}
              activeClassName={
                location.pathname !== list.pathName[index]
                  ? null
                  : classes.navLinkActive
              }
            >
              <ListItem
                button
                key={index}
                component="div"
                className={classes.listItem}
              >
                {list.icon[index]}
                <ListItemText
                  primary={text}
                  classes={{ primary: classes.listItemText }}
                />
              </ListItem>
            </NavLink>
          </Tooltip>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};
Menu.propsTypes = {
  open: PropTypes.bool.isRequired,
  list: PropTypes.object.isRequired,
};

export default memo(Menu);
