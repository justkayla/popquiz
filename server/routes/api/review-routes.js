const router = require('express').Router()

const {
    getReviews,
    getSingleReview,
    getReviewsByQuiz,
    createReview,
    // updateReview,
    // deleteReview,
} = require('../../controllers/review-controller')

router.route('/').get(getReviews)
router.route('/').post(createReview)

router.route('/:id').get(getSingleReview)

router.route('/quiz/:id').get(getReviewsByQuiz)

module.exports = router;
