import { Fee, Hold, OperationTime, Wall } from '@/features/common/types/center';
import { Profile } from '@features/common/types/profile';

export interface ManagerRegister {
  profile: Profile;
  profile_image: string;
  name: string;
  address: string;
  detail_address?: string;
  tel: string;
  web_url?: string;
  instagram_name?: 'string';
  youtube_code?: 'string';
  image_list: string[];
  utility_list: string[];
  fee_image_list: string[];
  fee_list: Fee[];
  operation_time_list: OperationTime[];
  hold_list: Hold[];
  wall_list: Wall[];
  proof_list: string[];
}
