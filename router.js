import Router from 'express';
import StudentController from './Controllers/StudentController.js'
import HomeworkController from './Controllers/HomeworkController.js'

const router = new Router();
router.post('/students',StudentController.create);
router.get('/students',StudentController.getAll);
router.get('/students/:id',StudentController.getOne);
router.put('/students',StudentController.update);
router.delete('/students/:id',StudentController.delete);

router.post('/homeworks',HomeworkController.create);
router.get('/homeworks',HomeworkController.getAll);
router.get('/homeworks/:id',HomeworkController.getOne);
router.put('/homeworks',HomeworkController.update);
router.delete('/homeworks/:id',HomeworkController.delete);

export default router;