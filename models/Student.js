import mongoose from "mongoose";

// student schema
const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    roll: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    location: {
      type: String,
      trim: true,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      trim: true,
      enum: ["Male", "Female", "Custom"],
    },
    age: {
      type: Number,
      trim: true,
    },
    department: {
      type: String,
      trim: true,
      enum: ["Science", "Arts", "Commerce"],
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// custom static method

// studentSchema.statics.findStudents = function () {
//   return this.find();
// };

studentSchema.statics.findByLocation = function (location = "Narsingdi") {
  return this.find({ location });
};

//custom query method

studentSchema.query.department = function (department = "Arts") {
  return this.find({ department });
};

studentSchema.query.isMarriedAgeOk = function (marry = 18) {
  return this.find({ age: { $gte: marry } });
};

// custom regular method

studentSchema.methods.isDhaka = function () {
  if (this.location === "Dhaka") {
    return this;
  }
  return `${this.name} is not a Dhaka Basinda`;
};

// custom property

studentSchema.virtual("isFemale").get(function () {
  if (this.gender === "Female") {
    return "You are a female";
  }
  return "You are a not female";
});

// create student model
export default mongoose.model("Student", studentSchema);
