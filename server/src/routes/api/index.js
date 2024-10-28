//import { Router } from 'express';
const { Router } = require('express');

//import { userRouter } from './user-routes.js';
const userRoutes = require('./user-routes.js') || require('./user-routes');

const router = Router();

router.use(userRoutes);

module.exports = router;

//export default router;