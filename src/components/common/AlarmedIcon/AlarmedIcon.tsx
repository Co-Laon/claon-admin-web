import styled from '@emotion/styled';
import React from 'react';

const StyledAlarmedIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  aspect-ratio: 1;
`;

const StyledAlarmedIconCount = styled.div`
  position: absolute;
  text-align: center;
  top: -2px;
  right: -2px;
  width: 14px;
  height: 14px;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: white;
  border-radius: 50%;
  background-color: #b3261e;
`;

interface AlarmedIconProps extends React.HTMLAttributes<HTMLElement> {
  count: number;
}

function AlarmedIcon({ children, count }: AlarmedIconProps) {
  return (
    <StyledAlarmedIconWrapper>
      {count !== 0 && <StyledAlarmedIconCount>{count}</StyledAlarmedIconCount>}
      {children}
    </StyledAlarmedIconWrapper>
  );
}

export default AlarmedIcon;
