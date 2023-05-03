import styled from '@emotion/styled';
import React from 'react';
import ProfileSkeleton from '@/assets/ProfileSkeleton';
import MessageIcon from '@/assets/MessageIcon';
import { SelectedDepth2 } from '@/types/common';
import AlarmedIcon from '../BadgedIcon/BadgedIcon';
import HeaderDepth from './HeaderDepth';

const StyledHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
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
  selectedDepth2: SelectedDepth2;
  profileAlarmCount: number;
  messageAlarmCount: number;
}

function Header({
  selectedDepth2: { depth1Name, depth2Name, iconType },
  profileAlarmCount,
  messageAlarmCount,
}: HeaderDepthProps) {
  return (
    <StyledHeaderWrapper>
      <StyledHeaderDepthWrapper>
        <HeaderDepth
          depth1Icon={iconType}
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
