const Quiz = require("../models/Quiz");
const connection = require("../config/connection");

const quizName = "Movie Quiz";
const quizId = "6386502423e14753d882bf61";
const quizReviews = [
  "638653fe07c3d9aa9c2724ad",
  "63865420e9143db21dfc650d",
  "6386542ded6d88dd577dc258"
] 

const seedQuizzes = [
  {
    prompt: "Who played Rachel Green",
    options: [
      { text: "Harry Shearer", correct: false },
      { text: "Jennifer Aniston", correct: true },
      { text: "Greg Malins", correct: false },
      { text: "Danielle Vasinova", correct: false },
    ],
  },
  {
    prompt: "Who played Monica Geller",
    options: [
      { text: "Jane Sibbett", correct: false },
      { text: "Courteney Cox", correct: true },
      { text: "Hank Azaria", correct: false },
      { text: "Ian Thorpe", correct: false },
    ],
  },
  {
    prompt: "Who played Phoebe Buffay",
    options: [
      { text: "Ellen Pompeo", correct: false },
      { text: "Courteney Cox", correct: false },
      { text: "Lisa Kudrow", correct: true },
      { text: "Jackie Debatin", correct: false },
    ],
  },
  {
    prompt: "Who played Joey Tribbiani",
    options: [
      { text: "Ernie Grunwald", correct: false },
      { text: "Matt LeBlanc", correct: true },
      { text: "Leila Kenzle", correct: false },
      { text: "Zoey Rosen", correct: false },
    ],
  },
  {
    prompt: "Who played Chandler Bing",
    options: [
      { text: "Brent Spiner", correct: false },
      { text: "Allisyn Snyder", correct: false },
      { text: "Matthew Perry", correct: true },
      { text: "Jim Pirri", correct: false },
    ],
  },
  {
    prompt: "Who played Dr. Ross Geller",
    options: [
      { text: "Carlo Imperato", correct: false },
      { text: "J Graigory", correct: false },
      { text: "Hank Azaria", correct: false },
      { text: "David Schwimmer", correct: true },
    ],
  },
  {
    prompt: "Who played Gunther",
    options: [
      { text: "James Michael Tyler", correct: true },
      { text: "Dan Castellaneta", correct: false },
      { text: "Kristen Ariza", correct: false },
      { text: "Natasha Pearce", correct: false },
    ],
  },
  {
    prompt: "Who played Jack Geller",
    options: [
      { text: "Jodi Knotts", correct: false },
      { text: "Robyn Donny", correct: false },
      { text: "Julia Campbell", correct: false },
      { text: "Elliott Gould", correct: true },
    ],
  },
  {
    prompt: "Who played Judy Geller",
    options: [
      { text: "Christina Pickles", correct: true },
      { text: "Alexis Thorpe", correct: false },
      { text: "Jennifer Milmore", correct: false },
      { text: "Kendall Hebert", correct: false },
    ],
  },
  {
    prompt: "Who played Janice",
    options: [
      { text: "Alec Baldwin", correct: false },
      { text: "Paul Rudd", correct: false },
      { text: "Willie Garson", correct: false },
      { text: "Maggie Wheeler", correct: true },
    ],
  },
];

const seed = async () => {
  const queryFirst = await Quiz.find({});
  if (queryFirst && queryFirst.length === 0) {
    console.log("seeding quizzes...");
    
    const seed = await Quiz.create({
      questions: seedQuizzes,
      quizname: quizName,
      quizId: quizId,
      reviews: quizReviews
    })

    console.log("seeding done");
    process.exit();
  } else {
    console.log("no seeding needed");
    process.exit();
  }
};

seed();
