export interface LNBMenuDepth2 {
  name: string;
  url: string;
}

export interface LNBMenuDepth1 {
  name: string;
  icon: string;
  children: LNBMenuDepth2[];
  isOpened: boolean;
}

export type LNBMenu = LNBMenuDepth1[];

export enum Auth {
  MANAGER = 'manager',
  INSTRUCTOR = 'instructor',
}
