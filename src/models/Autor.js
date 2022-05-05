import mongoose from "mongoose";

const autoresquema = new mongoose.Schema(
    {
        id: { type: String },
        nome: { type: String, required: true },
        nacionalidade: { type: String, required: true },

    },
    {
        versionKey: false
    }
);

const autores = mongoose.model('Autores', autoresquema);

export default autores;