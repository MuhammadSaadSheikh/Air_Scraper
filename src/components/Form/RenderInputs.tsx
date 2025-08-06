import React from 'react';
import CustomTextInput from './CustomTextInput';
import { Controller, useFormContext } from 'react-hook-form';

type RenderInputsProps = {
  name: string;
  label?: string;
  placeholder: string;
  component: React.ElementType;
  rest: any;
};

const RenderInput = ({
  name,
  label,
  component,
  placeholder,
  ...rest
}: RenderInputsProps) => {
  const form = useFormContext();
  const Component = component ?? CustomTextInput;

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { value, onChange }, fieldState }) => {
        return (
          <Component
            value={value}
            label={label}
            onChange={onChange}
            placeholder={placeholder}
            error={fieldState?.error ? fieldState?.error?.message : ''}
            {...rest}
          />
        );
      }}
    />
  );
};

export default RenderInput;
