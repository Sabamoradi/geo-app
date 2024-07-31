import { useEffect, useState } from "react";
import { Container, StyledInput } from "./StyledInput";

interface Props {
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  type:string
}

const Input = (props:Props) => {
  const {placeholder,value,onChange,autoFocus,type} = props
  return (
    <Container className="input_container">
      <StyledInput
        className="input_wrapper"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
        type={type}
      />
    </Container>
  );
};

export default Input;
