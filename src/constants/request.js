export const columns = [
  { id: "name", label: "Name", width: "20%" },
  { id: "content", label: "Content", width: "18%" },
  {
    id: "author",
    label: "Author",
    width: "15%",
  },
  {
    id: "date",
    label: "Due date",
    width: "10%",
  },
  {
    id: "category",
    label: "Category",
    width: "10%",
  },
  {
    id: "assignee",
    label: "Assignee",
    width: "15%",
  },
  {
    id: "status",
    label: "Status",
    width: "12%",
    align: "left",
  },
];
export const statusRequest = [
  { id: 1, name: "Open" },
  { id: 2, name: "In Progress" },
  { id: 3, name: "Close" },
];

export const YESTERDAY = new Date(Date.now() - 86400000);
export const MAX_OF_NAME = 255;
export const MAX_OF_CONTENT = 500;
export const MIN_OF_NAME = 10;
export const MIN_OF_CONTENT = 10;
export const COMMENT = "comment";
export const CREATE = "create";
export const UPDATE = "update";
export const DELETE = "delete";

export const NAME = "name";
export const CONTENT = "content";
export const CATEGORY = "category";
export const ASSIGNEE = "assigneeTo";
export const PRIORITY = "level";
export const STATUS = "status_request";
export const DUE_DATE = "due_date";

export const OPEN = 1;
export const IN_PROGRESS = 2;
export const CLOSE = 3;
export const LOW = 1;
export const NORMAL = 2;
export const HIGHT = 3;

export const levelOfRequest = [
  { id: LOW, name: "Low" },
  { id: NORMAL, name: "Normal" },
  { id: HIGHT, name: "Hight" },
];
