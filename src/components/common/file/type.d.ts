import { ChangeEvent } from 'react';

export interface DragDropProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface FileListProps {
  name: string;
  onDelete: () => void;
}
