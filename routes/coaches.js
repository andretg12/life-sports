//////////////////////////////////////////
///   api endpoints for managing users //
////////////////////////////////////////

const router = require('express').Router();
let Coach = require('../models/coach.model');
const Bcrypt = require("bcryptjs")

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

router.get("/:username", async (req, res) => {
    try {
        const coach = await Coach.findOne({
            username: req.params.username
        })
    } catch (err) {
        res.status(500).send(err)
    }
})

// 2. add a new user
// POST /coaches/add
// ========================================
router.post('/add', async (req, res) => {
    try {
        req.body.password = Bcrypt.hashSync(req.body.password, 12);
        const coach = await Coach.create(req.body)
        res.status(200).json(coach)
    } catch (err) {
        res.status(500).send(err)
    }
})


router.post("/update/:id", async (req, res) => {
    let body = req.body
    let id = req.params.id
    try {
        const newCoach = await Coach.replaceOne({
            _id: id
        }, body)
        res.status(200).send(newCoach)

    } catch (err) {
        res.status(400).json(err)
    }
})

router.post("/login", async (req, res) => {
    try {
        const user = await Coach.findOne({
            username: req.body.username
        }).exec();
        if (!user) {
            return res.status(400).send({
                message: "The username does not exist"
            });
        }
        if (!Bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(400).send({
                message: "The password is invalid"
            });
        }
        res.send({
            academy: user.academy,
            _id: user._id,
            userType: "Coach",
            username: user.username
        });
    } catch (err) {
        res.status(500).send(err);
    }
})





module.exports = router;