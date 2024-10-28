const { Router } = require('express');
//const authRoutes = require('./auth-routes');
const apiRoutes = require('./routes/api/index');
//const { authenticateToken } = require('../middleware/auth');

const router = Router();

//router.use('/auth', authRoutes);
//router.use('/api', authenticateToken, apiRoutes);
router.use('/api', apiRoutes);

module.exports = router;