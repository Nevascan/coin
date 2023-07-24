import * as z from "zod";

export const ValidationSchema = z.object({
  email: z
    .string()
    .nonempty("Campo obrigatório")
    .email("Coloque um email válido"),
  password: z
    .string()
    .max(30, "Máximo de 30 caracteres")
    .nonempty("Campo obrigatório"),
});
