import { ChangeEvent } from 'react';

export interface ProfileButtonProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  img?: File;
}
