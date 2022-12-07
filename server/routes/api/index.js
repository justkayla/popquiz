const router = require('express').Router();
const userRoutes = require('./user-routes');
const reviewRoutes = require('./review-routes');
const quizRoutes = require('./quiz-routes');

router.use('/user', userRoutes);
router.use('/review', reviewRoutes);
router.use('/quiz', quizRoutes);

module.exports = router;