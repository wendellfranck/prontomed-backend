import { Router } from "express";
import { PatientController } from "../controllers/patient.controller";

const router = Router();
const controller = new PatientController();

router.post("/", controller.create);
router.get("/", controller.list);
router.get("/:id", controller.findById);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;