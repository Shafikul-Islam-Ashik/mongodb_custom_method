import express from "express";
import { createBook } from "../controllers/bookController.js";

// init router
const router = express.Router();

// routes
router.post("/book", createBook);

// export router
export default router;
