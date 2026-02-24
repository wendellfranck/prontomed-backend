import { Router } from "express";
import { AppointmentController } from "../controllers/appointment.controller";

const router = Router();
const controller = new AppointmentController();

router.post("/", controller.create);
router.get("/", controller.list);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;