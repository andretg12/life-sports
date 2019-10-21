const router = require('express').Router()
let Student = require('../models/students.model')




//Routes
// All Students
// Student by location
// Student where matches search
// Students filtered by active


// getting all students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find({}).exec()
        res.status(200).json(students)
    } catch (err) {
        res.status(400).send(err)
    }
})


// create a new student
// POST /students/add
router.post('/add', async (req, res) => {
    try {
        const student = await Student.create(req.body)
        res.status(200).json(student)
    } catch (err) {
        res.send(err)
    }
})

// get student by id
// GET /students/:id
router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findOne({
            _id: req.params.id
        })
        res.status(200).json(student)
    } catch (err) {
        res.send(err)
    }
});


// students by location
//GET students/:location
router.get("/:location", async (req, res) => {
    try {
        const student = await Student.find({
            'academy': req.params.location
        }).exec()
        res.status(200).json(student)
    } catch (err) {
        res.send(err)
    }
})

//Students where search matches
//get students/:chars
router.get("/:chars", async (req, res) => {
    try {
        const match = await Student.find({}).exec()
    } catch (err) {
        res.send(err)
    }
})

//get active students
//get students/active
router.get("/active", async (req, res) => {
    try {
        const students = await Student.find({
            "active": true
        }).exec()
        res.status(200).send(student)
    } catch (err) {
        res.send(err)
    }
})

//update students
module.exports = router