import React, { useEffect } from 'react';
import { Field, ErrorMessage } from 'formik';
import 'app/components/FormField/FormField.css';

type SetFieldValue = (
  field: string,
  value: any,
  shouldValidate?: boolean,
) => void;

interface FormFieldType {
  label?: string;
  placeholder: string;
  name: string;
  type: string;
  errors: any;
  touched: any;
  disabled?: boolean;
  as?: string;
  value?: string;
  savedEmail?: string;
  setFieldValue?: SetFieldValue;
}

const FormField = (props: FormFieldType) => {
  const {
    label,
    placeholder,
    name,
    type,
    errors,
    touched,
    disabled,
    as,
    value,
    savedEmail,
    setFieldValue,
  } = props;
  const isInvalid = errors[name] && touched[name];
  const hasValue = value && value.trim().length > 0;

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  const savedId = localStorage.getItem('savedEmail');

  useEffect(() => {
    if (setFieldValue && savedId) {
      setFieldValue('email', savedId);
    }
  }, []);

  return (
    <div>
      <label htmlFor={name} className="label">
        {label}
      </label>
      {hasValue === undefined ? (
        <Field
          placeholder={placeholder}
          name={name}
          type={type}
          disabled={disabled}
          as={as}
          onKeyPress={handleKeyUp}
          className={
            'form-group form-control form-control-lg' +
            (isInvalid ? ' is-invalid' : '')
          }
        />
      ) : (
        <Field
          placeholder={placeholder}
          name={name}
          type={type}
          disabled={disabled}
          as={as}
          onKeyPress={handleKeyUp}
          value={value}
          className={
            'form-group form-control form-control-lg' +
            (!hasValue && isInvalid ? ' is-invalid' : '')
          }
        />
      )}

      {!hasValue && (
        <ErrorMessage
          name={name}
          component="div"
          className="invalid-feedback"
        />
      )}
    </div>
  );
};

export default FormField;
