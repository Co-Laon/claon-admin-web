import { useTestSignIn } from '@/hooks/queries/login/useTestSignIn';
import styled from '@emotion/styled';
import { useCallback, useRef } from 'react';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function TestSignIn() {
  const ref = useRef<HTMLInputElement>(null);
  const { signIn } = useTestSignIn();

  const onClickButton = useCallback(() => {
    signIn(ref.current?.value as string);
  }, []);

  return (
    <Container>
      <input ref={ref} />
      <button type="button" onClick={onClickButton}>
        submit
      </button>
    </Container>
  );
}
export default TestSignIn;
