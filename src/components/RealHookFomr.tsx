import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { userSchema, userForm } from "../schemas/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Tipo de datos del formulario
/* type Form = {
  name: string;
  password: string;
}; */

// Componente principal
const RealHookForm = () => {
  // Hook de formulario y configuración del resolver de Zod
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userForm>({
    resolver: zodResolver(userSchema),
    mode: "onChange", // Valida en cada cambio
  });

  // Función que maneja el envío de datos válidos
  const onSubmit = (data: userForm) => {
    console.log("Datos enviados:", data);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} style={{ padding: 30 }}>
        {/* Campo de Nombre */}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre"
            {...register("name")} // Registro del campo "name"
          />
          {/* Muestra el mensaje de error */}
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </Form.Group>

        {/* Campo de Contraseña */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password")} // Registro del campo "password"
          />
          {/* Muestra el mensaje de error */}
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default RealHookForm;