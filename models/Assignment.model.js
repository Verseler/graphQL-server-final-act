import mongoose from 'mongoose';

// Define the schema for assignments
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
    // the name is string and it is required
    name: {
        require: true,
        type: String
    },
     // the dueDate is string and it is required
    dueDate: {
        require: true,
        type: String
    }
});

const assignment = mongoose.model('assignments', AssignmentSchema);
export default assignment;

