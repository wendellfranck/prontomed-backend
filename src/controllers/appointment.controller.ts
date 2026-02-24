import { Request, Response } from "express";
import { AppointmentService } from "../services/appointment.service";
import { createAppointmentSchema, updateAppointmentSchema } from "../validations/appointment.validation";

const service = new AppointmentService();

interface Params {
    id: string;
}

export class AppointmentController {
    async create(req: Request, res: Response) {
        try {
          const parsedData = createAppointmentSchema.parse(req.body);
          const appointment = await service.create(parsedData);
          return res.status(201).json(appointment);
        } catch (error: any) {
          return res.status(400).json({ message: error.errors ?? error.message });
        }
    }

    async list(req: Request, res: Response) {
        const appointments = await service.list();
        return res.json(appointments);
    }

    async update(req: Request<Params>, res: Response) {
        try {
          const parsedData = updateAppointmentSchema.parse(req.body);
          const appointment = await service.update(req.params.id, parsedData);
          return res.json(appointment);
        } catch (error: any) {
          return res.status(400).json({ message: error.errors ?? error.message });
        }
    }

    async delete(req: Request<Params>, res: Response) {
        try {
          await service.delete(req.params.id);
          return res.status(204).send();
        } catch {
            return res.status(404).json({ message: "Agendamento não encontrado" });
        }
    }
}