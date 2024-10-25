import { useState } from 'react';
import { FormControl, FormFloating, FormGroup, FormLabel, FormText } from 'react-bootstrap';
import Feedback from 'react-bootstrap/esm/Feedback';
import { Controller } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
const PasswordFormInput = ({
  name,
  containerClass,
  control,
  helpText,
  floating,
  id,
  label,
  noValidate,
  ...other
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return <Controller name={name} defaultValue={''} control={control} render={({
    field,
    fieldState
  }) => floating ? <FormFloating className={`input-floating-label ${containerClass ?? ''}`}>
            <FormControl id={id ?? name} type={showPassword ? 'text' : 'password'} {...other} {...field} isInvalid={Boolean(fieldState.error?.message)} />
            {label && <label htmlFor={id ?? name}>{label}</label>}
            <span className="d-flex position-absolute top-50 end-0 translate-middle-y p-0 pe-2 me-2" onClick={() => setShowPassword(!showPassword)}>
              {!fieldState.error && (showPassword ? <FaEyeSlash size={20} className="cursor-pointer" /> : <FaEye size={18} className="cursor-pointer" />)}
            </span>
            {helpText && <FormText id={`${id}-help`}>{helpText}</FormText>}
            {!noValidate && fieldState.error?.message && <Feedback type="invalid">{fieldState.error?.message}</Feedback>}
          </FormFloating> : <FormGroup className={containerClass ?? ''}>
            {label && <FormLabel>{label}</FormLabel>}
            <div className="position-relative">
              <FormControl id={id} type={showPassword ? 'text' : 'password'} {...other} {...field} isInvalid={Boolean(fieldState.error?.message)} />
            {!noValidate && fieldState.error?.message && <Feedback type="invalid">{fieldState.error?.message}</Feedback>}
              <span className="d-flex position-absolute top-50 end-0 translate-middle-y p-0 pe-2 me-2" onClick={() => setShowPassword(!showPassword)}>
                {!fieldState.error && (showPassword ? <FaEyeSlash size={20} className="cursor-pointer" /> : <FaEye size={18} className="cursor-pointer" />)}
              </span>
            </div>
            {helpText && <FormText id={`${id}-help`}>{helpText}</FormText>}
          </FormGroup>} />;
};
export default PasswordFormInput;