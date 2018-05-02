export class User {
  id: number;
  username: String;
  password: String;
  firstname: String;
  lastname: String;
  email: String;
  enabled: Boolean;
  lastPasswordResetDate: Date;
  authorities: any[];
}
