import Student from "../Models/Student.js";
import StudentService from "../Services/StudentService.js";

class StudentController{
    async create (req,res){
        try{
            const student = await StudentService.create(req.body)
            res.status(200).json(student);
        }catch(e){
            res.status(500).json(e);
        }
    }
    async getAll (req,res){
        try{
            const students = await StudentService.getAll();
            return res.json(students);
        }catch(e){
            res.status(500).json(e);
        }
    }

    async getOne (req,res){
        try{
            const student = await StudentService.findById(req.params.id);
            return res.json(student);
        }catch(e){
            res.status(500).json(e);
        }
    }

    async update (req,res){
        try{
            const updatedStudent=await StudentService.update(req.body);
            return res.json(updatedStudent);
        }catch(e){
            res.status(500).json(e);
        }
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
export default new StudentController();