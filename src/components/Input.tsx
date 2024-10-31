import { ReactNode } from "react";
import { Button, Form } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  children: ReactNode;
};

const Input = ({ name, children }: Props) => {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);
  
  return (
    <div>
      <Form.Label htmlFor={name}>{children}</Form.Label>
      <Form.Control {...register(name)} type="text" id={name} />
      {error?.message && (
        <Form.Text id="passwordHelpBlock" muted>
          {error?.message}
        </Form.Text>
      )}
    </div>
  );
};

export default Input;
