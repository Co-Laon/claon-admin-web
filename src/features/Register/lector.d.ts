import { Career, Certificate, Contest } from '@/features/common/types/lector';
import { Profile } from '@/features/common/types/profile';

export interface LectorRegister {
  profile: Profile;
  is_setter: boolean;
  constest_list?: Contest[];
  certificate_list?: Certificate[];
  career_list?: Career[];
  proof_list?: string[];
}
