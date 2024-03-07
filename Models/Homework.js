import mongoos from 'mongoose';

const Homework =new mongoose.Schema({
    "title":{type : String, required:true},
    "description":{type : String, required:true},
    "dueDate":{type : String, required:true},
    "studentID":{type : String, required:true}
});
export default mongoose.model('Homework',Homework);
