import express from "express";
import AutoresController from "../controllers/autoresController.js";
import UploadController from "../controllers/uploadController.js";

const router = express.Router();

router
    .get("/autores", AutoresController.listarAutores)
    .get("/autores/:id", AutoresController.listarPorId)
    .post("/autores", AutoresController.cadastrarAutores)
    .post("/autores/upload", UploadController.upload)
    .put("/autores/:id", AutoresController.atualizarAutores)
    .delete("/autores/:id", AutoresController.excluirAutores)

export default router;