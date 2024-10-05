import { FormGroup, FormLabel, FormSelect, FormText } from 'react-bootstrap';
import Feedback from 'react-bootstrap/esm/Feedback';
import { Controller } from 'react-hook-form';
const SelectFormInput = ({
  name,
  containerClass,
  children,
  control,
  helpText,
  id,
  label,
  noValidate,
  ...other
}) => {
  return <Controller name={name} defaultValue={''} control={control} render={({
    field,
    fieldState
  }) => <FormGroup className={containerClass ?? ''}>
          {label && <FormLabel htmlFor={id ?? name}>{label}</FormLabel>}
          <FormSelect id={id ?? name} {...other} {...field} isInvalid={Boolean(fieldState.error?.message)}>
            {children}
          </FormSelect>
          {helpText && <FormText id={`${name}-help`} muted>
              {helpText}
            </FormText>}
          {!noValidate && fieldState.error?.message && <Feedback type="invalid">
              {fieldState.error?.message}
            </Feedback>}
        </FormGroup>} />;
};
export default SelectFormInput;