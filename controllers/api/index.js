const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes')
const replyRoutes = require('./replyRoutes');

router.use('/users', userRoutes);
router.use('/replies', replyRoutes);
router.use('/posts', postRoutes);

module.exports = router;