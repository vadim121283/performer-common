import { Profile } from './Profile';

export interface User {
  guid: UniqueId;
  login: string;
  token?: string;
  profile?: Profile;
}
