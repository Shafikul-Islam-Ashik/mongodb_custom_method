import { createSlug } from "../helpers/helpers.js";
import Team from "../models/Team.js";

// create book
export const createTeam = async (req, res) => {
  const { name } = req.body;

  const data = await Team.create({
    name: name,
    slug: createSlug(name),
  });
  res.status(200).json(req.body);
};
