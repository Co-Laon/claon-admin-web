import NotFound from '@/assets/NotFound';
import Error from '@/components/common/error/Error';

function NotFoundPage() {
  return (
    <Error
      description="입력하신 페이지는 사라졌거나 변경되었어요."
      image={<NotFound />}
      title="요청 페이지를 찾을 수 없어요."
    />
  );
}
export default NotFoundPage;
