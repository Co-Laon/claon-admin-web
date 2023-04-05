import PhotoIcon from '@/assets/PhotoIcon';
import DeleteModal from '@/components/register/manager/DeleteModal';
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { ImageListCarouselProps } from './type';

const ImageListWrapper = styled.div<{ width?: number; height?: number }>`
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
  width: ${({ height }) => height || 360}px;
  height: ${({ height }) => height || 140}px;
`;

function ImageListCarousel({ ...props }: ImageListCarouselProps) {
  const { images, width, height, deleteable, onClickDeleteConfirm } = props;

  const [current, setCurrent] = React.useState(0);

  const handleNextClick = () => {
    setCurrent(current + 1);
  };

  const handlePrevClick = () => {
    setCurrent(current - 1 >= 0 ? current - 1 : images.length - 1);
  };

  const handleDeleteConfirm = () => {
    if (onClickDeleteConfirm && deleteable) {
      onClickDeleteConfirm(current);
    }
  };

  const isCarouselEmpty = images.length === 0;

  return (
    <ImageListWrapper width={width} height={height}>
      {isCarouselEmpty && <PhotoIcon />}
      {!isCarouselEmpty && (
        <>
          {deleteable && <DeleteModal onClickConfirm={handleDeleteConfirm} />}
          <StyledCarousel
            autoPlay={false}
            next={handleNextClick}
            prev={handlePrevClick}
            {...props}
          >
            {images.map((image) => (
              <Image
                key={image}
                src={image}
                alt="대체 이미지"
                width={width || 200}
                height={height || 140}
              />
            ))}
          </StyledCarousel>
        </>
      )}
    </ImageListWrapper>
  );
}

export default ImageListCarousel;
