import { LNBMenu } from '@/types/common.d';

export const LNBManagerMenu: LNBMenu = [
  {
    name: '암장 관리',
    icon: 'CenterManage',
    children: [
      { name: '암장 정보 관리', url: '' },
      { name: '게시글', url: '' },
      { name: '리뷰 관리', url: '' },
    ],
    isOpened: false,
  },
  {
    name: '회원 관리',
    icon: 'CrewManage',
    children: [
      { name: '회원 정보 관리', url: '' },
      { name: '회원 등급 관리', url: '' },
      { name: '회원 포인트 관리', url: '' },
    ],
    isOpened: false,
  },
  {
    name: '스케줄 관리',
    icon: 'ScheduleManage',
    children: [
      { name: '스케줄 관리', url: '' },
      { name: '스케줄 등록', url: '' },
    ],
    isOpened: false,
  },
  {
    name: '매칭 관리',
    icon: 'MatchingManage',
    children: [
      { name: '매칭 관리', url: '' },
      { name: '매칭 등록', url: '' },
    ],
    isOpened: false,
  },
  {
    name: '설정',
    icon: 'SettingManage',
    children: [
      { name: '암장 관리 설정', url: '' },
      { name: '회원 관리 설정', url: '' },
      { name: '스케줄 관리 설정', url: '' },
      { name: '매칭 관리 설정', url: '' },
    ],
    isOpened: false,
  },
];

export const LNBInstructorMenu: LNBMenu = [
  {
    name: '회원 관리',
    icon: 'CrewManage',
    children: [
      { name: '회원 정보 관리', url: '' },
      { name: '회원 등급 관리', url: '' },
      { name: '회원 포인트 관리', url: '' },
    ],
    isOpened: false,
  },
  {
    name: '스케줄 관리',
    icon: 'ScheduleManage',
    children: [
      { name: '스케줄 관리', url: '' },
      { name: '스케줄 등록', url: '' },
    ],
    isOpened: false,
  },
  {
    name: '매칭 관리',
    icon: 'MatchingManage',
    children: [
      { name: '매칭 관리', url: '' },
      { name: '매칭 등록', url: '' },
    ],
    isOpened: false,
  },
  {
    name: '설정',
    icon: 'SettingManage',
    children: [
      { name: '암장 관리 설정', url: '' },
      { name: '회원 관리 설정', url: '' },
      { name: '스케줄 관리 설정', url: '' },
      { name: '매칭 관리 설정', url: '' },
    ],
    isOpened: false,
  },
];
