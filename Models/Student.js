import mongoose from 'mongoose';

const Student = new mongoose.Schema({
    name:{type : String, required:true},
    age:{type : String, required:true},
    studentClass:{type : String, required:true}
});
export default mongoose.model('Student',Student);