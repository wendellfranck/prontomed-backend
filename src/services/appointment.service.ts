import prisma from "../database/prisma";
import { Prisma } from "../generated/prisma/client";

interface CreateAppointmentDTO {
    patientId: string;
    dateTime: string;
}

export class AppointmentService {
    async create(data: CreateAppointmentDTO) {
        try {
          return await prisma.appointment.create({
            data: {
              patientId: data.patientId,
              dateTime: new Date(data.dateTime),
            },
          });
        } catch (error) {
          if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2002"
          ) {
            throw new Error("Já existe um agendamento nesse horário.");
          }
    
          throw error;
        }
    }

    async list() {
        return prisma.appointment.findMany();
    }

    async findById(id: string) {
        return prisma.appointment.findUnique({
            where: {
                id,
            }
        });
    }

    async update(id: string, data: Partial<CreateAppointmentDTO>) {
        return prisma.appointment.update({
            where: {id},
            data: {
                patientId: data.patientId,
                dateTime: data.dateTime ? new Date(data.dateTime) : undefined,
            },
        });
    }

    async delete(id: string) {
        return prisma.appointment.delete({
            where: {id},
        });
    }
}