import Certificate from '@/components/register/Certificate';
import RegisterLayout from '@/components/register/RegisterLayout';
import styled from '@emotion/styled';
import { ReactElement } from 'react';

const StyledContainer = styled.div`
  margin-top: 120px;
`;

function Step2() {
  return <Certificate type="강사" name="claon2023" onClickNext={() => {}} />;
}

Step2.getLayout = function getLayout(page: ReactElement) {
  return <RegisterLayout step={99}>{page}</RegisterLayout>;
};

export default Step2;
