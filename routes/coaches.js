//////////////////////////////////////////
///   api endpoints for managing users //
////////////////////////////////////////

const router = require('express').Router();
let Coach = require('../models/coach.model');

// Your Challenge: Make rwo routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// You will be using express Router and Mongoose
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/


// 1. get all users on record
// GET: /
// ========================================

router.get("/", async (req, res) => {
    try {
        const coach = await Coach.find({}).exec()
        res.json(coach)
    } catch (err) {
        res.send(err)
    }
})

// 2. add a new user
// POST /
// ========================================
router.post('/add', (req, res) => {
    let body = req.body
    Coach.create(body)
        .then(dbUser => res.status(200).json(dbUser))
        .catch(err => console.log(err))
});



module.exports = router;