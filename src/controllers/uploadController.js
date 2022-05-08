
import autores from "../models/Autor.js";
import { parse } from 'fast-csv';
import fs from 'fs';


class UploadController {


    static upload = (req, res) => {

        if (file.mimeType.includes("csv")) {
            cb(null, true);
        } else {
            cb("Arquivo precisa ser .csv", false);
        }

        let stream = fs.createReadStream(req.file);

        stream.pipe(parse({ headers: true }))
            .on("error", (error) => {
                throw error.message;
            })
            .on("end", () => {
                novo.bulkCreate(conteudo)
                    .then(() => {
                        res.status(200).send({ message: "Upload feito com sucesso" })
                    })
            })
        let autor = new autores(stream);
        autor.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha ao cadastrar autor` })
            } else {
                res.status(201).send({ message: 'Terminamos' })
            }
        })

    }

}

export default UploadController