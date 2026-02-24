import request from "supertest";
import app from "../app";
import prisma, { pool } from "../database/prisma";

describe("Consultation Notes", () => {
    let appointmentId: string;

    beforeAll(async () => {
        const patient = await prisma.patient.create({
            data: {
                name: "Paciente Notes",
                birthDate: new Date("1990-01-01"),
                sex: "M",
                height: 1.8,
                weight: 75,
            },
        });
    
        const appointment = await prisma.appointment.create({
            data: {
                patientId: patient.id,
                dateTime: new Date().toISOString()
            },
        });

        appointmentId = appointment.id;
    });

    it("should create a note", async () => {
        const response = await request(app)
        .post(`/appointments/${appointmentId}/notes`)
        .send({ note: "Paciente apresentou melhora." });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
    });

    afterAll(async () => {
        await prisma.$disconnect();
        await pool.end();
    });
});