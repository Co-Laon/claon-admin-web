import CarouselArrowIcon from '@/assets/CarouselArrowIcon';
import styled from '@emotion/styled';
import React from 'react';
import { keyframes } from '@emotion/react';
import MenuIcon from './MenuIcon';

const BoxFade = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const BoxSpread = keyframes`
    from {
        max-height: 0px;
    }
    to {
        max-height: 100%;
    }
`;

const StyledLNBItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 274px;
  height: 56px;

  border-radius: 100px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  padding: 15px;

  cursor: pointer;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const StyledLNBDepth1Wrapper = styled(StyledLNBItemsWrapper)<{
  isOpened: boolean;
}>`
  background-color: ${({ isOpened }) => (isOpened ? '#E8DEF8' : 'none')};
  color: ${({ isOpened }) => (isOpened ? '#000000' : '#FFFFFF')};
`;

const StyledLNBDepth2Container = styled.div`
  animation: ${BoxSpread} 0.5s ease-in-out;
`;

const StyledLNBDepth2Wrapper = styled(StyledLNBItemsWrapper)`
  padding-left: 48px;
  color: #ffffff;

  animation: ${BoxFade} 0.5s ease-in-out;
`;

interface LNBDepth1Props extends React.HTMLAttributes<HTMLElement> {
  icon: string;
  name: string;
  isOpened: boolean;
}

interface LNBDepth2Props extends React.HTMLAttributes<HTMLElement> {
  name: string;
}

export function LNBDepth1({
  icon,
  name,
  isOpened,
  children,
  ...props
}: LNBDepth1Props) {
  return (
    <>
      <StyledLNBDepth1Wrapper isOpened={isOpened} {...props}>
        <MenuIcon iconType={icon} fill={isOpened ? '#6750A4' : '#ffffff'} />
        {name}
      </StyledLNBDepth1Wrapper>
      {isOpened ? (
        <StyledLNBDepth2Container>{children}</StyledLNBDepth2Container>
      ) : null}
    </>
  );
}

export function LNBDepth2({ name, ...props }: LNBDepth2Props) {
  return (
    <StyledLNBDepth2Wrapper {...props}>
      <CarouselArrowIcon width={24} height={15} fill="#ffffff" />
      {name}
    </StyledLNBDepth2Wrapper>
  );
}
