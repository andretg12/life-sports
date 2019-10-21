const router = require('express').Router()
let Student = require('../models/students.model')




//Routes
// All Students
// Student by location
// Student where matches search
// Students filtered by active


// getting all students
router.get('/', async (req, res) => {
    const students = await Student.find({}).exec()
    res.status(200).json(students)
})
// create a new student
router.post('/', async (req, res) => {
    try {
        const student = await Student.create(req.body)
        res.status(200).json(student)
    } catch (err) {
        res.send(err)
    }
})
// get student by id
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
router.get("/:location", async (req, res) => {
    try {
        const student = await Student.find({
            academy: req.params.location
        }).exec()
        res.status(200).json(student)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router