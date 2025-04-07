import { useFormContext, Controller, FieldValues, Path } from "react-hook-form";

import { FieldWrapper, StyledInput, ErrorMessage } from "./styles";

type RHFTextFieldProps<T extends FieldValues> = {
  name: Path<T>;
  placeholder?: string;
  type?: string;
};

export default function RHFTextField<T extends FieldValues>({
  name,
  placeholder,
  type = "text"
}: RHFTextFieldProps<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FieldWrapper>
          <StyledInput
            {...field}
            type={type}
            placeholder={placeholder}
            hasError={!!error}
          />
          {error && <ErrorMessage>{error.message}</ErrorMessage>}
        </FieldWrapper>
      )}
    />
  );
}
