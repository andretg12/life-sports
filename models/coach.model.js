const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coachSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    street: {
        type: String,
        trim: true,
        required: true
    },
    state: {
        type: String,
        trim: true,
        required: true
    },
    academy: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true,
        default: "US",
        trim: true
    },
    phone: {
        type: Number,
        required: true
    },
    locations: {
        type: [String],
        required: true,
        trim: true
    },
    picture: {
        type: String,
        trim: true,
        default: "https://www.pinclipart.com/picdir/middle/322-3222849_north-carolina-tar-heels-duke-blue-devils.png"
    },
    email: {
        type: String,
        required: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        trim: true
    },
    privileges: {
        type: [String],
        default: ["Coach"],
    }
})

const Coach = mongoose.model('Coach', coachSchema);

module.exports = Coach;