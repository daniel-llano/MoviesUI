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
  onClose: () => void;
}

const Alert = ({ variant = "danger", children, onClose }: Props) => {
  return (
    <div
      className={"alert alert-" + variant + " alert-dismissible fade show"}
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
