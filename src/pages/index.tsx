import { IconButton, Box, Container as MContainer } from '@mui/material';
import styled from '@emotion/styled';
import GoogleLogo from '@/assets/google_login.svg';
import KakaoLogo from '@/assets/kakao_login.svg';
import ClaonLogo from '@/assets/claon_login_logo.svg';
import { signIn } from 'next-auth/react';
import { useOAuthSignIn } from '@/hooks/queries/login/useOAuthSignIn';
import { useEffect } from 'react';
import Loading from '@/components/common/Loading/Loading';

const LoginBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 20rem;
  height: 20rem;
  padding: 1.25rem 0 3.125rem;
  border-radius: 1.5rem;
`;

const Text = styled.p`
  font-size: 1.25rem;
  color: black;
  text-align: center;
`;

const Container = styled(MContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function Login() {
  const { isSignInClaonLoading, signInClaon, session } = useOAuthSignIn();
  useEffect(() => {
    if (session) {
      const { provider } = session;
      signInClaon(provider);
    }
  }, [session]);

  if (isSignInClaonLoading) {
    return <Loading />;
  }

  return (
    <main>
      <Container maxWidth="sm" fixed sx={{ bgcolor: '#f2f2f2' }}>
        <LoginBox>
          <ClaonLogo />
          <div>
            <Text>
              간편하게 로그인하고
              <br />
              클라온을 시작해 보세요!
            </Text>
          </div>
          <div>
            <IconButton onClick={() => signIn('google')}>
              <GoogleLogo />
            </IconButton>
            <IconButton onClick={() => signIn('kakao')}>
              <KakaoLogo />
            </IconButton>
          </div>
        </LoginBox>
      </Container>
    </main>
  );
}
