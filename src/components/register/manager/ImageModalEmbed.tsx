import ImageListCarousel from '@/components/common/carousel/ImageListCarousel';
import ImageList from '@/components/common/carousel/ImageListCarousel';
import DragDrop from '@/components/common/file/DragDrop';
import ImageUpload from '@/components/common/file/ImageUpload';
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

const ImageModalEmbedWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
`;

const ImageModalEmbedTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 4px;
  gap: 4px;

  width: 500px;
  height: 48px;
  left: 0px;
  top: 0px;

  font-size: 16px;
  line-height: 24px;
  font-weight: 700;

  background: linear-gradient(
      0deg,
      rgba(113, 90, 174, 0.11),
      rgba(113, 90, 174, 0.11)
    ),
    #fffbfe;
  border-radius: 28px 28px 0px 0px;
`;

const ImageModalDivider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;

  width: 100%;
  height: 1px;
  left: 0px;
  top: 48px;

  background: #000000;
`;

const ImageModalEmbedImageWrapper = styled.div`
  height: 452px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
`;

interface ImageModalProps {
  title: string;
  onComplete: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageModalEmbed = ({ title, onComplete }: ImageModalProps) => {
  const [files, setFiles] = React.useState<File[]>([]);

  const handleDragDropChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setFiles(files);
    }
  };

  return (
    <ImageModalEmbedWrapper>
      <ImageModalEmbedTitleWrapper>
        {`${title} 사진 업로드`}
      </ImageModalEmbedTitleWrapper>
      <ImageModalDivider />
      <ImageModalEmbedImageWrapper>
        {files.length === 0 ? (
          <ImageUpload onChange={handleDragDropChange} />
        ) : (
          <ImageListCarousel images={[]} />
        )}
      </ImageModalEmbedImageWrapper>
    </ImageModalEmbedWrapper>
  );
};

export default ImageModalEmbed;
