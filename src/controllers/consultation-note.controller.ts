import { Request, Response } from "express";
import { ConsultationNoteService } from "../services/consultation-note.service";
import { createNoteSchema } from "../validations/consultation-note.validation";

const service = new ConsultationNoteService();

interface Params {
  id: string;
}

export class ConsultationNoteController {
    async create(req: Request<Params>, res: Response) {
        try {
          const parsedBody = createNoteSchema.parse(req.body);
      
          const note = await service.create({
            appointmentId: req.params.id,
            note: parsedBody.note,
          });
      
          return res.status(201).json(note);
        } catch (error: any) {
          return res.status(400).json({ message: error.errors ?? error.message });
        }
    }

    async listByPatient(req: Request<Params>, res: Response) {
        const notes = await service.listByPatient(req.params.id);
        return res.json(notes);
    }
}