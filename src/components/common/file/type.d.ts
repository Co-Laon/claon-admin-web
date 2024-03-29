import { ChangeEvent } from 'react';

export interface DragDropProps {
  onChange: (e: File[]) => void;
}

export interface FileListProps {
  name: string;
  onDelete: () => void;
}

export interface ImageUploadProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onDelete?: () => void;
  name?: string;
  src?: string;
}
