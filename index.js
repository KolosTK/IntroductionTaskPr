import express from 'express';
import mongoose from 'mongoose';
import Student from'/GitHub/IntroductionTaskPr/Models/Student.js';
// import Homework from'./Models/Homework.js';

const PORT = 5005;      

const app = express();

app.use(express.json());

const DB_URL ="mongodb+srv://tanyakolosenko1705:irXfH6xT8DqszQSg@cluster0.nhqth5q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


app.post('/',async(req,res)=>{
    const {name,age,studentClass}= req.body    
    const student = await Student.create({name,age,studentClass})
    res.status(200).json(student)
})


async function startApp()
{
    try{
        await mongoose.connect(DB_URL);
        app.listen(PORT, ()=>console.log('APP PORT IS '+PORT));
    }
    catch(e){
        console.log(e);
    }

}
startApp();