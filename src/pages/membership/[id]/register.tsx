import MembershipRegister from '@/components/membership/MembershipRegister';
import MembershipLayout from '@/layouts/MembershipLayout';
import RootLayout from '@/layouts/RootLayout';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

function MembershipRegisterPage() {
  const router = useRouter();
  const { id } = router.query;
  return <MembershipRegister centerId={id as string} />;
}

MembershipRegisterPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <RootLayout>
      <MembershipLayout>{page}</MembershipLayout>
    </RootLayout>
  );
};

export default MembershipRegisterPage;
