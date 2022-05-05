import mongoose from "mongoose";

const livroesquema = new mongoose.Schema(
    {
        id: { type: String },
        titulo: { type: String, required: true },
        autor: { type: String, required: true },

    }
);

const livros = mongoose.model('Livros', livroesquema);

export default livros;