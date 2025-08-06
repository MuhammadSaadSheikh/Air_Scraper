import {
  useForm,
  FieldValues,
  useFormState,
  FormProvider,
} from 'react-hook-form';
import { ZodSchema } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { forwardRef, useImperativeHandle } from 'react';
import RenderInput from './RenderInputs';
import CustomButton from '../CustomButton';

interface CustomFormProps {
  inputs: any;
  schema: ZodSchema;
  buttonTitle: string;
  children?: React.ReactNode;
  onSubmit: (data: any) => void;
  defaultValues?: FieldValues;
}

const Form = forwardRef(
  (
    {
      schema,
      inputs,
      onSubmit,
      children,
      defaultValues,
      buttonTitle,
    }: CustomFormProps,
    ref,
  ) => {
    const {
      formState: { errors: _ },
      ...form
    } = useForm({
      resolver: zodResolver(schema),
      defaultValues,
      mode: 'onChange',
    });

    const formState = useFormState({ control: form.control });

    useImperativeHandle(ref, () => {
      return {
        getState: () => formState,
      };
    });

    return (
      <FormProvider {...{ formState, ...form }}>
        {inputs.map((input: any, idx: number) => (
          <RenderInput key={idx.toString()} {...input} />
        ))}
        {children}
        <CustomButton
          title={buttonTitle}
          onPress={form.handleSubmit(onSubmit)}
        />
      </FormProvider>
    );
  },
);

export default Form;
