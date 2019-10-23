const router = require('express').Router()
let Student = require('../models/students.model')
const Bcrypt = require("bcryptjs")



//Routes
// All Students
// Student by location
// Student where matches search
// Students filtered by active


// getting all students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find({})
        res.status(200).send(students)
    } catch (err) {
        res.status(500).send(err)
    }
})


// create a new student
// POST /students/add
router.post('/add', async (req, res) => {
    try {
        req.body.password = Bcrypt.hashSync(req.body.password, 12);
        const student = await Student.create(req.body)
        res.status(200).json(student)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
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
        res.status(500).send(err)
    }
});


// students by location
//GET students/:location
router.get("/", async (req, res) => {
    const location = req.query.location
    try {
        const student = await Student.find({
            $match: {
                "academy": {
                    $regex: req.query.location,
                    $options: "i"
                }
            }
        }).exec()
        res.status(200).json(student)
    } catch (err) {
        resstatus(500).send(err)
    }
})

//Students where search matches
//get students/:chars
router.get("/:chars", async (req, res) => {
    try {
        const match = await Student.find({
            $match: {
                $or: [{
                    'firstName': {
                        $regex: req.params.chars,
                        $options: 'i'
                    }
                }, {
                    'lastName': {
                        $regex: req.params.chars,
                        $options: 'i'
                    }
                }]
            }
        }).exec()
        res.status(200).json(match)

    } catch (err) {
        res.status(500).send(err)
    }
})

//get active students
//get students/active?queryhere
router.get("/active", async (req, res) => {
    try {
        const students = await Student.find({
            "active": true,
            "location": req.query.location
        }).exec()
        res.status(200).send(students)
    } catch (err) {
        res.status(500).send(err)
    }
})
//Login 
router.post("/login", async (req, res) => {
    try {
        const user = await Student.findOne({
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
<<<<<<< HEAD
        res.send({
            message: "The username and password combination is correct!"
        });
    } catch (err) {
        res.status(500).send(err);
=======
        res.status(200).send("Success")
    } catch (error) {
        console.log(error)
>>>>>>> 1d14c2dcfdfb4d88c788a7527efb0226d73b92b2
    }
});
// To implement this one you would need to get the id and send a json object with the attended key value pair
router.post("/attendance/:id", async (req, res) => {
    try {
        const user = await Student.updateOne({
            _id: req.params.id
        }, {
            $set: {
                "attendance": [].push({
                    date: Date.now,
                    attended: req.body.attended
                })
            }
        })
    } catch (err) {
        res.status(500).send(err)
    }
})

//update students
module.exports = router