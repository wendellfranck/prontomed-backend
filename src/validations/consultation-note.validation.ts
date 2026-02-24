import { z } from "zod";

export const createNoteSchema = z.object({
  note: z.string().min(1, "A anotação não pode ser vazia"),
});