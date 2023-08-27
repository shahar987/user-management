const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res, next) => {
  const users = await User.find();
      res.status(200).render('overview', {
        title: 'All users',
        users,
      });
});

exports.forgatPassword = (req, res) => {
  res.status(200).render('forgatPassword', {
    title: 'forgot password',
  });
};

exports.resetPassword = (req, res) => {
  res.status(200).render('resetPassword', {
    title: 'reset password',
  });
};

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account',
  });
};

exports.signUp = (req, res) => {
  res.status(200).render('signup', {
    title: 'Sign up',
  });
};




