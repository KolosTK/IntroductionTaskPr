import Student from "../Models/Student.js";


class StudentController{
    async create (req,res){
        try{
            const {name,age,studentClass} = req.body;
            const student = await Student.create({name,age,studentClass})
            res.status(200).json(student);
        }catch(e){
            res.status(500).json(e);
        }
    }
    async getAll (req,res){
        try{
            const students = await Student.find();
            return res.json(students);
        }catch(e){
            res.status(500).json(e);
        }
    }

    async getOne (req,res){
        try{
            const {id} = req.params.id;
            if(!id){throw new Error ('ID don`t set')};
            const student = await Student.findById(id);
            return res.json(student);
        }catch(e){
            res.status(500).json(e);
        }
    }

    async update (req,res){
        try{
            const student = req.body;
            if(!student.id){throw new Error ('ID don`t set')};
            const updatedStudent=await Student.findByIdAndUpdate(student._id,student,{new:true});
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
export default new StudentController;