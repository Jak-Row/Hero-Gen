const { Router } = require('express');
const authRoutes = require('./auth-routes');
const apiRoutes = require('./api/index');
const { authenticateToken } = require('../middleware/auth');

const router = Router();

router.use('/auth', authRoutes);
router.use('/api', authenticateToken, apiRoutes);

module.exports = router;