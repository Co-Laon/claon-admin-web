import { Career, Certificate, Contest } from '@/features/common/types/lector';
import { Center } from '@/features/common/types/center';
import { Profile } from '@/features/common/types/profile';

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
