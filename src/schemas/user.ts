import { z } from "zod";

// Esquema de validación Zod
export const userSchema = z.object({
    name: z
      .string({ required_error: "El nombre es requerido" })
      .min(3, { message: "Mínimo de 3 caracteres" }),
    password: z
      .string({ required_error: "La contraseña es requerida" })
      .min(3, { message: "Mínimo de 3 caracteres" }),
  });

  export type useForm = z.infer <typeof userSchema>;