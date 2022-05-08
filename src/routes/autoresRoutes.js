import express from "express";
import AutoresController from "../controllers/autoresController.js";
import UploadController from "../controllers/uploadController.js";
import upload from "../middleware/upload.js";
const router = express.Router();

router
    .get("/autores", AutoresController.listarAutores)
    .get("/autores/:id", AutoresController.listarPorId)
    .post("/autores", AutoresController.cadastrarAutores)
    .post("/autores/upload", upload.single(UploadController.upload))
    .put("/autores/:id", AutoresController.atualizarAutores)
    .delete("/autores/:id", AutoresController.excluirAutores)

export default router;