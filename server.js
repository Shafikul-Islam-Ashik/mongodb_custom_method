import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import studentRouter from "./routes/student.js";
import bookRouter from "./routes/book.js";
import teamRouter from "./routes/team.js";

import { mongodbConnection } from "./config/mongodb.js";

// environment var
dotenv.config();
const PORT = process.env.PORT || 6060;

// init express
const app = express();

// use express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ejs setup
// app.set("view engine", "ejs");

// static folder
app.use(express.static("public"));

//routes
app.use(studentRouter);
app.use(bookRouter);
app.use(teamRouter);

// server listen
app.listen(PORT, () => {
  mongodbConnection();
  console.log(`server is running on port ${PORT}`.bgGreen.black);
});
