import CarouselArrowIcon from '@/assets/CarouselArrowIcon';
import styled from '@emotion/styled';
import React from 'react';
import MenuIcon from '../LNB/MenuIcon';

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
  depth1Icon: string;
  depthArray: string[];
}

function HeaderDepth({ depth1Icon, depthArray }: HeaderDepthProps) {
  return (
    <StyledHeaderDepthWrapper>
      {depthArray.map((depth, index) => {
        const isFirst = index === 0;
        return (
          <>
            {isFirst ? (
              <MenuIcon iconType={depth1Icon} fill="#6750A4" />
            ) : (
              <CarouselArrowIcon width={9} height={12} />
            )}
            <div>{depth}</div>
          </>
        );
      })}
    </StyledHeaderDepthWrapper>
  );
}

export default HeaderDepth;
