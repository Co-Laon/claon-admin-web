import CenterDetail from '@/components/center/CenterDetail';
import CenterList from '@/components/center/CenterList';
import {
  useCenterDetail,
  useFindCenter,
} from '@/hooks/queries/center/queryKey';
import RootLayout from '@/layouts/RootLayout';
import { CenterDetailResponse } from '@/types/response/center';
import styled from '@emotion/styled';
import { ReactElement, useEffect, useState } from 'react';

const StyledContainer = styled.div`
  display: flex;
`;

const ListContainer = styled.div`
  padding: 20px;
  width: 62%;
`;

const StyledAddButton = styled.button`
  padding: 5px 10px 5px 10px;
  color: white;
  background-color: #6750a4;
  border-radius: 100px;
  margin-bottom: 12px;
`;

const StyledCenterListContainer = styled.div`
  overflow-y: auto;
  width: 100%;
`;

const CenterDetailContainer = styled.div`
  padding: 20px;
  width: 38%;
`;

function CenterMainPage() {
  const [centerId, setCenterId] = useState<string>('');
  const { data: centerList } = useFindCenter();
  const { data: centerDetail } = useCenterDetail(centerId);

  useEffect(() => {
    if (centerList?.results.length !== 0) {
      setCenterId(centerList?.results[0].center_id || '');
    }
  }, [centerList]);

  return (
    <StyledContainer>
      <ListContainer>
        <StyledAddButton>+ 암장 등록</StyledAddButton>
        <StyledCenterListContainer>
          {centerList?.results.map((result) => (
            <CenterList {...result} />
          ))}
        </StyledCenterListContainer>
      </ListContainer>
      <CenterDetailContainer>
        <CenterDetail {...(centerDetail as CenterDetailResponse)} />
      </CenterDetailContainer>
    </StyledContainer>
  );
}

CenterMainPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default CenterMainPage;
