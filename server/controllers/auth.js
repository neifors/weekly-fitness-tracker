const express = require('express');
const router = express.Router();

// require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const User = require('../models/user');

router.post('/login', async (req, res)=>{
    const email = req.body.email
    const password = req.body.password
    console.log(email,password)
    try {
        const user  =  await User.findByEmail(email)
        console.log(user)
        if(!user){ throw new Error('No user with this email') }
        res.json(user)
      } catch(err){
      console.log(err);
      res.status(401).json({ err });
    }
    
})

module.exports= router;
