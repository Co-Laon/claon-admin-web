import { atom } from 'recoil';
import { CurrentCenter } from './type';

export const currentCenterInfo = atom<CurrentCenter>({
  key: 'currentCenter',
  default: {
    id: undefined,
    name: undefined,
  },
});
