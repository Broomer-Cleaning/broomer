const router = require('express').Router();
const {
  createUser,
  login,
} = require('../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../utils/auth');

router.route('/').post(createUser).put(authMiddleware);

router.route('/login').post(login);

// router.route('/me').get(authMiddleware, getSingleUser);

module.exports = router;