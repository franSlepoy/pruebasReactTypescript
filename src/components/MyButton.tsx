import { Children, ReactNode } from "react";
import { Button } from "react-bootstrap";
type variant = "primary" | "secondary" | "warning";
type buttonType = "button" | "submit";
type Props = {
  variant?: string;
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: buttonType;
};

const MyButton = ({
  variant = "primary",
  children,
  onClick,
  type = "button",
}: Props) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      variant={`${variant}`}
      style={{ margin: 20 }}
    >
      {children}
    </Button>
  );
};

export default MyButton;
