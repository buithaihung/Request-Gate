import {
  ASSIGNEE,
  CATEGORY,
  CLOSE,
  CONTENT,
  DUE_DATE,
  HIGHT,
  IN_PROGRESS,
  LOW,
  NAME,
  NORMAL,
  OPEN,
  PRIORITY,
  STATUS,
  statusRequest,
} from "../constants/request";
export const reformatDate = (dateStr) => {
  let dArr = dateStr.split("-");
  return dArr[2] + "/" + dArr[1] + "/" + dArr[0].substring(0);
};

export const checkStatusRequest = (id) => {
  return statusRequest.find((status) => status.id === id).name;
};

export const setPathAndParams = (path, params) => {
  return { path: path, params: { ...params } };
};

export const hiddenString = (string, number) => {
  return string?.length > number ? `${string.substring(0, number)}...` : string;
};

export const returnStatusName = (code) => {
  switch (parseInt(code)) {
    case OPEN:
      return "Open";

    case IN_PROGRESS:
      return "In Progress";

    case CLOSE:
      return "Close";

    default:
      return "";
  }
};
export const returnPriorityName = (code) => {
  switch (parseInt(code)) {
    case LOW:
      return "Low";

    case NORMAL:
      return "Normal";

    case HIGHT:
      return "Hight";

    default:
      return "";
  }
};

export const returnFieldHistory = (field, oldValue, newValue) => {
  switch (field) {
    case NAME:
      return oldValue
        ? `Name: ${returnHistoryUpdate(oldValue, newValue)}`
        : "Name";

    case STATUS:
      return oldValue
        ? `Status: ${returnHistoryUpdate(
            returnStatusName(oldValue),
            returnStatusName(newValue)
          )}`
        : "Status";

    case DUE_DATE:
      return oldValue
        ? `Due Date: ${reformatDate(oldValue)} ➔ ${reformatDate(newValue)}`
        : "Due Date";

    case PRIORITY:
      return oldValue
        ? `Priority: ${returnHistoryUpdate(
            returnPriorityName(oldValue),
            returnPriorityName(newValue)
          )}`
        : "Priority";

    case CONTENT:
      return oldValue
        ? `Content: ${returnHistoryUpdate(oldValue, newValue)}`
        : "Content";

    case ASSIGNEE:
      return oldValue
        ? `Assignee: ${returnHistoryUpdate(oldValue, newValue)}`
        : "Assignee";

    case CATEGORY:
      return oldValue
        ? `Category: ${returnHistoryUpdate(oldValue, newValue)}`
        : "Category";

    default:
      return "";
  }
};

export const returnHistoryUpdate = (oldValue, newValue) =>
  `${oldValue} ➔ ${newValue}`;

export const setOder = (page, index) =>
  page ? (parseInt(page) - 1) * 10 + index + 1 : "";

export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};
