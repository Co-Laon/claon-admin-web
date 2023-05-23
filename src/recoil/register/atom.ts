import { atom } from 'recoil';
import { CommonStep, TeacherStep1 } from './type';

export const commonStepState = atom<CommonStep>({
  key: 'commonStepState',
  default: {
    profile_image: '',
    nickname: '',
    email: '',
    instagram_nickname: '',
    role: 'pending',
  },
});

export const profileState = atom<File | undefined>({
  key: 'profileState',
  default: undefined,
});

export const teacherStep1State = atom<TeacherStep1>({
  key: 'teacherStep1State',
  default: {
    is_setter: false,
    contest_list: [],
    certificate_list: [],
    career_list: [],
  },
});

export const proofState = atom<File[]>({
  key: 'proofState',
  default: [],
});
