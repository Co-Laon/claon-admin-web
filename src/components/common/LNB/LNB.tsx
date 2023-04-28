import { LNBInstructorMenu, LNBManagerMenu } from '@/utils/LNBManage';
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
  onClickDepth2: (depth1Name: string, depth2Name: string, icon: string) => void;
}

function LNB({ auth, selectedDepth1, onClickDepth1, onClickDepth2 }: LNBProps) {
  const items = auth === 'manager' ? LNBManagerMenu : LNBInstructorMenu;

  return (
    <StyledLNBWrapper>
      <StyledLogoWrapper>
        <ClaonLogo />
      </StyledLogoWrapper>
      {items.map((depth1: LNBMenuDepth1) => {
        return (
          <LNBDepth1
            key={depth1.name}
            icon={depth1.icon}
            name={depth1.name}
            isOpened={selectedDepth1 === depth1.name}
            onClick={() => onClickDepth1(depth1.name)}
          >
            {depth1.children.map((depth2: LNBMenuDepth2) => {
              return (
                <LNBDepth2
                  key={depth2.name}
                  name={depth2.name}
                  onClick={() =>
                    onClickDepth2(depth1.name, depth2.name, depth1.icon)
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
