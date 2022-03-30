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
        let data= {
            username: req.body.username,
            habitName: req.body.habitName,
            frequency: req.body.frequency,
            units: req.body.units
        }
        const newhabit = await Habit.create(data)
        res.json(newhabit)
    } catch(err){
        res.status(500).json({err})
    }
})

router.delete('/:id', async (req, res)=>{
    try {
        const habits = await Habit.delete(req.params.id)
        res.json(habits)
    } catch(err) {
        res.status(500).json({err})
    }
})

router.patch('/:id', async (req, res)=>{
    try {
        const habits = await Habit.delete(req.params.id)
        res.json(habits)
    } catch(err) {
        res.status(500).json({err})
    }
})

module.exports=router;
