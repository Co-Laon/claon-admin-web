import styled from '@emotion/styled';
import { Box, Modal } from '@mui/material';
import React, { useState } from 'react';

const StyledDeleteButton = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 2px;
  top: 2px;
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 328px;
  height: 72px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
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
`;

const StyledDeleteModalConfirmButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 50%;
`;

const StyledDeleteModalCancelButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 50%;
`;

interface DeleteModalProps {
  onClickConfirm?: () => void;
  onClickCancel?: () => void;
}

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
            사진을 삭제할까요?
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
