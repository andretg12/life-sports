const router = require('express').Router();
let Academy = require('../models/academy.model');

router.get('/', async (req, res) => {
    try {
        const academies = await Academy.find({}).exec()
        res.status(200).json(academies)
    } catch (err) {
        res.status(400).send(err)
    }
});

router.post('/add', async (req, res) => {
    try {
        const body = req.body
        const newAcademy = await Academy.create(body)
        res.status(200).json(newAcademy)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.post('/resources/:location', async (req, res) => {
    try {
        const body = req.body
        const location = req.body.location
        const academy = await Academy.find({
            "location": location
        }).exec()
        const newResource = await academy.resources.push(body).save()
        res.status(200).json(newResource)
    } catch (err) {
        res.status(400).send(err)
    }
})