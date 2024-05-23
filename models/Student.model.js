import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: {
        require: true,
        type: String
    }
});

const student = mongoose.model('students', StudentSchema);
export default student;

