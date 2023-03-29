import DeleteIcon from '@/assets/DeleteIcon';
import FileIcon from '@/assets/FileIcon';
import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import { FileListProps } from './type';

// -----------------------Styles-----------------------
const StyledFileListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StyledFileName = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
`;

/**
 * file Drag Drop 했을 때 파일 리스트를 display 해주는 컴포넌트
 * @param param0
 * @returns
 */
function FileList({ onDelete, name }: FileListProps) {
  return (
    <StyledFileListWrapper>
      <StyledNameWrapper>
        <FileIcon />
        <StyledFileName>{name}</StyledFileName>
      </StyledNameWrapper>
      <IconButton onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
    </StyledFileListWrapper>
  );
}

export default FileList;
