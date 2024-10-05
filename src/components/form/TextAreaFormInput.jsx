import { FormControl, FormFloating, FormGroup, FormLabel, FormText } from 'react-bootstrap';
import Feedback from 'react-bootstrap/esm/Feedback';
import { Controller } from 'react-hook-form';
const TextAreaFormInput = ({
  name,
  containerClass,
  control,
  helpText,
  floating,
  id,
  label,
  rows,
  noValidate,
  labelClass,
  combined,
  ...other
}) => {
  return <Controller name={name} defaultValue={''} control={control} render={({
    field,
    fieldState
  }) => combined ? <FormControl as="textarea" rows={rows ?? 3} id={id ?? name} {...other} {...field} isInvalid={Boolean(fieldState.error?.message)} /> : floating ? <FormFloating className={`input-floating-label ${containerClass ?? ''}`}>
              <FormControl as="textarea" rows={rows ?? 3} id={id ?? name} {...other} {...field} isInvalid={Boolean(fieldState.error?.message)} />
              {label && <label htmlFor={id ?? name} className={labelClass}>{label}</label>}
              {helpText && <FormText id={`${id ?? name}-help`}>{helpText}</FormText>}
              {!noValidate && fieldState.error?.message && <Feedback type="invalid">{fieldState.error?.message}</Feedback>}
            </FormFloating> : <FormGroup className={containerClass ?? ''}>
              {label && <FormLabel htmlFor={id ?? name} className={labelClass}>{label}</FormLabel>}
              <FormControl as="textarea" rows={rows ?? 3} id={id ?? name} {...other} {...field} isInvalid={Boolean(fieldState.error?.message)} />
              {helpText && <FormText id={`${id ?? name}-help`}>{helpText}</FormText>}
              {!noValidate && fieldState.error?.message && <Feedback type="invalid">{fieldState.error?.message}</Feedback>}
            </FormGroup>} />;
};
export default TextAreaFormInput;