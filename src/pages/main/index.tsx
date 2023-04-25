import Header from '@/components/common/header/Header';
import { LNBMenuDepth2 } from '@/types/common';
import { useState } from 'react';

const LNBMenu = [
  {
    name: '암장 관리',
    icon: 'CenterManage',
    depth2: ['암장 정보 관리', '게시글', '리뷰 관리'],
  },
  {
    name: '회원 관리',
    icon: 'CrewManage',
    depth2: ['회원 정보 관리', '회원 등급 관리', '회원 포인트 관리'],
  },
  {
    name: '스케줄 관리',
    icon: 'ScheduleManage',
    depth2: ['스케줄 관리', '스케줄 등록'],
  },
  {
    name: '매칭 관리',
    icon: 'MatchingManage',
    depth2: ['매칭 관리', '매칭 등록'],
  },
];

const getLnBMenu = (depth2Name: string) => {
  const depth1 = LNBMenu.find((item) => item.depth2.includes(depth2Name));
  return depth1;
};

export default function MainPage() {
  const [selectedMenu, setSelectedMenu] = useState<LNBMenuDepth2>({
    depth1Icon: 'Center',
    depth1Name: '암장 관리',
    depth2Name: '암장 정보 관리',
  });

  return (
    <Header
      selectedMenu={selectedMenu}
      profileAlarmCount={1}
      messageAlarmCount={1}
    />
  );
}
