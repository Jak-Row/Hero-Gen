import { Router } from 'express';
import userRouter from './user-routes.js'; // Import userRouter

const router = Router();

// Mount the userRouter under the /users path
router.use('/users', userRouter);

export default router;
