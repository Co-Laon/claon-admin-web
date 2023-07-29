import AddIcon from '@/assets/AddIcon';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import ImageModal from './ImageModal';

interface ImageListProps {
  images: (string | File)[];
  readOnly?: boolean;
  onChangeImageList: (imgs: (string | File)[]) => void;
}

const Container = styled.div``;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTitle = styled.p`
  font-size: 15.6px;
  font-weight: 700;
  line-height: 23.4px;
  margin-bottom: 8px;
`;

const StyledButton = styled.button`
  background-color: #d0bcff;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
`;

function ImageList({ images, readOnly, onChangeImageList }: ImageListProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [imgs, setImgs] = useState<string[]>([]);

  const onClickButton = useCallback(() => {
    setOpen(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    let srcs;
    if (images.length > 0 && typeof images[0] !== 'string') {
      srcs = images.map((image) => URL.createObjectURL(image as File));
    } else {
      srcs = images as string[];
    }
    setImgs(srcs);
  }, [images]);

  return (
    <Container>
      <TitleContainer>
        <StyledTitle>대표 사진</StyledTitle>
        {!readOnly ? (
          <StyledButton onClick={onClickButton}>
            <AddIcon />
          </StyledButton>
        ) : null}
      </TitleContainer>
      <ImageContainer>
        {imgs.map((image) => (
          <Image src={image as string} alt="image" width={195} height={136.5} />
        ))}
      </ImageContainer>
      <ImageModal
        title="암장"
        open={open}
        onClose={onCloseModal}
        onComplete={onChangeImageList}
        defaultImage={images as string[]}
      />
    </Container>
  );
}

export default ImageList;
