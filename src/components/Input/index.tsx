import React from "react";
import { Container, StyledInput } from "./StyledInput";

interface Props {
  placeholder?: string;
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  type: string;
  isInvalid?: boolean;
  maxLength?: number;
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  width?:string;
  height?:string;
}

const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { placeholder, value, onChange, autoFocus, type, isInvalid, maxLength, onFocus,onKeyUp,width,height, ...rest } = props;
  return (
    <Container className="input_container">
      <StyledInput
        ref={ref}
        className={`input_wrapper ${(isInvalid && value !== "") && "input_error"}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
        type={type}
        maxLength={maxLength}
        onFocus={onFocus}
        onKeyUp={onKeyUp}
        style={{ width: `${width}px` , height:`${height}px`}}
        {...rest}
      />
    </Container>
  );
});

export default Input;
