import request from "supertest";
import app from "../app"
import prisma, { pool } from "../database/prisma";


describe("Patient API", () => {
    it("should create a patient", async () => {
        const response = await request(app).post("/patients").send({
            name: "Teste CI",
            birthDate: "1990-12-12",
            sex: "M",
            height: 1.8,
            weight: 75
        });
        
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
    });

    it("should return 400 for invalid email", async () => {
        const response = await request(app).post("/patients").send({
            name: "Teste Invalido",
            email: "emailerrado",
            birthDate: "1990-01-01",
            sex: "M",
            height: 1.8,
            weight: 75,
        });
      
        expect(response.status).toBe(400);
    });
});

afterAll(async () => {
    await prisma.$disconnect();
    await pool.end();
});