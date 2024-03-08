import express from 'express';
import mongoose from 'mongoose';
import Student from'./Models/Student.js';
import Homework from'./Models/Homework.js';

const PORT = 5005;      

const app = express();

app.use(express.json());

<<<<<<< Updated upstream
const DB_URL ="mongodb+srv://tanyakolosenko1705:irXfH6xT8DqszQSg@cluster0.nhqth5q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

=======
// const DB_URL ="mongodb+srv://tanyakolosenko1705:admin@cluster0.jkxjxfx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
>>>>>>> Stashed changes

app.get('/',(req,res)=>{
    res.status(200).json('Hello');
})

// app.post('/',(req,res)=>{
//     res.send('This is the post request');
// })

app.listen (PORT, ()=>console.log("server port "+PORT))


// async function startApp()
// {
//     try{
//         await mongoose.connect(DB_URL);
//         app.listen(PORT, ()=>console.log('APP PORT IS '+PORT));
//     }
//     catch(e){
//         console.log(e);
//     }

// }
// startApp();