export const listRole = {
  user: 2,
  admin: 1,
  manager: 3,
};

export const ADMIN = 1;
export const USER = 2;
export const MANAGER = 3;

export const role = (id) => {
  switch (id) {
    case 1:
      return 'Admin'
    case 2:
      return 'User'
    case 3:
      return 'Manage'
    default:
      return 'User'
  }
}

export const listStatus = {
  inActive: "In Active",
  active: "Active",
};

export const listDeparment = {
  hb1: 'HB1',
  hb2: 'HB2',
  hb3: 'HB3',
  hb4: 'HB4',
};

export const statusCategory = {
  disabled: 'Disable',
  enable: 'Enable',
}

export const listRoleId = {
  admin: 1,
  user: 2,
  manage: 3,
};
