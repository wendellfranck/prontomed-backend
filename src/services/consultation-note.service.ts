import prisma from "../database/prisma";

interface CreateNoteDTO {
  appointmentId: string;
  note: string;
}

export class ConsultationNoteService {
  async create(data: CreateNoteDTO) {
    return prisma.consultationNote.create({
      data: {
        appointmentId: data.appointmentId,
        note: data.note,
      },
    });
  }

  async listByPatient(patientId: string) {
    return prisma.consultationNote.findMany({
      where: {
        appointment: {
          patientId: patientId,
        },
      },
      include: {
        appointment: true,
      },
    });
  }
}