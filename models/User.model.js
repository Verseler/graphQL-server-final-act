import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        require: true,
        type: String
    }
});

const user = mongoose.model('users', UserSchema);
export default user;

