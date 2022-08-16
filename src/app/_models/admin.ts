import { Role } from './role';
export class Admin {
  id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: Role.Admin;
  token: string;
}
