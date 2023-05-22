export interface ProfileRequest {
  profile_image: string;
  nickname: string;
  email: string;
  instagram_nickname: string;
  role: 'pending' | 'admin' | 'user' | 'lector' | 'center_admin';
}
export interface ContestListRequest {
  year: number;
  title: string;
  name: string;
}
export interface CertificateListRequest {
  acquisition_date: string;
  rate: number;
  name: string;
}
export interface CareerListRequest {
  start_date: string;
  end_date: string;
  name: string;
}
export interface LectorRegisterRequest {
  profile: ProfileRequest;
  is_setter: boolean;
  contest_list: ContestList[];
  certificate_list: CertificateList[];
  career_list: CareerList[];
  proof_list: string[];
}

export interface CenterOperatingTime {
  day_of_week: string;
  start_time: string;
  end_time: string;
}

export interface CenterFee {
  name: string;
  price: number;
  count: number;
}

export interface CenterHold {
  difficulty: string;
  name: string;
  is_color: boolean;
}

export interface CenterWall {
  wall_type: string;
  name: string;
}
export interface CenterAuthRequest {
  profile: {
    profile_image: string;
    nickname: string;
    email: string;
    instagram_nickname: string;
    role: Role;
  };
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
  proof_list: string[];
}

// --------enum--------
export interface Role {
  description: string;
}

export enum CenterUploadPurpose {
  PROFILE = 'profile',
  IMAGE = 'image',
  FEE = 'fee',
  PROOF = 'proof',
}
