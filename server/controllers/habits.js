const express = require('express');
const router = express.Router();
const Habit= require('../models/Habit.js')
router.get('/:username', async (req, res)=>{
    try {
        const habits = await Habit.gethabits(req.params.username)
        res.json(habits)
    } catch(err) {
        res.status(500).json({err})
    }
})

router.post('/', async (req, res)=>{
    try {
        let data= {username: req.body.username,}
        const newhabit = await Habit.create(data)
        res.json(newhabit)
    } catch(err){
        res.status(500).json({err})
    }
})

module.exports=router;