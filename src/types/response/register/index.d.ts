export interface ContestListResponse {
  year: number;
  title: string;
  name: string;
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
