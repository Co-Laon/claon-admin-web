import styled from '@emotion/styled';
import Image from 'next/image';
import { useEffect } from 'react';

interface ImageListProps {
  images: string[];
}

const Container = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
`;

function ImageList({ images }: ImageListProps) {
  return (
    <Container>
      {images.map((image) => (
        <Image src={image} alt="image" width={195} height={136.5} />
      ))}
    </Container>
  );
}

export default ImageList;
