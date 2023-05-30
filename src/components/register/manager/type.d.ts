import {
  FieldError,
  FieldValues,
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormUnregister,
} from 'react-hook-form';
import { CenterNameResponse } from '../../../types/common/center';

export interface OperatingTimeTableFormProps {
  register: UseFormRegister<FieldValues>;
  unregister: UseFormUnregister<FieldValues>;
  formKey: string;
  error?: FieldError<FieldValues>;
}

export interface ColorContainerProps extends OutlinedInputProps {
  helperText?: string;
  label: string;
  isRequire?: string | boolean;
  formPorps?: UseFormRegisterReturn;
  error?: FieldError<FieldValues>;
  onClick: () => void;
  children: React.ReactNode;
}

export interface ImageModalProps {
  title: string;
  open: boolean;
  onClose: () => void;
  onComplete: (list: File[]) => void;
}

export interface HoldTypeSelectProps {
  title: JSX.Element;
  checkboxes: string[];
  defaultValue?: number;
  onInputChange?: (idx: number) => void;
}

export interface HoldDifficultyFormItemProps {
  register?: UseFormRegister<FieldValues>;
  idx?: number;
  formKey?: string;
  error?: FieldErrors<FieldValues>;
  onClickTextField?: (key: string) => void;
}

export interface ColorPickerModalProps {
  open: boolean;
  onClose: () => void;
  onChangeComplete: (color: ColorResult) => void;
}

export interface DeleteModalProps {
  onClickConfirm?: () => void;
  onClickCancel?: () => void;
}

export interface ChipFormProps {
  items: string[];
  formKey: string;
  setValue: UseFormSetValue<FieldValues>;
}

export interface FeeInfoFormItemProps {
  register?: UseFormRegister<FieldValues>;
  idx?: number;
  formKey?: string;
  error?: FieldErrors<FieldValues>;
}

export interface HoldColorFormItemProps {
  getValues?: UseFormGetValues<FieldValues>;
  register?: UseFormRegister<FieldValues>;
  idx?: number;
  formKey?: string;
  error?: FieldErrors<FieldValues>;
  onClickTextField?: (key: string) => void;
}

export interface SearchCenterModalProps {
  open: boolean;
  onClose: () => void;
  onComplete: (center: CenterNameResponse) => void;
}

export interface WallInfoFormItemProps {
  register?: UseFormRegister<FieldValues>;
  idx?: number;
  formKey?: string;
  error?: FieldErrors<FieldValues>;
}
