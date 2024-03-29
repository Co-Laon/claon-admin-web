import styled from '@emotion/styled';
import { Box, Modal } from '@mui/material';
import { useState } from 'react';
import CrossIcon from '@/assets/CrossIcon';
import { DeleteModalProps } from './type';

const StyledDeleteButton = styled(CrossIcon)`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 14px;
  top: 14px;
  padding: 5px;
  border-radius: 50%;
  background: #808080;
  z-index: 10;
`;

const StyledDeleteModalBox = styled(Box)`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  position: relative;
  width: 328px;
  height: 120px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  background: linear-gradient(
      0deg,
      rgba(113, 90, 174, 0.11),
      rgba(113, 90, 174, 0.11)
    ),
    #fffbfe;
  border-radius: 28px;
`;

const StyledDeleteModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 328px;
  height: 72px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
`;

const StyledDeleteModalLargeText = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

const StyledDeleteModalSmallText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

const ModalHorizontalDivider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;

  width: 100%;
  height: 1px;

  background: #000000;
`;

const ModalVerticalDivider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;

  width: 1px;
  height: 47px;

  background: #000000;
`;

const StyledDeleteModalButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  height: 47px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;

  cursor: pointer;
`;

const StyledDeleteModalConfirmButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 50%;

  color: red;
`;

const StyledDeleteModalCancelButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 50%;
`;

function DeleteModal({ onClickConfirm, onClickCancel }: DeleteModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmButtonClick = () => {
    if (onClickConfirm) {
      onClickConfirm();
    }
    setIsModalOpen(false);
  };

  const handleCancelButtonClick = () => {
    if (onClickCancel) {
      onClickCancel();
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <StyledDeleteButton onClick={handleDeleteButtonClick} />
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledDeleteModalBox>
          <StyledDeleteModalContentContainer>
            <StyledDeleteModalLargeText>
              사진을 삭제할까요?
            </StyledDeleteModalLargeText>
            <StyledDeleteModalSmallText>
              사진은 저장되지 않아요
            </StyledDeleteModalSmallText>
          </StyledDeleteModalContentContainer>
          <ModalHorizontalDivider />
          <StyledDeleteModalButtonContainer>
            <StyledDeleteModalConfirmButton onClick={handleConfirmButtonClick}>
              삭제
            </StyledDeleteModalConfirmButton>
            <ModalVerticalDivider />
            <StyledDeleteModalCancelButton onClick={handleCancelButtonClick}>
              취소
            </StyledDeleteModalCancelButton>
          </StyledDeleteModalButtonContainer>
        </StyledDeleteModalBox>
      </Modal>
    </>
  );
}

export default DeleteModal;
