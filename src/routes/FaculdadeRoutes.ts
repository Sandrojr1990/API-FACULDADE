import { Router } from "express";
import { FaculdadeController } from "../controller/FaculdadeController";

const router = Router()
const faculdadeController = new FaculdadeController();

router.post("/turma", async (req, res) => {
    await faculdadeController.criarTurma(req, res);

});

router.get("/turmas",  async (req, res) => {
    await faculdadeController.consultarTurmas(req, res);

})

router.put("/turmas", async (req, res) => {
    await faculdadeController.updateTurma(req, res);

})

export default router;