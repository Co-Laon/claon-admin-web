import { Profile } from '@/types/common/profile';

export interface SignInRequest {
  id_token: string;
}

export interface SignInResponse {
  access_token: string;
  refresh_token: string;
  is_signed_up: boolean;
  profile?: Profile;
}
