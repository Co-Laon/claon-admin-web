import { Box, Modal } from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import ImageUpload from '@/components/common/file/ImageUpload';
import ImageListCarousel from '@/components/common/carousel/ImageListCarousel';
import CheckIcon from '@/assets/CheckIcon';
import CloseIcon from '@/assets/CloseIcon';
import { ImageModalProps } from './type';

// -------------------Styles----------------

const StyledImageModalBox = styled(Box)`
  position: absolute;
  width: 500px;
  height: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(
      0deg,
      rgba(113, 90, 174, 0.11),
      rgba(113, 90, 174, 0.11)
    ),
    #fffbfe;
  border-radius: 14px;
  overflow: hidden;
`;

const StyledCheckIcon = styled(CheckIcon)`
  position: absolute;
  width: 18px;
  height: 18px;
  left: 14px;
  top: 14px;

  cursor: pointer;
`;

const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  width: 14px;
  height: 14px;
  right: 14px;
  top: 16px;

  cursor: pointer;
`;

const ImageModalEmbedWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
`;

const ImageModalEmbedTitleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
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
  position: relative;
  height: 452px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
`;

function ImageModal({
  title,
  open,
  onClose,
  onComplete,
  defaultImage,
}: ImageModalProps) {
  const [imageList, setImageList] = React.useState<(string | File)[]>([]);

  const isImageListEmpty = imageList?.length === 0;

  const handleDragDropChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImageList(files);
    }
  };

  const handleDeleteImage = (index: number) => {
    const newImageList = imageList.filter((_, i) => i !== index);
    setImageList(newImageList);
  };

  const handleComplete = useCallback(() => {
    onClose();
    onComplete(imageList);
  }, [onClose, onComplete, imageList]);

  const handleCancel = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (defaultImage) setImageList(defaultImage as (string | File)[]);
  }, [defaultImage]);

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledImageModalBox>
        <ImageModalEmbedWrapper>
          <ImageModalEmbedTitleWrapper>
            <StyledCheckIcon onClick={handleComplete} />
            {`${title} 사진 업로드`}
            <StyledCloseIcon onClick={handleCancel} />
          </ImageModalEmbedTitleWrapper>
          <ImageModalDivider />
          <ImageModalEmbedImageWrapper>
            {isImageListEmpty && (
              <ImageUpload onChange={handleDragDropChange} />
            )}
            {!isImageListEmpty && (
              <ImageListCarousel
                images={imageList || []}
                deleteable
                onClickDeleteConfirm={handleDeleteImage}
                width={500}
                height={452}
              />
            )}
          </ImageModalEmbedImageWrapper>
        </ImageModalEmbedWrapper>
      </StyledImageModalBox>
    </Modal>
  );
}

export default ImageModal;
