import PhotoIcon from '@/assets/PhotoIcon';
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { CarouselProps } from 'react-material-ui-carousel/dist/components/types';

const ImageListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 360px;
  height: 140px;
`;

interface ImageListCarouselProps extends CarouselProps {
  images: string[];
}

const ImageListCarousel = ({ ...props }: ImageListCarouselProps) => {
  console.dir(props.images.length === 0);
  return props.images.length === 0 ? (
    <ImageListWrapper>
      <PhotoIcon />
    </ImageListWrapper>
  ) : (
    <Carousel {...props}>
      {props.images.map((image) => (
        <Image key={image} src={image} alt="대체 이미지" />
      ))}
    </Carousel>
  );
};

export default ImageListCarousel;
