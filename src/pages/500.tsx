import InternalServerError from '@/assets/InternalServerError';
import Error from '@/components/common/error/Error';

function InternalServerErrorPage() {
  return (
    <Error
      title="잠시후 다시 확인해주세요."
      description="서비스에 문제가 생겨 연결할 수 없어요."
      image={<InternalServerError />}
    />
  );
}

export default InternalServerErrorPage;
