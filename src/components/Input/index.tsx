import { Container, StyledInput } from "./StyledInput";

interface Props {
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  type: string;
  isInvalid?: boolean;
}

const Input = (props: Props) => {
  const { placeholder, value, onChange, autoFocus, type ,isInvalid } = props;
  return (
    <Container className="input_container">
      <StyledInput
        className={`input_wrapper ${(isInvalid && value !== "") && "input_error"}`}
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
