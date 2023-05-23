import Close from '@/assets/CloseIcon';
import ParkingIcon from '@/assets/ParkingIcon';
import styled from '@emotion/styled';
import { Box, Modal } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { CenterNameResponse } from '@/types/common/center';
import { SearchCenterModalProps } from './type';

const StyledSearchCenterBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 412px;
  height: 289px;
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

const StyledSearchCenterInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 4px;
  gap: 4px;

  width: 412px;
  height: 72px;

  background: linear-gradient(
      0deg,
      rgba(113, 90, 174, 0.11),
      rgba(113, 90, 174, 0.11)
    ),
    #fffbfe;
  border-radius: 28px 28px 0px 0px;
`;

const StyledSearchCenterInput = styled.input`
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  background: linear-gradient(
      0deg,
      rgba(113, 90, 174, 0.11),
      rgba(113, 90, 174, 0.11)
    ),
    #fffbfe;
  border-width: 0px;
  &:focus {
    outline: none;
  }
`;

const StyledSearchCenterHorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background: #000000;
`;

const StyledCloseIcon = styled(Close)`
  margin-right: 20px;
  cursor: pointer;
`;

const StyledSearchResultWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  isolation: isolate;

  width: 100%;
  height: 72px;
`;

const StyledParkingIcon = styled(ParkingIcon)`
  margin: 16px;
`;

const StyledSearchResultTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 0px;
  isolation: isolate;

  width: 100%;
  height: 72px;
`;

const StyledSearchResultName = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const StyledSearchResultAddress = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

interface SearchResultItemProps {
  center: CenterNameResponse;
  onSelect: (center: CenterNameResponse) => void;
}

function SearchResultItem({ center, onSelect }: SearchResultItemProps) {
  const handleSelect = () => {
    onSelect(center);
  };
  return (
    <StyledSearchResultWrapper onClick={handleSelect}>
      <StyledParkingIcon>P</StyledParkingIcon>
      <StyledSearchResultTextWrapper>
        <StyledSearchResultName>{center.name}</StyledSearchResultName>
        <StyledSearchResultAddress>{center.address}</StyledSearchResultAddress>
      </StyledSearchResultTextWrapper>
    </StyledSearchResultWrapper>
  );
}

const resultData: CenterNameResponse[] = [
  {
    center_id: '1',
    name: '테스트',
    address: '테스트',
  },
  {
    center_id: '2',
    name: '테스트',
    address: '테스트',
  },
];

function SearchCenterModal({
  open,
  onClose,
  onComplete,
}: SearchCenterModalProps) {
  const [result, setResult] = useState<CenterNameResponse[]>([]);

  const handleCloseIconClick = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleSearch = useCallback(() => {
    setResult(resultData);
  }, []);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledSearchCenterBox>
        <StyledSearchCenterInputWrapper>
          <StyledSearchCenterInput onChange={handleSearch} />
          <StyledCloseIcon onClick={handleCloseIconClick} />
        </StyledSearchCenterInputWrapper>
        <StyledSearchCenterHorizontalLine />
        {result.map((center) => (
          <SearchResultItem center={center} onSelect={onComplete} />
        ))}
      </StyledSearchCenterBox>
    </Modal>
  );
}

export default SearchCenterModal;
