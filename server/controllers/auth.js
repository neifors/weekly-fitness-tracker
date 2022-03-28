const express = require('express');
const router = express.Router();

// require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const User = require('../models/User');

router.post('/login', async (req, res)=>{
    const email = req.body.email
   //  const password = JSON.parse(req.body.password)
    try {
      //  console.log(req.body.email)
        const user  =  await User.findByEmail(email)
        console.log("This is printed by controllers/auth.js")
        console.log(user)
        if(!user){ throw new Error('No user with this email') }
      //   const cmp = await bcrypt.compare(password, user.password)
      //   if (cmp) {
      //       //   ..... further code to maintain authentication like jwt or sessions
            
      //       const token= jwt.sign({ user }, 'my_secret_key2')
      //       console.log(token)
      //       res.json({
      //         user: user,
      //         token: token,
      //         text: "Auth Successful"
      //       });
      //   }
         res.status(200).json(user)
      // }  else {
      //       throw new Error("Wrong password")
      // }
        
        
    } catch(err){
      console.log(err);
      res.status(401).json({ err });
    }
    
})

module.exports= router;
