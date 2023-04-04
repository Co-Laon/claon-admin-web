export interface ProfileRequest {
  profile_image: string;
  nickname: string;
  email: string;
  instagram_nickname: string;
  role: string;
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
  profile_image: Profile;
  is_setter: boolean;
  contest_list: ContestList[];
  certificate_list: CertificateList[];
  career_list: CareerList[];
  proof_list: string[];
}
