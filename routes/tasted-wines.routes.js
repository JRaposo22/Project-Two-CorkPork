const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Wine = require('../models/Wine.model');
const User = require('../models/User.model');

router.get('/tasted-wines', async (req, res, next) => {

  try {
    let loggedIn = req.session.currentUser;
    const userEmail = req.session.currentUser.email
    const tastedWines = await User.findOne({email: userEmail}).populate('tastedWines');
    console.log(tastedWines);
    res.render('wines/tasted-wines', {tastedWines, loggedIn});

  } catch (error) {
    console.log(error);
    next(error);
    
  }
    
})

router.post("/tasted-wines/:id", async (req, res, next) => {
    try {
      let loggedIn = req.session.currentUser;
      const { id } = req.params;
      await Wine.findByIdAndRemove(id);
      res.redirect("/tasted-wines", {loggedIng});
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  module.exports = router;



