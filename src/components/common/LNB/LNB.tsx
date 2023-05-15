import { LNBInstructorMenu, LNBManagerMenu } from '@/constants/LNBManage';
import styled from '@emotion/styled';
import React from 'react';
import ClaonLogo from '@/assets/ClaonLogo';
import { LNBMenuDepth1, LNBMenuDepth2 } from '@/types/common';
import { LNBDepth1, LNBDepth2 } from './LNBItems';

const StyledLNBWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 0 15px;
  background-color: #7a7289;
`;

const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 44px;
  margin: 20px 32px;
`;

interface LNBProps extends React.HTMLAttributes<HTMLElement> {
  auth: 'manager' | 'intsructor';
  selectedDepth1: string;
  onClickDepth1: (depth1Name: string) => void;
  onClickDepth2: (depth1Icon: string, depthArray: string[]) => void;
}

function LNB({ auth, selectedDepth1, onClickDepth1, onClickDepth2 }: LNBProps) {
  const items = auth === 'manager' ? LNBManagerMenu : LNBInstructorMenu;

  return (
    <StyledLNBWrapper>
      <StyledLogoWrapper>
        <ClaonLogo />
      </StyledLogoWrapper>
      {items.map((depth1: LNBMenuDepth1) => {
        const { name: depth1Name, icon: depth1Icon } = depth1;
        return (
          <LNBDepth1
            key={depth1Name}
            icon={depth1Icon}
            name={depth1Name}
            isOpened={selectedDepth1 === depth1Name}
            onClick={() => onClickDepth1(depth1Name)}
          >
            {depth1.children.map(({ name: depth2Name }: LNBMenuDepth2) => {
              return (
                <LNBDepth2
                  key={depth2Name}
                  name={depth2Name}
                  isSelected
                  onClick={() =>
                    onClickDepth2(depth1Icon, [depth1Name, depth2Name])
                  }
                />
              );
            })}
          </LNBDepth1>
        );
      })}
    </StyledLNBWrapper>
  );
}

export default LNB;
