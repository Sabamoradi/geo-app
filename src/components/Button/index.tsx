import { StyledButton } from "./StyledButton";

interface Props {
  title?: string;
  onClick?: any;
  icon?: string;
  loading?: boolean;
  disabled?: boolean;
  contentClassName?: string;
  width?: string;
}

const Button = (props: Props) => {
  const { title, onClick, loading, icon, disabled, contentClassName, width } =
    props;
  return (
    <StyledButton
      className={`button_wrapper ${contentClassName}`}
      onClick={onClick}
      disabled={disabled || loading}
      style={{ width: width }}
    >
      {icon && <i className={icon} />}
      {loading ? "loading" : title}
    </StyledButton>
  );
};

export default Button;
