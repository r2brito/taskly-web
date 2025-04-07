import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import DatePicker from "react-datepicker";
import { StyledDatePickerInput } from "./styles";
import "react-datepicker/dist/react-datepicker.css";

interface RHFDatePickerProps {
  name: string;
  placeholder?: string;
}

export default function RHFDatePicker({
  name,
  placeholder
}: RHFDatePickerProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <DatePicker
          id={name}
          placeholderText={placeholder}
          selected={field.value ? new Date(field.value) : null}
          onChange={(date) => field.onChange(date)}
          dateFormat="dd/MM/yyyy"
          autoComplete="off"
          customInput={<StyledDatePickerInput />}
        />
      )}
    />
  );
}
