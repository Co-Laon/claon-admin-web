import ImagePlaceholder from '@/assets/ImagePlaceholder';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

interface PendingProps {
  title: string;
  subTitle: string;
  buttonLabel: string;
  onClickButton: () => void;
  className?: string;
}

const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImagePlaceholder = styled(ImagePlaceholder)`
  margin-bottom: 12px;
`;

const StyledTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
`;

const StyledHelp = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 20px;
`;

const StyledHelpEng = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  background-color: #d0bcff;
  color: black;
  font-weight: 500;
  font-size: 20px;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 0px;
  padding-bottom: 0px;
`;

function Pending({
  title,
  subTitle,
  buttonLabel,
  onClickButton,
  className,
}: PendingProps) {
  return (
    <StyledContainer className={className}>
      <div>
        <StyledImagePlaceholder />
        <StyledTitle>{title}</StyledTitle>
        <StyledTitle>{subTitle}</StyledTitle>
        <StyledHelp>
          문의사항은 <StyledHelpEng>help.claon@gmail.com</StyledHelpEng>으로
          연락주세요.
        </StyledHelp>
        <StyledButtonContainer>
          <StyledButton onClick={onClickButton}>{buttonLabel}</StyledButton>
        </StyledButtonContainer>
      </div>
    </StyledContainer>
  );
}

export default Pending;
