import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Container, ErrorMessage, Label, Select } from "./styles";

type RHFSelectProps = {
  name: string;
  children: React.ReactNode;
  label?: string;
  placeholder?: string;
};

export default function RHFSelect({
  name,
  children,
  label,
  placeholder
}: RHFSelectProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Container>
          {label && <Label htmlFor={name}>{label}</Label>}
          <Select
            id={name}
            {...field}
          >
            {placeholder && <option value="">{placeholder}</option>}
            {children}
          </Select>
          {error && <ErrorMessage>{error.message}</ErrorMessage>}
        </Container>
      )}
    />
  );
}
