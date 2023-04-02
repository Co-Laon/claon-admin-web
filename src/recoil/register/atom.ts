import { atom } from 'recoil';
import { CommonStep, TeacherStep1 } from './type';

export const commonStepState = atom<CommonStep>({
  key: 'commonStepState',
  default: {
    nickname: '',
    email: '',
    instagram_nickname: '',
    role: '',
  },
});

export const profileState = atom<File | undefined>({
  key: 'profileState',
  default: undefined,
});

export const teacherSte1State = atom<TeacherStep1>({
  key: 'teacherStep1State',
  default: {
    is_setter: false,
    contest_list: [],
    certificate_list: [],
    career_list: [],
  },
});
