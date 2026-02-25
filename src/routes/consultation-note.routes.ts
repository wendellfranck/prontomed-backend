import { Router } from "express";
import { ConsultationNoteController } from "../controllers/consultation-note.controller";

const router = Router();
const controller = new ConsultationNoteController();

router.post("/appointments/:id/notes", controller.create);
router.get("/patients/:id/notes", controller.listByPatient);

export default router;