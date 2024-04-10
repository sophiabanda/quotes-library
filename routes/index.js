const express = require("express");
const router = express.Router();
const passport = require("passport");
const Quote = require("../models/quote");


// GET Home Page
router.get("/", async function(req, res, next) {
  const quote =  await Quote.aggregate([{$sample: {size:1}}]);
  res.render("index", { title: "Quote of the Moment", quote: quote[0] });
});

// Google OAuth login route
router.get("/auth/google", passport.authenticate(
  "google",
  {
    scope: ["profile", "email"],
  }
));

// Google OAuth callback route
router.get("/oauth2callback", passport.authenticate(
  "google",
  {
    successRedirect: "/",
    failureRedirect: "/"
  }
));

// OAuth logout route
router.get("/logout", function(req, res){
  req.logout(function() { 
    res.redirect("/");
  });
});

module.exports = router;
