export interface User {
  guid: UniqueId;
  login: string;
  token?: string;
  name?: string;
  surname?: string;
  teamId?: UniqueId;
}
