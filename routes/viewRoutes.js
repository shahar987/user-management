const express = require('express');
const viewController = require('../controllers/viewController');
const authController = require('../controllers/authController');

const router = express.Router();
router.get('/', authController.isLoggedIn, viewController.getOverview);
router.get('/login', authController.isLoggedIn, viewController.getLoginForm);
router.get('/sign-up', authController.isLoggedIn, viewController.signUp);
router.get('/forgatPassword', viewController.forgatPassword);
router.get(
  '/passwordReset/:token',
  authController.isLoggedIn,
  viewController.resetPassword,
);


module.exports = router;
