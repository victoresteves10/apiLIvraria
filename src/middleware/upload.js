
import multer from "multer";




let local = multer.memoryStorage();
const upload = multer({ storage: local })
//module.exports = multer({ storage: local });

export default upload