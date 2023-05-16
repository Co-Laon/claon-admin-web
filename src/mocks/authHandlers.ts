import { rest } from 'msw';
import { SignInResponse } from '@/types/login';
import {
  LectorRegister,
  ManagerRegister,
  RegisterResponse,
} from '@/types/register';
import { nickNameStore } from './mockData';

const authHandler = [
  // 로그인
  rest.post('/auth/:provider/sign-in', (req, res, ctx) => {
    const response: SignInResponse = {
      access_token: 'access_token',
      refresh_token: 'refresh_token',
      is_signed_up: false,
    };
    return res(ctx.json(response));
  }),

  // center 회원가입
  rest.post<ManagerRegister>('/auth/center/sign-up', async (req, res, ctx) => {
    const { profile } = await req.json<ManagerRegister>();

    const response: RegisterResponse = {
      is_proofed: true,
      profile,
    };
    return res(ctx.json(response));
  }),

  // lector 회원가입
  rest.post<LectorRegister>('/auth/lector/sign-up', async (req, res, ctx) => {
    const { profile } = await req.json<LectorRegister>();

    const response: RegisterResponse = {
      is_proofed: true,
      profile,
    };
    return res(ctx.json(response));
  }),

  // nickname 중복 체크
  rest.get('/auth/nickname/:nickname/is-duplicated', (req, res, ctx) => {
    const { nickname } = req.params;
    const isDuplicated = nickNameStore.has(`${nickname}`);
    const response = {
      is_duplicated: isDuplicated,
    };
    return res(ctx.json(response));
  }),
];

export default authHandler;
