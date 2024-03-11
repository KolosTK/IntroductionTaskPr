import Student from '../Controllers/StudentController.js'

class StudentService{
    async create (student){
            const createdStudent = await Student.create(student)
            return createdStudent;
    }
    async getAll (){
            const students = await Student.find();
            return students;
    }

    async getOne (id){
        
            if(!id){throw new Error ('ID don`t set')};
            const student = await Student.findById(id);
            return student;
    }

    async update (student){
            if(!student.id){throw new Error ('ID don`t set')};
            const updatedStudent=await Student.findByIdAndUpdate(student.id,student,{new:true});
            return updatedStudent;
    }

    async delete (req,res){
        try{
            const {id} = req.params;
            if(!id){throw new Error('ID don`t set')};
            const student = await Student.findByIdAndDelete(id);
            return res.json(student);
        }catch(e){
            res.status(500).json(e);
        }
    }
}
export default new StudentService();