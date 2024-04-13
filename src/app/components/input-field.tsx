'use client';

import React from 'react';
import { Field } from 'formik';
import clsx from 'clsx';

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

function InputField({ label, id, ...rest }: InputFieldProps) {
  return (
    <div className={'flex flex-col'}>
      {label && (
        <label htmlFor={id} className="mb-2 text-base caret-gray-900">
          {label}
        </label>
      )}

      <Field
        id={id}
        {...rest}
        className={clsx(
          `p-3 h-11 text-sm rounded border border-gray-300 shadow`
        )}
      />
    </div>
  );
}

export default InputField;
