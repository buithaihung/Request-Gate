import {
  AccountCircle,
  Home,
  MeetingRoomRounded,
  Add,
  CategoryRounded,
} from "@material-ui/icons";
import { ADMIN, MANAGER, USER } from "./listRole";

export const listMenuItem = (id) => {
  switch (id) {
    case ADMIN:
      return {
        icon: [
          <Home />,
          <Add />,
          <AccountCircle />,
          <MeetingRoomRounded />,
          <CategoryRounded />,
        ],
        title: ["Home", "Add request", "User", "Department", "Category"],
        pathName: ["/", "/create-request", "/user", "/department", "/category"],
      };

    case USER:
      return {
        icon: [<Home />, <Add />],
        title: ["Home", "Add request"],
        pathName: ["/", "/create-request"],
      };

    case MANAGER:
      return {
        icon: [<Home />, <Add />],
        title: ["Home", "Add request"],
        pathName: ["/", "/create-request"],
      };

    default:
      return {};
  }
};
