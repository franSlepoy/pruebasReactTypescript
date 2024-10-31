import React from "react";
import { Form } from "react-bootstrap";

type Props = {
  options: readonly string[];
};

const Select = ({ options }: Props) => {
  return (
    <>
      <Form.Select
        style={{ marginTop: 15 }}
        aria-label="Default select example"
      >
        <option>Seleccione</option>
        {options.map((o) => (
          <option value={o}>{o}</option>
        ))}
      </Form.Select>
    </>
  );
};

export default Select;
