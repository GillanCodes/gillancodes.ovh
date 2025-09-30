import { randomUUID } from "crypto";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null,  path.join(__dirname, "../../uploads"))
  },
  filename: function (_req, file, cb) {
    cb(null, randomUUID() + "." + file.mimetype.split('/')[1])
  }
});

const upload = multer({ storage: storage })
export const multerMiddleware = upload.single('image');
