import React from "react";
import { Form } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

type Props = {
  options: readonly string[];
  defaultMessage: string;
  label: string;
  name: string;
};

const Select = ({ options, defaultMessage, label, name }: Props) => {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Select {...register(name)}>
        <option>{defaultMessage}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </Form.Select>
      {error?.message && (
        <Form.Text  id="passwordHelpBlock" muted>
          {error?.message}
        </Form.Text>
      )}
    </>
  );
};

export default Select;
