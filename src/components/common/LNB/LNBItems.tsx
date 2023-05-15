import CarouselArrowIcon from '@/assets/CarouselArrowIcon';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Depth2Line from '@/assets/LNB/Depth2Line';
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

const StyledLNBDepth1Wrapper = styled(StyledLNBItemsWrapper)`
  position: relative;
  z-index: 2;
  display: flex;
  background-color: #7a7289;
  color: white;
  align-items: center;
`;

const StyledLNBDepth2Container = styled.div`
  animation: ${BoxSpread} 0.5s ease-in-out;
`;

const StyledLNBDepth2Wrapper = styled(StyledLNBItemsWrapper)`
  position: relative;
  z-index: 1;
  padding-left: 26px;
  color: white;

  animation: ${BoxFade} 0.5s ease-in-out;
`;

const Depth1ArrowIcon = styled(CarouselArrowIcon)<{ isOpened: boolean }>`
  position: absolute;
  right: 20px;
  transform: ${({ isOpened }) =>
    isOpened ? 'rotate(90deg)' : 'rotate(-90deg)'};
`;

const StyledDepth2Line = styled(Depth2Line)`
  position: relative;
  bottom: 32px;
  margin-right: 20px;
`;

interface LNBDepth1Props extends React.HTMLAttributes<HTMLElement> {
  icon: string;
  name: string;
  isOpened: boolean;
}

interface LNBDepth2Props extends React.HTMLAttributes<HTMLElement> {
  name: string;
  isSelected: boolean;
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
      <StyledLNBDepth1Wrapper {...props}>
        <MenuIcon iconType={icon} fill="#ffffff" />
        {name}
        <Depth1ArrowIcon
          isOpened={isOpened}
          fill="#ffffff"
          width={16}
          height={16}
        />
      </StyledLNBDepth1Wrapper>
      {isOpened ? (
        <StyledLNBDepth2Container>{children}</StyledLNBDepth2Container>
      ) : null}
    </>
  );
}

export function LNBDepth2({ name, isSelected, ...props }: LNBDepth2Props) {
  return (
    <StyledLNBDepth2Wrapper {...props}>
      <StyledDepth2Line />
      {name}
    </StyledLNBDepth2Wrapper>
  );
}
