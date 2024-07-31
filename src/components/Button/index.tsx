import { StyledButton } from "./StyledButton";

interface Props {
  title: string;
  onClick?: any;
  icon?: string;
  loading?: boolean;
  disabled?: boolean;
  contentClassName?: string;
}

const Button = (props: Props) => {
  const {title, onClick, loading, icon, disabled,contentClassName } = props;
  return (
    <StyledButton
      className={`button_wrapper ${contentClassName}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {icon && <i className={icon} />}
      {loading ? "loading" : title}
    </StyledButton>
  );
};

export default Button;
