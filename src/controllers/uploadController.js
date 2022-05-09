
import autores from "../models/Autor.js";
import livros from "../models/Livro.js";


class UploadController {


    static upload = (req, res) => {


        let chegada = req.file.buffer
        const { type = '' } = req.body;
        let stream = chegada.toString('utf-8');


        const csvToObject = (stream) => {
            const normalizedFile = stream.replace(/"/g, '').replace(/\t/g, '').replace(/\r/g, '');
            const fileLines = normalizedFile.split('\n');
            const headers = fileLines[0].split(';');
            const normalizedHeaders = headers.map(header => header.toLowerCase());

            const processedItems = [];

            for (let i = 1; i < fileLines.length; i += 1) {
                if (fileLines[i]) {
                    const messageData = {};
                    const currentLine = fileLines[i].split(';');
                    for (let j = 0; j < normalizedHeaders.length; j += 1) {
                        messageData[normalizedHeaders[j]] = currentLine[j];
                    }
                    processedItems.push(messageData);
                }
            }
            return processedItems
        }

        const transforma = csvToObject(stream);
        const parse = JSON.parse(JSON.stringify(transforma));

        if (type == 'book') {
            parse.forEach(arquivo => {
                let novoLivro = new livros(arquivo);
                novoLivro.save()
            })
            res.status(200).send({ message: 'Cadastro feito com sucesso' });
        } if (type == 'autor') {
            parse.forEach(arquivo => {
                let novoAutor = new autores(arquivo);
                novoAutor.save()
            })
            res.status(200).send({ message: 'Cadastro feito com sucesso' });
        } else {
            res.status(500).send({ message: 'O arquivo deve ser tipo book ou autor' });
        }


    }

}

export default UploadController