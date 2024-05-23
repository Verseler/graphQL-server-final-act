import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
  name: {
    require: true,
    type: String,
  },
  subjectCode: {
    require: true,
    type: String,
  },
});

const subject = mongoose.model("subjects", SubjectSchema);
export default subject;
