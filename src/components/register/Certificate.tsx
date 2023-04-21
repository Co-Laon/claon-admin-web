import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useCallback, useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import DragDrop from '../common/file/DragDrop';
import FileList from '../common/file/FileList';

// ----------Props------------
interface CertificateProps {
  type: string;
  name: string;
  onClickNext: (files: File[]) => () => void;
}

// ------------Style-------------
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
    (fileList: File[]) => {
      if (files.length > 5 || fileList.length > 5)
        alert('파일은 최대 5개까지 업로드 가능해요.');
      else setFiles([...files, ...fileList]);
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

  const typeMap = {
    role: type,
    target: type === '강사' ? '자신' : '암장',
    item: type === '강사' ? '자격증' : '사업자등록증',
    when: type === '강사' ? '회원가입' : '확인이 완료된',
  };

  return (
    <div>
      <TitleWrapper>
        <StyledTitle>{`${name} ${typeMap.role}님`}</StyledTitle>
        <StyledTitle>{`${typeMap.target}을 증명해주세요.`}</StyledTitle>
      </TitleWrapper>
      <SubTitleWrapper>
        <StyledSubTitle>{`${typeMap.item}과 같이 ${typeMap.target}임을 증명해주세요.`}</StyledSubTitle>
        <StyledDescription>
          {`업로드한 파일은 ${typeMap.when} 즉시 삭제하고 있어요.`}
        </StyledDescription>
        <StyledDescription>
          파일은 최대 5개까지 업로드 가능해요.
        </StyledDescription>
      </SubTitleWrapper>
      <FileWrapper>
        <DragDrop onChange={onFileChange} />
        {files.map((file, idx) => (
          <FileList name={file.name} onDelete={onDelete(idx)} key={uuid4()} />
        ))}
      </FileWrapper>
      <StyledButton onClick={onClickNext(files)}>다음</StyledButton>
    </div>
  );
}
export default Certificate;
