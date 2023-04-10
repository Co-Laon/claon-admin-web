import { CarouselProps } from 'react-material-ui-carousel/dist/components/types';

export interface ImageListCarouselProps extends CarouselProps {
  images: string[];
  width: number;
  height?: number;
  deleteable?: boolean;
  onClickDeleteConfirm?: (index: number) => void;
}