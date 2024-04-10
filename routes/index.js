const express = require("express");
const router = express.Router();
const passport = require("passport");
const Quote = require("../models/quote");


// GET Home Page
router.get("/", async function(req, res, next) {
  let quotes = await Quote.find({});
  let quote;
  let j;
  for (let i = quotes.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    [quotes[i], quotes[j]] = [quotes[j], quotes[i]];
    quote = quotes[0]
    console.log(quotes[0]); 
  }
  res.render("index", { title: "Quote of the Moment", quote });
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
