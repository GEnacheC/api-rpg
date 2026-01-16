import { Router } from "express";
import CharacterController from "../controllers/character.controller";

const router = Router()

router.get("/", async (req, res) => {
    await CharacterController.getCharacters(req, res);
});

router.post("/", async (req, res) => {
    await CharacterController.createCharacter(req, res);
});

export default router;