import { Profile } from '../common/profile';

export interface SignInRequest {
  id_token: string;
}

export interface SignInResponse {
  access_token: string;
  refresh_key: string;
  is_signed_up: boolean;
  profile?: Profile;
}
