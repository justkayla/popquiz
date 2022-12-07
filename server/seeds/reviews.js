const Review = require("../models/Review");
const connection = require("../config/connection");

const seedReviews = [
  {
        "_id": "638653fe07c3d9aa9c2724ad",
        "review": "This quiz is awesome!",
        "userId": "63865d456f79d7b27fbd1746",
        "quizId": "6386502423e14753d882bf61"
    },
  {
        "_id": "63865420e9143db21dfc650d",
        "review": "This quiz is OK.",
        "userId": "63865d4fbe2706d2c2c93842",
        "quizId": "6386502423e14753d882bf61"
    },
  {
        "_id": "6386542ded6d88dd577dc258",
        "review": "This quiz is awful!",
        "userId": "63865d6295345f968fad45dd",
        "quizId": "6386502423e14753d882bf61"
    },
    
];

const seed = async () => {
  const queryFirst = await Review.find({});
  if (queryFirst && queryFirst.length === 0) {
    console.log("seeding reviews...");

    const seed = await Promise.all(
      seedReviews.map(async (review) => await Review.create(review))
    );
    
    //const seed = await Review.create({ questions: seedReviews })
      
    console.log("seeding done");
    process.exit();
  } else {
    console.log("no seeding needed");
    process.exit();
  }
};

seed();

