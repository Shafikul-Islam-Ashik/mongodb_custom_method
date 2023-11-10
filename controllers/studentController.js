import Student from "../models/Student.js";

// create studet
export const createStudent = async (req, res) => {
  await Student.create({
    name: "Shakib",
    roll: "001107",
    location: "Narsingdi",
    gender: "Male",
    age: 11,
    department: "Arts",
  });
  res.status(200).json(req.body);
};

// get all student
export const getAllStudent = async (req, res) => {
  // const data = await Student.find().isMarriedAgeOk();

  const data = await Student.findById("653b49bbdea63cb865ec6a0c");

  console.log(data);
  console.log(data.isFemale);

  res.status(200).json(data);
};

// update student
export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, roll, location } = req.body;

  const stu = await Student.findById(id);

  stu.name = name;
  stu.roll = roll;
  stu.location = location;

  stu.save();

  res.status(200).json(stu);
};
