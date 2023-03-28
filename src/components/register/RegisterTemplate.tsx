import styled from 'styled-components';
import { ReactNode } from 'react';
import { LinearProgress } from '@mui/material';

const TemplateWrapper = styled.div`
  width: 560px;
`;
const Template = styled.div`
  width: 100%;
  background-color: #fffbfe;
  border-radius: 16px;
  border: 1px solid;
  border-color: #cacad0;
  padding: 48px 100px 48px 100px;
  margin-top: 20px;
`;

const CustomLinearProgress = styled(LinearProgress)`
  width: 32%;
  background-color: #e7e0ec;
  & > span {
    background-color: #6750a4;
  }
`;

function RegisterTemplate({ children, step }: { children: ReactNode; step: number }) {
  return (
    <TemplateWrapper>
      <CustomLinearProgress variant="determinate" value={step} color="secondary" />
      <Template>{children}</Template>
    </TemplateWrapper>
  );
}

export default RegisterTemplate;
