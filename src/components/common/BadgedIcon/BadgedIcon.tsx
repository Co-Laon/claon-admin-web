import styled from '@emotion/styled';
import React from 'react';

const StyledBadgedIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  aspect-ratio: 1;
`;

const StyledBadgedIconCount = styled.div`
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

interface BadgedIconProps extends React.HTMLAttributes<HTMLElement> {
  count: number;
}

function BadgedIcon({ children, count }: BadgedIconProps) {
  return (
    <StyledBadgedIconWrapper>
      {count !== 0 && <StyledBadgedIconCount>{count}</StyledBadgedIconCount>}
      {children}
    </StyledBadgedIconWrapper>
  );
}

export default BadgedIcon;
