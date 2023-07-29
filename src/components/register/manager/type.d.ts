import {
  Control,
  FieldError,
  FieldValues,
  UseFormGetValues,
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormSetValue,
  UseFormUnregister,
} from 'react-hook-form';
import { WallListResponse } from '@/types/response/center';
import { CenterNameResponse } from '../../../types/common/center';

export interface TimeTablesProps {
  day_of_week: string;
  start_time: string;
  end_time: string;
}

export interface OperatingTimeTableFormProps {
  register: UseFormRegister<FieldValues>;
  unregister: UseFormUnregister<FieldValues>;
  formKey: string;
  error?: FieldError<FieldValues>;
  timeTables?: TimeTablesProps[];
  readOnly?: boolean;
  setValue?: UseFormSetValue<FieldValues>;
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
  onComplete: (list: (string | File)[]) => void;
  defaultImage?: string[];
}

export interface HoldTypeSelectProps {
  title: JSX.Element;
  checkboxes: string[];
  defaultValue?: number;
  onInputChange?: (idx: number) => void;
  readOnly?: boolean;
}

export interface HoldDifficultyFormItemProps {
  register?: UseFormRegister<FieldValues>;
  idx?: number;
  formKey?: string;
  error?: FieldErrors<FieldValues>;
  onClickTextField?: (key: string) => void;
  readOnly?: boolean;
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
  value?: string[];
  readOnly?: boolean;
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
  readOnly?: boolean;
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
  value?: WallListResponse;
  readOnly?: boolean;
  control?: Control<FieldValues, any>;
}
