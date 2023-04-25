import styled from '@emotion/styled';
import React from 'react';
import ProfileSkeleton from '@/assets/ProfileSkeleton';
import MessageIcon from '@/assets/MessageIcon';
import MenuIcon from '@/components/common/LNB/MenuIcon';
import { LNBMenuDepth2 } from '@/types/common';
import AlarmedIcon from '../AlarmedIcon/AlarmedIcon';
import HeaderDepth from './HeaderDepth';

const StyledHeaderWrapper = styled.div`
  display: flex;
  height: 66px;
  align-items: center;
  justify-content: space-between;
`;

const StyledHeaderDepthWrapper = styled.div`
  display: flex;
  margin-left: 25px;
  align-items: center;
`;

const StyledAlarmWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-right: 15px;
`;

interface HeaderDepthProps extends React.HTMLAttributes<HTMLElement> {
  selectedMenu: LNBMenuDepth2;
  profileAlarmCount: number;
  messageAlarmCount: number;
}

function Header({
  selectedMenu,
  profileAlarmCount,
  messageAlarmCount,
}: HeaderDepthProps) {
  const { depth1Icon, depth1Name, depth2Name } = selectedMenu;

  return (
    <StyledHeaderWrapper>
      <StyledHeaderDepthWrapper>
        <HeaderDepth
          depth1Icon={<MenuIcon icon={depth1Icon} />}
          depth1Name={depth1Name}
          depth2Name={depth2Name}
        />
      </StyledHeaderDepthWrapper>
      <StyledAlarmWrapper>
        <AlarmedIcon count={profileAlarmCount}>
          <ProfileSkeleton width={36} height={36} />
        </AlarmedIcon>
        <AlarmedIcon count={messageAlarmCount}>
          <MessageIcon />
        </AlarmedIcon>
      </StyledAlarmWrapper>
    </StyledHeaderWrapper>
  );
}

export default Header;
