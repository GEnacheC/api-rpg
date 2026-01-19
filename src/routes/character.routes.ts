import { Router } from "express";
import CharacterController from "../controllers/character.controller";

const router = Router();
const controller = new CharacterController();

router.get("/", async (req, res) => {
    await controller.getCharacters(req, res);
});

router.post("/", async (req, res) => {
    await controller.createCharacter(req, res);
});

router.patch("/:id", async (req, res) => {
    await controller.updateCharacter(req, res);
});

export default router;