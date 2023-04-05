export interface WeekTimeTableFormProps {
  register: UseFormRegister<FieldValues>;
  unregister: UseFormUnregister<FieldValues>;
  formKey: string;
  error?: FieldError<FieldValues>;
}
