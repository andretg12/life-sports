const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const academySchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  location: {
    type: String,
    required: true,
    minlength: 2
  },
  street: {
    type: String,
    required: true,
    minlength: 2
  },
  city: {
    type: String,
    required: true,
    minlength: 2
  },
  state: {
    type: String,
    required: true,
    minlength: 2
  },
  zipcode: {
    type: Number,
    required: true,
    minlength: 2
  },
  country: {
    type: String,
    required: true,
    minlength: 2,
    default: "US"
  },
  phoneNum: {
    type: Number,
    required: true,
    minlength: 2
  },
  coach: {
    type: String,
    required: true,
    minlength: 2
  },
  resources: {
    readingList: [
      {
        title: {
          type: String,
          required: true
        },
        author: {
          type: String,
          required: true
        },
        URL: {
          type: String
        }
      }
    ],
    academicArticles: [
      {
        title: {
          type: String,
          required: true
        },
        URL: {
          type: String,
          required: true
        }
      }
    ],
    drillVideos: [
      {
        title: {
          type: String,
          required: true
        },
        URL: {
          type: String,
          required: true
        }
      }
    ],
    sportsArticles: [
      {
        title: {
          type: String,
          required: true
        },
        URL: {
          type: String,
          required: true
        }
      }
    ]
  }
});
const Academy = mongoose.model("Academy", academySchema);

module.exports = Academy;
