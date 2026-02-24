import { PatientService } from "../services/patient.service";
import { Request, Response } from "express";
import { createPatientSchema, updatePatientSchema } from "../validations/patient.validation";

const service = new PatientService();

interface Params {
    id: string;
}

export class PatientController {
    async create(req: Request, res: Response) {
        try {
          const parsedData = createPatientSchema.parse(req.body);
          const patient = await service.create(parsedData);
          return res.status(201).json(patient);
        } catch (error: any) {
          return res.status(400).json({ message: error.errors ?? error.message });
        }
    }

    async list(req: Request, res: Response) {
        const patients = await service.list();
        return res.json(patients);
    }

    async findById(req: Request, res: Response) {
        const patient = await service.create(req.body);
        return res.json(patient);
    }

    async update(req: Request<Params>, res: Response) {
        try {
          const parsedData = updatePatientSchema.parse(req.body);
          const patient = await service.update(req.params.id, parsedData);
          return res.json(patient);
        } catch (error: any) {
          return res.status(400).json({ message: error.errors ?? error.message });
        }
    }

    async delete(req: Request<Params>, res: Response) {
        await service.delete(req.params.id);
        return res.status(204).send();
    }
}