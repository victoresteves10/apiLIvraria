
import autores from "../models/Autor.js";
import { parse } from 'fast-csv';
import fs from 'fs';
import uploadFile from "../middleware/upload.js";

class UploadController {


    static upload = (req, res) => {

        let stream = fs.createReadStream(uploadFile);

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

    }

}

export default UploadController