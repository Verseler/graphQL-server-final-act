import mongoose from "mongoose";

const Schema = mongoose.Schema;

const InstructorSchema = new Schema({
  name: {
    require: true,
    type: String,
  },
});

const instructor = mongoose.model("instructors", InstructorSchema);
export default instructor;
