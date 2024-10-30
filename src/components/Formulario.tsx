import { Button, Form } from "react-bootstrap";
import { FormEvent, useState } from "react";

type Props = {};

const Formulario = (props: Props) => {
  const [user, setUser] = useState({ name: "", password: "" });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Datos del usuario:", user);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} style={{ padding: 30 }}>
        {/* Campo de Nombre */}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </Form.Group>

        {/* Campo de Contraseña */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Formulario;
