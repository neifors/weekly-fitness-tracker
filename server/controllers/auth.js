const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const User = require('../models/User');

router.post('/login', async (req, res)=>{
    const email = req.body.email
    try {
        const user  =  await User.findByEmail(email)
        console.log("This is printed by controllers/auth.js")
        console.log(user)
        if(!user){ throw new Error('No user with this email') }


         res.status(200).json(user)
        
        
    } catch(err){
      console.log(err);
      res.status(401).json({ err });
    }
    
})


router.post('/register', async (req, res) => {
  try {
      // check if the user already exists
      const checkuser = await User.findByEmail(req.body.email)
      
      console.log(checkuser)
      if (checkuser.length!==0) { 
          res.status(400).send("Email already exists")
      } 
      //The code inside the catch(err) below was originally here
      //But because our findByEmail function raises errors 
      //for users that DONT exist..in this case the error means
      //our user can be created!!
      //Perhaps this is not the right way to do this?

   } catch(err){
       const salt = await bcrypt.genSalt();
       const hashed = await bcrypt.hash(req.body.password, salt)
       const data = {username: req.body.username, email: req.body.email, password: hashed}
       console.log(data)
       const result = await User.create( data )
       res.status(201).json({msg: 'User created',newuser: result})
      //res.status(500).json({err});
   }
  
})





module.exports= router;
