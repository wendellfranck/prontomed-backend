import request from "supertest";
import app from "../app";
import prisma, { pool } from "../database/prisma";

describe("Appointment API", () => {
    beforeEach(async () => {
        await prisma.consultationNote.deleteMany();
        await prisma.appointment.deleteMany();
        await prisma.patient.deleteMany();
    });


    it("should not allow two appointments at the same time", async () => {
        const patient = await prisma.patient.create({
            data: {
              name: "Paciente Teste",
              birthDate: new Date("1990-01-01"),
              sex: "M",
              height: 1.8,
              weight: 75,
            },
        });
    
        const dateTime = new Date().toISOString();

        const first = await request(app).post("/appointments").send({
            patientId: patient.id,
            dateTime,
        });

        expect(first.status).toBe(201);

        const second = await request(app).post("/appointments").send({
            patientId: patient.id,
            dateTime,
        });

        expect(second.status).toBe(400);
    });

    afterAll(async () => {
        await prisma.$disconnect();
        await pool.end();
    });
});