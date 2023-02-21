const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Wine = require('../models/Wine.model')
const User = require('../models/User.model')


router.get('/wine-details/:id', async (req, res, next) => {
    try {
        let loggedIn = req.session.currentUser;
        const {id} = req.params
        let wine = await Wine.findById(id)
        res.render('wines/wine-details', {wine, loggedIn})
        
    } catch (error) {
        console.log(error)
        next(error)
    }
})


  module.exports = router;