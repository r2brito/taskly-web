import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Input, Label } from "./styles";

type RHFCheckboxProps = {
  name: string;
  label?: string;
};

export function RHFCheckbox({ name, label }: RHFCheckboxProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Label>
          <Input
            type="checkbox"
            {...field}
            checked={field.value}
          />
          {label && <span>{label}</span>}
        </Label>
      )}
    />
  );
}
