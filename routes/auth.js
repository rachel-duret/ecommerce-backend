// @ts-nocheck
const express = require('express');
const router = express.Router();
const User = require('../model/User')
const CryptoJS = require('crypto-js');

// register
router.post('/register', async (req, res) => {
    console.log(req.body)
   const user = new User({
       username: req.body. username,
       email: req.body.email,
       password:CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SED).toString(),

   });
   try{
       const saveUser = await user.save();
       res.status(201).json(saveUser)

   } catch(err) {
       console.log(err)
       res.status(500).json(err)
   }
   
})



// login


module.exports = router;