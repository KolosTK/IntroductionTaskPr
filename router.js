import Router from 'express';
import Post from './Models/Student.js';

const router = new Router();

router.post('/posts',async(req,res)=>{
    try{
        const {name,age,studentClass} = req.body;
        const student = await Student.create({name,age,studentClass})
        res.status(200).json(student);
    }catch(e){
        res.status(500).json(e);
    }
});

router.get('/posts');
router.get('/posts/:id');
router.put('/posts');
router.delete('/posts/:id');

export default router;