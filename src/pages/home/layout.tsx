import LNB from '@/components/common/LNB/LNB';
import Header from '@/components/common/header/Header';
import { SelectedDepth2 } from '@/types/common';
import styled from '@emotion/styled';
import { ReactNode, useState } from 'react';

const StyledMainPageWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  height: 100vh;
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  const [selectedDepth1, setSelectedDepth1] = useState<string>('');
  const [selectedDepth2, setSelectedDepth2] = useState<SelectedDepth2>({
    depth1Name: '',
    depth2Name: '',
    iconType: '',
  });

  const handleDepth1Click = (depth1Name: string) => {
    setSelectedDepth1(depth1Name);
  };

  const handleDepth2Click = (
    depth1Name: string,
    depth2Name: string,
    iconType: string
  ) => {
    setSelectedDepth2({ depth1Name, depth2Name, iconType });
  };

  return (
    <StyledMainPageWrapper>
      <LNB
        auth="manager"
        selectedDepth1={selectedDepth1}
        onClickDepth1={handleDepth1Click}
        onClickDepth2={handleDepth2Click}
      />
      <Header
        selectedDepth2={selectedDepth2}
        profileAlarmCount={1}
        messageAlarmCount={1}
      />
      {children}
    </StyledMainPageWrapper>
  );
}
