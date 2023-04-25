import CarouselArrowIcon from '@/assets/CarouselArrowIcon';
import styled from '@emotion/styled';
import React from 'react';

const StyledHeaderDepthWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #7a7289;
`;

interface HeaderDepthProps extends React.HTMLAttributes<HTMLElement> {
  depth1Icon: React.ReactNode;
  depth1Name: string;
  depth2Name: string;
}

function HeaderDepth({ depth1Icon, depth1Name, depth2Name }: HeaderDepthProps) {
  return (
    <StyledHeaderDepthWrapper>
      {depth1Icon}
      <div>{depth1Name}</div>
      <CarouselArrowIcon width={9} height={12} />
      <div>{depth2Name}</div>
    </StyledHeaderDepthWrapper>
  );
}

export default HeaderDepth;