/* eslint no-param-reassign: "error" */
import NextAuth, { AuthOptions } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import GoogleProvider from 'next-auth/providers/google';
import { CallbackToken, SessionWithToken } from './type';

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        (token as CallbackToken).accessToken = account.access_token;
        (token as CallbackToken).idToken = account.id_token;
      }
      return token as CallbackToken;
    },

    async session({
      session,
      token,
    }: {
      session: SessionWithToken;
      token: CallbackToken;
    }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      session.idToken = token.idToken;
      return session;
    },
  },
};

export default NextAuth(authOptions);
