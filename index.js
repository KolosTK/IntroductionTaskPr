import express from 'express';
import mongoose from 'mongoose';
import Student from'./Models/Student.js';
import Homework from'./Models/Homework.js';
import router from './router.js'

const PORT = 5005;      

var app = express();

app.use(express.json());
app.use('/api',router);

const DB_URL ="mongodb+srv://tanyakolosenko1705:irXfH6xT8DqszQSg@cluster0.nhqth5q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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