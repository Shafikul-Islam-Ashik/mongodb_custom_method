import { createSlug } from "../helpers/helpers.js";
import Book from "../models/Book.js";

// create book
export const createBook = async (req, res) => {
  const { name } = req.body;

  await Book.create({
    name: name,
    slug: createSlug(name),
  });
  res.status(200).json(req.body);
};
