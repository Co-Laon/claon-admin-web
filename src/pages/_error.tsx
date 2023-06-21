import Unauthorized from '@/assets/Unauthorized';
import Error from '@/components/common/error/Error';

function ErrorPage() {
  return (
    <Error
      title="페이지에 접근할 수 없어요."
      description="해당 페이지에 접근 권한이 없어요."
      image={<Unauthorized />}
    />
  );
}
export default ErrorPage;
