const router = require('express').Router()

const { 
  getAllUsers, 
  getUserById, 
  createUser, 
  authenticateLogin, 
  lookupUserByToken 
} = require('../../controllers/user-controller')

// Declare the routes that point to the controllers above
router.route('/').get(getAllUsers)
router.route('/').post(createUser)

// Handles the user login
router.route('/auth').post(authenticateLogin)

router.route('/lookup').get(lookupUserByToken)

router.route('/:id').get(getUserById)

module.exports = router;