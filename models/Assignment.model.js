import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
    name: {
        require: true,
        type: String
    },
    dueDate: {
        require: true,
        type: String
    }
});

const assignment = mongoose.model('assignments', AssignmentSchema);
export default assignment;

