import Pending from '@/components/common/Pending';
import { useFindCenterNames } from '@/hooks/queries/center/useFindCenter';
import { useGetCenterFees } from '@/hooks/queries/membership/useGetCenterFees';
import MembershipLayout from '@/layouts/MembershipLayout';
import RootLayout from '@/layouts/RootLayout';
import { currentCenterInfo } from '@/recoil/membership/atom';
import { useRouter } from 'next/router';
import { ReactElement, useCallback, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

function MembershipDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { data: centerFees } = useGetCenterFees(id as string);
  const currentCenter = useRecoilValue(currentCenterInfo);

  const onClickButton = useCallback(() => {
    router.push(`/membership/${id}/register`);
  }, []);

  useEffect(() => {
    console.log('currentCenter', currentCenter);
  }, [currentCenter]);

  return (
    <div>
      {centerFees?.center_fee.length === 0 ? (
        <Pending
          title={`${currentCenter.name}`}
          buttonLabel="회원권 정보 등록하기"
          description="문의사항은 help.claon@gmail.com으로 연락해주세요."
          subTitle="암장에 등록된 회원권이 없어요."
          onClickButton={onClickButton}
        />
      ) : (
        <div />
      )}
    </div>
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
