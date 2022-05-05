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

    static listarLivroPorTitulo = (req, res) => {
        const titulo = req.query.titulo
        livros.find({ 'titulo': titulo }, {}, (err, livros) => {
            if (err) {
                res.status(400).send({ message: `${err.message} LIVRO NÃO ENCONTRADO` })
            } else {
                res.status(200).send(livros);
            }
        })
    }

    static listaLivroPorAutor = (req, res) => {
        const autor = req.query.autor
        livros.find({ 'autor': autor }, {}, (err, livros) => {
            if (err) {
                res.status(400).send({ message: `${err.message} LIVRO NÃO ENCONTRADO` })
            } else {
                res.status(200).send(livros);
            }
        })
    }
}

export default LivroController