import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Modal } from '@mui/material';

interface CenterModalProps {
  open: boolean;
  title: string;
  description: string;
  onClickOk: () => void;
  onClickCancel: () => void;
  ok: string;
  cancel: string;
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fffbfe;
  width: 328px;
  border-radius: 28px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #79747e;
  padding-top: 19px;
  padding-bottom: 15px;
`;

const StyledTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

const StyledDescription = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

const StyledButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledButton = styled.div<{ ok?: boolean }>`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  ${({ ok }) =>
    ok &&
    css`
      color: #b3261e;
      border-right: 1px solid #79747e;
    `};
`;

function CenterModal({
  open,
  title,
  description,
  onClickOk,
  onClickCancel,
  ok,
  cancel,
}: CenterModalProps) {
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container>
        <TitleContainer>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </TitleContainer>
        <StyledButtonContainer>
          <StyledButton onClick={onClickOk} ok>
            {ok}
          </StyledButton>
          <StyledButton onClick={onClickCancel}>{cancel}</StyledButton>
        </StyledButtonContainer>
      </Container>
    </Modal>
  );
}
export default CenterModal;
