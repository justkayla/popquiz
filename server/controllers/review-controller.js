const Review = require("../models/Review");
const connection = require("../config/connection");

require("dotenv").config()

/**
 * Logged in users can post a review on a quiz
 * A user's reviews are displayed on their profile
 * Reviews of a quiz are displayed at bottom/end of quiz
 * Reviews can be updated by the associated user
 * Reviews can be deleted by associated user
*/

// Get all reviews
const getReviews = async (req, res) => {
  try {
    const getAllQuery = await Review.find({});
    res.status(200).json({ result: "success", payload: getAllQuery });
  } catch(err) {
    console.log(err);
    res.status(400).json({ message: "No reviews found" });
  }
};

// Get one review
const getSingleReview = async (req, res) => {
  try {
    const getSingleQuery = await Review.findById(req.params.id);
    res.status(200).json({ result: "success", payload: getSingleQuery });
  } catch(err) {
    console.log(err);
    res
      .status(400)
      .json({ result: "fail", message: "No review found with that id" });
  }
};

// get all reviews by quiz
// Will need to confirm if possible based on quiz db
const getReviewsByQuiz = async (req, res) => {
  try {
    const getAllQuery = await Review.find({ quiz: req.params.id });
    res.status(200).json({ result: "succes", payload: getAllQuery });
  } catch(err) {
    console.log(err);
    res.status(400).json({ message: "No reviews found" });
  }
};

// create a review
const createReview = async (req, res) => {
  try {
    const createQuery = await Review.create(req.body);
    res.status(200).json({ result: "success", payload: createQuery });
  } catch(err) {
    console.log(err);
    res.status(400).json({ message: "Unable to create review" });
  }
};

/* Update a review
const updateReview = async (req, res) => {
  try {
    const updateQuery = await Review.findOneAndUpdate(req.body);
    res.status(200).json({ result: "success", payload: updateQuery });
  } catch(err) {
    console.log(err);
    res.status(400).json({ message: "No review with that id" });
  }
};
*/

/* Delete a review
const deleteReview = async (req, res) => {
  try {
    const deleteQuery = await Review.findOneAndDelete(req.body);
    res.status(200).json({ result: "success", payload: deleteQuery });
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
};
*/

module.exports = {
  getReviews,
  getSingleReview,
  getReviewsByQuiz,
  createReview,
  // updateReview,
  // deleteReview,
};
