import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }

    static listarPorId = (req, res) => {
        const id = req.params.id;
        livros.findById(id, (err, livros) => {
            if (err) {
                res.status(400).send({ message: err.message })
            } else {
                res.status(200).send(livros);
            }
        })

    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha ao cadastrar livro` })
            } else {
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Livro atualizado com sucesso" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "Livros excluido com sucesso." })
            } else {
                res.status(500).send({ message: err.message });
            }
        })
    }

    static listaLivroPorParametro = (req, res) => {
        const { titulo, autor } = req.query;

        if (!titulo && !autor) {
            res.status(400).send({ message: 'Por favor forneça um título ou autor válido' });
        }
        if (titulo) {
            let regex = new RegExp(titulo, 'i');
            livros.find({ 'titulo': { $regex: regex } }, {}, (err, livros) => {
                console.log(titulo);
                res.status(200).send(livros);
            }).collation({ locale: 'en_US', strength: 1 })
        }
        if (autor) {
            let regex = new RegExp(autor, 'i');
            livros.find({ 'autor': { $regex: regex } }, {}, (err, livros) => {
                console.log(autor);
                res.status(200).send(livros);
            })
        }

    }

}

export default LivroController