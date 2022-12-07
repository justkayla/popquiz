const Quiz = require("../models/Quiz");
const connection = require("../config/connection");

require("dotenv").config();

const getAllQuiz = async (req, res) => {
  try {
    const getAllQuery = await Quiz.find({});
    res.status(200).json({ result: "success", payload: getAllQuery });
  } catch (err) {
    console.log(err);
    res.json({ message: "No quizzes found" });
  }
};

/*
const getSingleQuiz = async (req, res) => {
    try {
        const 

    } catch(err) {

    }
}
*/

module.exports = {
  getAllQuiz,
  // getSingleReview
};
