import multer from "multer";

/**
 * multer diskStorage
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb(null, "public");
    if (file.fieldname === "studentPhoto") {
      cb(null, "public/student");
    } else if (file.fieldname === "customerPhoto") {
      cb(null, "public/customer");
    }
  },
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() +
        "_" +
        Math.round(Math.random() * 100000) +
        "_" +
        file.originalname
    );
  },
});

// multer middlewares

// student multer
export const createStudentMulter = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"));
    }
  },
}).single("studentPhoto");

// customer multer
export const createCustomerMulter = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"));
    }
  },
  limits: {
    fileSize: 1024 * 1024,
  },
}).single("customerPhoto");
