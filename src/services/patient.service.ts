import prisma from "../database/prisma";

interface CreatePatientDTO {
    name: string;
    phone?: string;
    email?: string;
    birthDate: string;
    sex: string;
    height: number;
    weight: number;
}

export class PatientService {
    async create(data: CreatePatientDTO) {
        return prisma.patient.create({
            data: {
                name: data.name,
                phone: data.phone,
                email: data.email,
                birthDate: new Date(data.birthDate),
                sex: data.sex,
                height: data.height,
                weight: data.weight,
            },
        })
    }

    async list() {
        return prisma.patient.findMany({
            where: { deletedAt: null},
        });
    }

    async findById(id: string) {
        return prisma.patient.findUnique({
            where: {
                id,
                deletedAt: null,
            }
        });
    }

    async update(id: string, data: Partial<CreatePatientDTO>) {
        return prisma.patient.update({
            where: {id},
            data,
        });
    }

    async delete(id: string) {
        return prisma.patient.update({
            where: {id},
            data: {
                deletedAt: new Date(),
                name: "ANONIMIZADO",
                email: null,
                phone: null
            },
        });
    }
}