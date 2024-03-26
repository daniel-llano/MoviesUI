import classNames from "classnames";
import { ReactNode } from "react";

type Variant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

interface Props {
  variant?: Variant;
  children: ReactNode;
  handler: () => void;
}

const Button = ({ variant = "primary", children, handler }: Props) => {
  const getButtonStyle = (variant: Variant) => {
    switch (variant) {
      case "primary":
        return "btn-primary";
      case "secondary":
        return "btn-secondary";
      case "success":
        return "btn-success";
      case "danger":
        return "btn-danger";
      case "warning":
        return "btn-warning";
      case "info":
        return "btn-info";
      case "light":
        return "btn-light";
      case "dark":
        return "btn-dark";
      default:
        return "btn-primary";
    }
  };
  const buttonStyle = getButtonStyle(variant);
  return (
    <button
      type="button"
      className={classNames("btn", buttonStyle)}
      onClick={() => handler()}
    >
      {children}
    </button>
  );
};

export default Button;
