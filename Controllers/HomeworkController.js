import Homework from "../Models/Homework.js";


class HomeworkController{
    async create (req,res){
        try{
            const {title,description,dueDate,studentID} = req.body;
            const homework = await Homework.create({title,description,dueDate,studentID})
            res.status(200).json(homework);
        }catch(e){
            res.status(500).json(e);
        }
    }
    async getAll (req,res){
        try{
            const homeworks = await Homework.find();
            return res.json(homeworks);
        }catch(e){
            res.status(500).json(e);
        }
    }

    async getOne (req,res){
        try{
            const {id} = req.params;
            if(!id){throw new Error ('ID don`t set')};
            const homework = await Homework.findById(id);
            return res.json(homework);
        }catch(e){
            res.status(500).json(e);
        }
    }

    async getOneByStudentID(req,res){
        try{
            const {id} = req.params.id;
            if(!id){throw new Error ('ID don`t set')};
            const homework = await Homework.find({studentID: id});
            return res.json(homework);
        }catch(e){
            res.status(500).json(e);
        }
    }

    async update (req,res){
        try{
            const homework = req.body;
            if(!homework.id){throw new Error ('ID don`t set')};
            const updatedHomework=await Homework.findByIdAndUpdate(homework.id,homework,{new:true});
            return res.json(updatedHomework);
        }catch(e){
            res.status(500).json(e);
        }
    }

    async delete (req,res){
        try{
            const {id} = req.params;
            if(!id){throw new Error('ID don`t set')};
            const homework = await Homework.findByIdAndDelete(id);
            return res.json(homework);
        }catch(e){
            res.status(500).json(e);
        }
    }
}
export default new HomeworkController;