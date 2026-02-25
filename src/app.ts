import express from "express";
import cors from "cors";
import patientRoutes from "./routes/patient.routes";
import appointmentRoutes from "./routes/appointment.routes";
import consultationNoteRoutes from "./routes/consultation-note.routes";
import { swaggerDocument } from "./docs/swagger";
import swaggerUi from "swagger-ui-express";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
      message: "ProntoMed API is running 🚀",
      documentation: "/docs",
    });
});

app.use("/patients", patientRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/appointments", consultationNoteRoutes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
