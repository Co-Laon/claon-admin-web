import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

interface ErrorProps {
  image: JSX.Element;
  title: string;
  description: string;
}

const StyledContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const StyledTitle = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: black;
`;

const StyledDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: black;
`;

const StyledAccent = styled.span`
  font-weight: 700;
`;

const StyledButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px 5px 10px;
  border-radius: 8px;
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  border: none;
  background-color: #d0bcff;
  cursor: pointer;
`;
function Error({ description, image, title }: ErrorProps) {
  const router = useRouter();
  const onClickButton = useCallback(() => {
    router.push('/home');
  }, []);
  return (
    <StyledContainer>
      {image}
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledDescription>
          문의사항은 <StyledAccent>help.claon@gmail.com</StyledAccent>
          으로 연락해주세요.
        </StyledDescription>
      </StyledTextContainer>
      <StyledButton onClick={onClickButton}>홈으로 이동</StyledButton>
    </StyledContainer>
  );
}

export default Error;
