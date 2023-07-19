import { LNBMenu } from '../types/layout';

export enum CenterUploadPurpose {
  PROFILE = 'profile',
  IMAGE = 'image',
  FEE = 'fee',
  PROOF = 'proof',
}

export const LNBManagerMenu: LNBMenu = [
  {
    name: '암장 관리',
    icon: 'CenterManage',
    url: '',
    children: [
      { name: '암장 정보 관리', url: '' },
      { name: '게시글', url: '' },
      { name: '리뷰 관리', url: '' },
    ],
  },
  {
    name: '회원 관리',
    icon: 'CrewManage',
    url: '',
    children: [
      { name: '회원 정보', url: '' },
      { name: '회원권 관리', url: '' },
    ],
  },
  {
    name: '스케줄 관리',
    icon: 'ScheduleManage',
    url: '',
    children: [
      { name: '스케줄 관리', url: '' },
      { name: '스케줄 등록', url: '' },
    ],
  },
  {
    name: '매칭',
    icon: 'MatchingManage',
    url: '',
    children: [
      { name: '강사 채용', url: '' },
      { name: '세터 섭외', url: '' },
      { name: '매칭 관리', url: '' },
    ],
  },
  {
    name: '설정',
    icon: 'SettingManage',
    url: '',
    children: [
      { name: '암장 관리 설정', url: '' },
      { name: '회원 관리 설정', url: '' },
      { name: '스케줄 관리 설정', url: '' },
      { name: '매칭 관리 설정', url: '' },
    ],
  },
];

export const LNBInstructorMenu: LNBMenu = [
  {
    name: '회원 관리',
    icon: 'CrewManage',
    url: '',
    children: [
      { name: '회원 정보', url: '' },
      { name: '회원권 관리', url: '' },
    ],
  },
  {
    name: '스케줄 관리',
    icon: 'ScheduleManage',
    url: '',
    children: [
      { name: '스케줄 관리', url: '' },
      { name: '스케줄 등록', url: '' },
    ],
  },
  {
    name: '매칭',
    icon: 'MatchingManage',
    url: '',
    children: [
      { name: '암장 조회', url: '' },
      { name: '매칭 관리', url: '' },
    ],
  },
  {
    name: '설정',
    icon: 'SettingManage',
    url: '',
    children: [
      { name: '회원 관리 설정', url: '' },
      { name: '스케줄 관리 설정', url: '' },
      { name: '매칭 관리 설정', url: '' },
    ],
  },
];

export const utilityList = [
  '유료주차',
  '무료주차',
  '와이파이',
  '사물함',
  '샤워실',
  '탈의실',
  '휴게실',
  '운동복',
  '수건',
  '스트레칭 존',
  '트레이닝 존',
];

export const dayOfWeekTable: { [key: string]: number } = {
  월: 0,
  화: 1,
  수: 2,
  목: 3,
  금: 4,
  토: 5,
  일: 6,
  공휴일: 7,
};
