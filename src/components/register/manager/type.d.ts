export interface WeekTimeTableFormProps {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  formKey: string;
  error?: FieldError<FieldValues>;
}
