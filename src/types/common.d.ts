export interface HeaderDepthProps {
  depth1Icon: string;
  depthArray: string[];
}

export interface LNBMenuDepth2 {
  name: string;
  url: string;
}

export interface LNBMenuDepth1 {
  name: string;
  icon: string;
  url: string;
  children: LNBMenuDepth2[];
}

export type LNBMenu = LNBMenuDepth1[];

export interface SelectedLNBMenu {
  name: string;
  icon: string;
  url: string;
  children: LNBMenuDepth2;
}

export enum Auth {
  MANAGER = 'manager',
  INSTRUCTOR = 'instructor',
}
