const { Schema, model } = require("mongoose");

const ReviewSchema = new Schema(
    {
        review: { type: String },
        userId:
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
        quizId:
        {
            type: Schema.Types.ObjectId,
            ref: 'quiz'
        }
    },
    {
        toJSON: {
            getters: true
        },
    }
);

const Review = model("Review", ReviewSchema);
module.exports = Review;