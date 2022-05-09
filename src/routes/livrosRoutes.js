import express from "express";
import LivroController from "../controllers/livrosController.js";
import upload from "../middleware/upload.js";
import UploadController from "../controllers/uploadController.js";

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)
    .get("/livros/busca", LivroController.listaLivroPorParametro)
    .get("/livros/:id", LivroController.listarPorId)
    .post("/livros", LivroController.cadastrarLivro)
    .post("/livros/upload", upload.single('file'), UploadController.upload)
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.excluirLivro)

export default router;