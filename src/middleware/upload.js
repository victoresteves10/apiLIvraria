
import multer from "multer";


const csvFilter = (req, file, cb) => {
    if (file.mimeType.includes("csv")) {
        cb(null, true);
    } else {
        cb("Arquivo precisa ser .csv", false);
    }
}

let local = multer.memoryStorage();

let uploadFile = multer({ storage: local, fileFilter: csvFilter });

export default uploadFile