import { Career, Certificate, Contest } from '@/types/common/lector';
import { Center } from '@/types/common/center';
import { Profile } from '@/types/common/profile';

export interface RegisterResponse {
  is_proofed: boolean;
  profile: Profile;
}

export interface LectorRegister {
  profile: Profile;
  is_setter: boolean;
  constest_list?: Contest[];
  certificate_list?: Certificate[];
  career_list?: Career[];
  proof_list?: string[];
}

export interface ManagerRegister extends Center {
  profile: Profile;
  proof_list: string[];
}
