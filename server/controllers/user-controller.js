const User = require("../models/User")
const jwt = require("jsonwebtoken")
const cookie = require("cookie")
const bcrypt = require("bcrypt")
const connection = require("../config/connection")

require("dotenv").config()

/**
 * Ability to update a user?
 * Ability to delete user?
 * If user is deleted, delete associated reviews? * 
*/

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    const token = jwt.sign({ _id: newUser._id, username: newUser.username, email: newUser.email}, process.env.JWT_SECRET)
    res.status(200).json({ result: "success", payload: { user: newUser, token: token } });
  } catch(err) {
    res.status(400).json({ message: 'Unable to create user' });
  }
}
  
const getAllUsers = async (req, res) => {
  try {
    const getAllQuery = await User.find({});
    res.status(200).json({ result: "success", payload: getAllQuery });
  } catch(err) {
    res.status(400).json({ message: 'No users found' });
  }
}

const getUserById = async (req, res) => {
  try {
    const getOneQuery = await User.findById(req.params.id);
    res.status(200).json({ result: "success", payload: getOneQuery });
  } catch(err) {
    res.status(400).json({ message: "No user found" });
  }
}

const authenticateLogin = async (req, res) => {
  // First see if we have a user with the supplied email address 
  const foundUser = await User.findOne({ email: req.body.email })
  if( !foundUser ) return res.status(401).json({ message: "Login failed." })

  // Now compare the supplied password w/ the hashed password
  const isValid = await bcrypt.compare(req.body.password, foundUser.password)
  if( !isValid ) return res.status(401).json({ message: "Login failed." })

  // If we have a match, we will send back a token (line 43 extracts the password key from the foundUser object)
  const { password, ...modifiedUser } = foundUser

    console.log(modifiedUser)

  // Create a token to represent the authenticated user
  const token = jwt.sign({ _id: modifiedUser._doc._id, username: modifiedUser._doc._username, email: modifiedUser._doc.email}, process.env.JWT_SECRET)

  res
    .status(200)
    // Set the cookie
    .set({ "auth-token": token })
    .json({ result: "success", user: modifiedUser, token: token })
}

const lookupUserByToken = async (req, res) => {
  // If no cookie or expired cookie, not an authorized user
  if( !req.headers || !req.headers.cookie ) return res.status(401).json({msg: "un-authorized"})

  // The node package named cookie will parse cookies for us
  const cookies = cookie.parse(req.headers.cookie)

  // Get the token from the request headers & decode it 
  const token = cookies["auth-token"]  //cookies.authToken
  if( !token ) return res.status(401).json({msg: "not authorized"})
  
  // Look up the user from the decoded token
  const isVerified = jwt.verify(token, process.env.JWT_SECRET)
  if( !isVerified ) return res.status(401).json({msg: "nope"})

  console.log({isVerified})

  const user = await User.findById(isVerified._id)
  console.log(user)
    if( !user ) {
      return res.status(401).json({msg: "noooo"})
    } else {
      return res.status(200).json({ result: "success", _id: user._id, username: user.username, email: user.email })
    }
}

module.exports = { 
  createUser,
  getAllUsers,
  getUserById,
  authenticateLogin,
  lookupUserByToken
}