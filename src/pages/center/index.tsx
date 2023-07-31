import CenterDetail from '@/components/center/CenterDetail';
import CenterList from '@/components/center/CenterList';
import { useFindCenter } from '@/hooks/queries/center/useFindCenter';
import { useGetCenterDetail } from '@/hooks/queries/center/useGetCenterDetail';
import RootLayout from '@/layouts/RootLayout';
import { CenterDetailResponse } from '@/types/response/center';
import styled from '@emotion/styled';
import { ReactElement, useCallback, useEffect, useState } from 'react';

const StyledContainer = styled.div`
  display: flex;
  height: calc(100% - 66px);
`;

const ListContainer = styled.div`
  padding: 20px;
  width: 62%;
  height: 100%;
  overflow: auto;
`;

const StyledAddButton = styled.button`
  padding: 5px 10px 5px 10px;
  color: white;
  background-color: #6750a4;
  border-radius: 100px;
  margin-bottom: 12px;
  border: none;
`;

const StyledCenterListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CenterDetailContainer = styled.div`
  padding: 20px;
  width: 38%;
  height: 100%;
`;

function CenterMainPage() {
  const [centerId, setCenterId] = useState<string>('');
  const { data: centerList } = useFindCenter();
  const { data: centerDetail } = useGetCenterDetail(centerId);

  useEffect(() => {
    if (centerList?.results.length !== 0) {
      setCenterId(centerList?.results[0].center_id || '');
    }
  }, [centerList]);

  const onClickCenter = useCallback((id: string) => {
    return () => {
      setCenterId(id);
    };
  }, []);

  return (
    <StyledContainer>
      <ListContainer>
        <StyledAddButton>+ 암장 등록</StyledAddButton>
        <StyledCenterListContainer>
          {centerList?.results.map((result) => (
            <CenterList onClick={onClickCenter} {...result} />
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
