const User = require("../models/User");
const connection = require("../config/connection");

const seedUsers = [
  {
    "_id": "63865d456f79d7b27fbd1746",
    "username": "marySmith",
    "email": "msmith@gmail.com",
    "password": "msmith"
  },
  {
    "_id": "63865d4fbe2706d2c2c93842",
    "username": "joeDoe",
    "email": "jdoe@gmail.com",
    "password": "jdoe"
  },
  {
    "_id": "63865d6295345f968fad45dd",
    "username": "ronJones",
    "email": "rjones@gmail.com",
    "password": "rjones"
  },
  {
    "_id": "63865d6e6733dba890a44f29",
    "username": "harryMiles",
    "email": "hmiles@gmail.com",
    "password": "hmiles"
  },
  {
    "_id": "63865d7932e662f489539086",
    "username": "benSchmidt",
    "email": "bschmidt@gmail.com",
    "password": "bschmidt"
  },
];

const seed = async () => {
  const queryFirst = await User.find({});
  if (queryFirst && queryFirst.length === 0) {
    console.log("seeding users...");

    const seed = await Promise.all(
      seedUsers.map(async (user) => await User.create(user))
    );

    console.log("seeding done");
    process.exit();
  } else {
    console.log("no seeding needed");
    process.exit();
  }
};

seed();
