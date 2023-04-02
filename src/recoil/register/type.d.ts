export interface CommonStep {
  nickname: string;
  email: string;
  instagram_nickname: string;
  role: string;
}

export interface TeacherStep1 {
  is_setter: boolean;
  certificate_list: TeacherCertificate[];
  career_list: Career[];
  contest_list: TeacherContest[];
}

export interface TeacherContest {
  year: number;
  title: string;
  name: string;
}

export interface TeacherCertificate {
  acquisition_date: string;
  rate: number;
  name: string;
}

export interface Career {
  start_date: string;
  end_date: string;
  name: string;
}
