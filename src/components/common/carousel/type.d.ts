export interface ImageListCarouselProps {
  images: string[] | File[];
  width: number;
  height?: number;
  deleteable?: boolean;
  onClickDeleteConfirm?: (index: number) => void;
}
