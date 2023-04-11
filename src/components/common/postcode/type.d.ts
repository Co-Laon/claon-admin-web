import { DaumPostcodeEmbedProps } from 'react-daum-postcode';
import { PostcodeOptions } from 'react-daum-postcode/lib/loadPostcode';

export interface PostcodeEmbedProps
  extends Omit<DaumPostcodeEmbedProps, 'autoClose'> {
  options?: PostcodeOptions;
}

export interface PostCodeModalProps {
  open: boolean;
  onComplete?: (data?: string) => void;
  onSearch?: (data?: Search) => void;
  onClose?: (data?: State) => void;
  defaultQuery?: string;
}
