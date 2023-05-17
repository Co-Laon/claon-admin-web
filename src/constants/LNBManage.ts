import { LNBMenu } from '@/types/layout';

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
