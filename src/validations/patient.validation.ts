import { z } from "zod";

export const createPatientSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  phone: z.string().min(8, "Telefone inválido").optional(),
  email: z.string().email("Email inválido").optional(),
  birthDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Data de nascimento inválida",
  }),
  sex: z.enum(["M", "F"], {
    message: "Sexo deve ser M ou F",
  }),
  height: z.number().positive("Altura deve ser positiva"),
  weight: z.number().positive("Peso deve ser positivo"),
});

export const updatePatientSchema = createPatientSchema.partial();