import { selector } from 'recoil';
import { commonStepState } from './atom';

export const nickanmeState = selector({
  key: 'nicknameState',
  get: ({ get }) => get(commonStepState).nickname,
});
