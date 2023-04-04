import { rest } from 'msw';
import { SignInResponse } from '@/features/Login';

const authHandler = [
  rest.post('/auth/:provider/sign-in', (req, res, ctx) => {
    console.log('req: ', req);
    const response: SignInResponse = {
      access_token: 'access_token',
      refresh_token: 'refresh_token',
      is_signed_up: false,
      profile: {
        profile_image: 'profile_image',
        email: 'email',
        nickname: 'nickname',
        instagram_nickname: 'instagram_nickname',
        role: 'lector',
      },
    };
    return res(ctx.json(response));
  }),
];

export default authHandler;
