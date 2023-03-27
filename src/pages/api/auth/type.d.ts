import { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';

export interface CallbackToken extends JWT {
  accessToken?: string;
  idToken?: string;
}
export interface SessionWithToken extends Session {
  accessToken?: string;
  idToken?: string;
}
