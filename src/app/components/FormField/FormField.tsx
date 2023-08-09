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
  values?: any;
  place?: string;
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
    setFieldValue,
    values,
    place,
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

  const checkPasswordConditions = (password: string) => {
    const conditions = [
      /[A-Za-z\u3131-\uD79D]/.test(password),
      /\d/.test(password),
      /[@$!%*?&]/.test(password),
    ];

    return conditions;
  };

  const conditionResults = checkPasswordConditions(values?.password);

  return (
    <>
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
      {name === 'password' && place !== 'login' && (
        <ul className="password-check">
          <li
            className={
              conditionResults[0] ? 'condition-met' : 'condition-not-met'
            }
          >
            문자 포함
          </li>

          <li
            className={
              conditionResults[1] ? 'condition-met' : 'condition-not-met'
            }
          >
            숫자 포함
          </li>
          <li
            className={
              conditionResults[2] ? 'condition-met' : 'condition-not-met'
            }
          >
            특수 문자 포함
          </li>
        </ul>
      )}
    </>
  );
};

export default FormField;
