import {
  CenterFee,
  CenterHold,
  CenterOperatingTime,
  CenterWall,
} from '../../request/register';

export interface ContestListResponse {
  year: number;
  title: string;
  name: string;
}
export interface ProfileResponse {
  profile_image: string;
  nickname: string;
  email: string;
  instagram_nickname: string;
  role: string;
}

export interface CertificateListResponse {
  acquisition_date: string;
  rate: number;
  name: string;
}

export interface CareerListResponse {
  start_date: string;
  end_date: string;
  name: string;
}

export interface LectorRegisterResponse {
  lector_id: string;
  is_setter: boolean;
  total_experience: number;
  contest_list: ContestListResponse[];
  certificate_list: CertificateListResponse[];
  career_list: CareerListResponse[];
  approved: boolean;
}
export interface FileResponse {
  file_url: string;
}

export interface IsDuplicatedResponse {
  is_duplicated: boolean;
}
export interface CenterAuthResponse {
  center_id: string;
  profile_image: string;
  name: string;
  address: string;
  detail_address: string;
  tel: string;
  web_url: string;
  instagram_name: string;
  youtube_code: string;
  image_list: string[];
  utility_list: string[];
  fee_image_list: string[];
  operating_time_list: CenterOperatingTime[];
  fee_list: CenterFee[];
  hold_list: CenterHold[];
  wall_list: CenterWall[];
  approved: boolean;
}

export interface UploadFileResponse {
  file_url: string;
}
