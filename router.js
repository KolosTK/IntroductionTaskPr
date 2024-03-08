import Router from 'express';
import Student from './Models/Student.js';
import StudentController from './Controllers/StudentController.js'

const router = new Router();

router.post('/posts',StudentController.create);
router.get('/posts',StudentController.getAll);
router.get('/posts/:id',StudentController.getOne);
router.put('/posts',StudentController.update);
router.delete('/posts/:id',StudentController.delete);

export default router;