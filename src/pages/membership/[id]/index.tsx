import Pending from '@/components/common/Pending';
import { useGetCenterFees } from '@/hooks/queries/membership/useGetCenterFees';
import MembershipLayout from '@/layouts/MembershipLayout';
import RootLayout from '@/layouts/RootLayout';
import { currentCenterInfo } from '@/recoil/membership/atom';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { ReactElement, useCallback, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

const Container = styled.div`
  height: 100%;
`;

function MembershipDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { data: centerFees } = useGetCenterFees(id as string);
  const currentCenter = useRecoilValue(currentCenterInfo);

  const onClickButton = useCallback(() => {
    router.push(`/membership/${id}/register`);
  }, []);

  return (
    <Container>
      {centerFees?.center_fee.length === 0 ? (
        <Pending
          title={`${currentCenter.name}`}
          buttonLabel="회원권 정보 등록하기"
          subTitle="암장에 등록된 회원권이 없어요."
          onClickButton={onClickButton}
        />
      ) : (
        <div />
      )}
    </Container>
  );
}

MembershipDetail.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout>
      <MembershipLayout>{page}</MembershipLayout>
    </RootLayout>
  );
};

export default MembershipDetail;
