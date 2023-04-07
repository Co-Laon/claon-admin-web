import DeleteModal from '@/components/register/manager/DeleteModal';
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PhotoEmptyIcon from '@/assets/PhotoEmptyIcon';
import CarouselArrowIcon from '@/assets/CarouselArrowIcon';
import { ImageListCarouselProps } from './type';

// -------------------Styles----------------

const ImageListWrapper = styled.div<{ width?: number; height?: number }>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: ${({ width }) => width || 360}px;
  height: ${({ height }) => height || 140}px;
`;

const StyledCarousel = styled(Carousel)`
  position: relative;
  height: 100%;
`;

const StyledCarouselItemContainer = styled.div<{
  background?: string;
  width?: number;
  height?: number;
}>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  background: ${({ background }) => background || '#ffffff'};

  width: ${({ width }) => width || 360}px;
  height: ${({ height }) => height || 140}px;
`;

const StyledRightCarouselArrowIconContainer = styled.div`
  position: absolute;
  right: 0px;
  top: 50%;
  width: 40px;
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  transform: translateY(-50%);

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
  }
`;

const StyledLeftCarouselArrowIconContainer = styled.div`
  position: absolute;
  left: 0px;
  top: 50%;
  width: 40px;
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  transform: translateY(-50%) rotate(180deg);

  z-index: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
  }
`;

const StyledCarouselIndicator = styled.li<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: '#6750A4';
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  margin: 0px 4px;
`;

/**
 *
 * @param param0.images 이미지 리스트
 * @param param0.width 이미지 너비
 * @param param0.height 이미지 높이
 * @param param0.deleteable 삭제 가능 여부
 * @param param0.onClickDeleteConfirm 삭제 버튼 클릭 시 실행할 함수
 * @param param0.props react-mui-carousel Props
 * @returns 이미지 캐러샐 컴포넌트
 */
function ImageListCarousel({
  images,
  width,
  height,
  deleteable,
  onClickDeleteConfirm,
}: ImageListCarouselProps) {
  const [current, setCurrent] = React.useState(0);

  const handleCarouselChange = (index: number) => {
    setCurrent(index);
  };

  const handleDeleteConfirm = () => {
    if (onClickDeleteConfirm && deleteable) {
      onClickDeleteConfirm(current);
    }
  };

  const isCarouselEmpty = images.length === 0;

  return (
    <ImageListWrapper width={width} height={height}>
      {isCarouselEmpty && <PhotoEmptyIcon />}
      {!isCarouselEmpty && (
        <>
          {deleteable && <DeleteModal onClickConfirm={handleDeleteConfirm} />}
          <StyledCarousel
            infiniteLoop
            showStatus={false}
            width={width}
            onChange={handleCarouselChange}
            renderArrowPrev={(onClickHandler, hasPrev) =>
              hasPrev && (
                <StyledLeftCarouselArrowIconContainer onClick={onClickHandler}>
                  <CarouselArrowIcon />
                </StyledLeftCarouselArrowIconContainer>
              )
            }
            renderArrowNext={(onClickHandler, hasNext) =>
              hasNext && (
                <StyledRightCarouselArrowIconContainer onClick={onClickHandler}>
                  <CarouselArrowIcon />
                </StyledRightCarouselArrowIconContainer>
              )
            }
          >
            {images.map((image) => (
              <StyledCarouselItemContainer
                key={image}
                width={width}
                height={height}
              >
                <Image
                  src={image}
                  alt="carousel image"
                  fill
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </StyledCarouselItemContainer>
            ))}
          </StyledCarousel>
        </>
      )}
    </ImageListWrapper>
  );
}

export default ImageListCarousel;
