import { Router } from "express";
import { AuthService } from "../services/auth.service";

const router = Router();
const service = new AuthService();

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await service.register(email, password);
    return res.status(201).json(user);
  } catch {
    return res.status(400).json({ message: "User already exists" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await service.login(email, password);
    return res.json(result);
  } catch {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

export default router;