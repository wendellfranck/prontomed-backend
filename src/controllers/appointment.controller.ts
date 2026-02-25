import { Request, Response } from "express";
import { AppointmentService } from "../services/appointment.service";
import { createAppointmentSchema, updateAppointmentSchema } from "../validations/appointment.validation";
import { Prisma } from "../generated/prisma/client";

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
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            
            return res.status(400).json({ message: "Unexpected error" });
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
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            
            return res.status(400).json({ message: "Unexpected error" });
        }
    }

    async delete(req: Request<Params>, res: Response) {
        try {
            await service.delete(req.params.id);
            return res.status(204).send();
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
            
                if (error.code === "P2025") {
                  return res.status(404).json({
                    message: "Agendamento não encontrado",
                  });
                }
      
            
                if (error.code === "P2003") {
                  return res.status(400).json({
                    message:
                      "Não é possível excluir um agendamento que possui anotações vinculadas",
                  });
                }
            }
      
            return res.status(500).json({
                message: "Erro interno no servidor",
            });
        }
    }
}