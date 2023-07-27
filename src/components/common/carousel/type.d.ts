export interface ImageListCarouselProps {
  images: (File | string)[];
  width: number;
  height?: number;
  deleteable?: boolean;
  onClickDeleteConfirm?: (index: number) => void;
}
