const { Schema, model } = require("mongoose");

const QuizSchema = new Schema(
    {
        quizname: { type: String },
        questions: [{ type: Object }],
        reviews: [
            {
                type: Schema.Types.ObjectId,
                ref: 'review'
            }
        ]
    },
    {
        toJSON: {
            getters: true
        },
    }
);

const Quiz = model("Quiz", QuizSchema);
module.exports = Quiz;