import express from "express";
import {
  createStudent,
  getAllStudent,
  updateStudent,
} from "../controllers/studentController.js";
import { createStudentMulter } from "../utils/multer.js";

// init router
const router = express.Router();

// routes
router.post("/student", createStudent);
router.get("/student", getAllStudent);
router.patch("/student/:id", updateStudent);

// export router
export default router;
