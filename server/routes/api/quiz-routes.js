const router = require("express").Router();

const { getAllQuiz } = require("../../controllers/quiz-controller");

router.route("/").get(getAllQuiz);

module.exports = router;
