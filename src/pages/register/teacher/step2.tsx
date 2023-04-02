import Certificate from '@/components/register/Certificate';
import RegisterTemplate from '@/components/register/RegisterTemplate';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
  margin-top: 120px;
`;

function Step2() {
  return (
    <StyledContainer>
      <RegisterTemplate step={99}>
        <Certificate type="강사" name="claon2023" onClickNext={() => {}} />
      </RegisterTemplate>
    </StyledContainer>
  );
}

export default Step2;
