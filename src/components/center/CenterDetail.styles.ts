import { css } from '@emotion/react';
import styled from '@emotion/styled';
import CenterModal from './CenterModal';

export const Container = styled.form`
  height: 100%;
`;

export const StyledDetailContent = styled.div`
  height: calc(100% - 35px);
  overflow-y: auto;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  padding: 30px 20px 30px 20px;
  border: 0.75px solid #cac4d0;
  border-bottom: none;
`;

export const StyledTitle = styled.p`
  font-size: 19.5px;
  font-weight: 700;
  line-height: 29.25px;
`;

export const SubContainer = styled.div`
  margin-top: 30px;
`;

export const SubTitle = styled.p`
  font-size: 15.6px;
  font-weight: 700;
  line-height: 23.4px;
  margin-bottom: 8px;
`;
export const StyledFooter = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border: 0.75px solid #cac4d0;
  padding: 10px 10px 10px 10px;
  background-color: #e8def8;
`;

export const StyledFooterButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const StyledButton = styled.button<{ primary?: boolean }>`
  border-radius: 100px;
  padding-left: 24px;
  padding-right: 24px;
  border: 1px solid #c4c4c4;
  background-color: white;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: #6750a4;
  cursor: pointer;
  ${(props) =>
    props.primary &&
    css`
      border: none;
      background-color: #6750a4;
      color: white;
    `};
`;

export const CancelModal = styled(CenterModal)``;
export const DeleteModal = styled(CenterModal)``;
