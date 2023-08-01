import MembershipLayout from '@/layouts/MembershipLayout';
import RootLayout from '@/layouts/RootLayout';
import { ReactElement } from 'react';

function MembershipHome() {
  return <div />;
}

MembershipHome.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout>
      <MembershipLayout>{page}</MembershipLayout>
    </RootLayout>
  );
};
export default MembershipHome;
