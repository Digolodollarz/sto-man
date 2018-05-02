export const Roles = {
  ROLE_USER: 1,
  ROLE_SUPERVISOR: 2,
  ROLE_ADMIN: 3
};

export const Authorities = [
  {id: Roles.ROLE_USER, name: 'User'},
  {id: Roles.ROLE_SUPERVISOR, name: 'Supervisor'},
  {id: Roles.ROLE_ADMIN, name: 'Admin'},
];
