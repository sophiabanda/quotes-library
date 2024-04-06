const express = require("express");
const router = express.Router();
const passport = require('passport');

// GET Home Page
router.get("/", function(req, res, next) {
  res.render("index", { title: "Quote Library" });
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
  }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/quotes',
    failureRedirect: '/quotes'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/quotes');
  });
});

module.exports = router;
