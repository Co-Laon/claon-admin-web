import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { ChangeEvent, useCallback, useState } from 'react';
import DragDrop from '../common/file/DragDrop';
import FileList from '../common/file/FileList';

/* ----------Props------------*/
interface CertificateProps {
  type: string;
  name: string;
  onClickNext: () => void;
}

/*------------Style------------- */
const TitleWrapper = styled.div`
  margin-bottom: 32px;
`;
const StyledTitle = styled.p`
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
`;

const SubTitleWrapper = styled.div`
  margin-bottom: 12px;
`;

const StyledSubTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;
const StyledDescription = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
`;

const FileWrapper = styled.div`
  margin-bottom: 36px;
`;

const StyledButton = styled(Button)`
  background-color: #d0bcff;
  color: black;
  width: 100%;
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
`;

/**
 * 회원 가입 시 증명 서류를 올리는 컴포넌
 * @param param0
 * @returns
 */
function Certificate({ type, name, onClickNext }: CertificateProps) {
  const [files, setFiles] = useState<File[]>([]);

  const onFileChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      let uploadFile: File[] = [];
      if (files.length == 5) alert('파일 개수는 최대 5개 입니다.');

      if (e.target.files) {
        uploadFile = Array.from(e.target.files);
      }
      setFiles([...files, ...uploadFile]);
    },
    [files]
  );

  const onDelete = useCallback(
    (idx: number) => {
      return () => {
        setFiles(files.filter((file) => files[idx] !== file));
      };
    },
    [files]
  );

  return (
    <div>
      <TitleWrapper>
        <StyledTitle>{`${name} ${type}님`}</StyledTitle>
        <StyledTitle>자신을 증명해주세요.</StyledTitle>
      </TitleWrapper>
      <SubTitleWrapper>
        <StyledSubTitle>{`자격증과 같이 ${type}임을 증명해주세요.`}</StyledSubTitle>
        <StyledDescription>
          업로드한 파일은 회원가입 즉시 삭제됩니다.
        </StyledDescription>
      </SubTitleWrapper>
      <FileWrapper>
        <DragDrop onChange={onFileChange} />
        {files.map((file, idx) => (
          <FileList name={file.name} onDelete={onDelete(idx)} key={idx} />
        ))}
      </FileWrapper>
      <StyledButton onClick={onClickNext}>다음</StyledButton>
    </div>
  );
}
export default Certificate;
