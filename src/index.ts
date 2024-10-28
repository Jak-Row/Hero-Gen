import { Router } from 'express';
import authRoutes from './routes/auth-routes.js';
import apiRoutes from './index.js';
import { authenticateToken } from './middleware/auth.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/api', authenticateToken, apiRoutes);

export default router;
