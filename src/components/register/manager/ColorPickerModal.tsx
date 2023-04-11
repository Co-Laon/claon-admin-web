import styled from '@emotion/styled';
import { Box, Modal } from '@mui/material';
import React, { useCallback } from 'react';
import { ColorResult, CompactPicker } from 'react-color';
import { ColorPickerModalProps } from './type';

// -----------------------------Styles----------------------

const StyledColorPickerModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(
      0deg,
      rgba(113, 90, 174, 0.11),
      rgba(113, 90, 174, 0.11)
    ),
    #fffbfe;
`;

function ColorPickerModal({
  open,
  onClose,
  onChangeComplete,
}: ColorPickerModalProps) {
  const handleColorPickerModalComplete = useCallback(
    (color: ColorResult) => {
      onClose();
      onChangeComplete(color);
    },
    [onClose, onChangeComplete]
  );

  return (
    <Modal open={open}>
      <StyledColorPickerModalBox>
        <CompactPicker onChangeComplete={handleColorPickerModalComplete} />
      </StyledColorPickerModalBox>
    </Modal>
  );
}

export default ColorPickerModal;
