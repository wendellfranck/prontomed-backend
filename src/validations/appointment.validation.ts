import { z } from "zod";

export const createAppointmentSchema = z.object({
  patientId: z.string().uuid("patientId deve ser um UUID válido"),
  dateTime: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Data da consulta inválida",
  }),
});

export const updateAppointmentSchema = createAppointmentSchema.partial();