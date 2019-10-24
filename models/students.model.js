const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: false
  },
  attendace: {
    type: [String]
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
  street: {
    type: String,
    trim: true,
    required: true,
    minlength: 2
  },
  state: {
    type: String,
    trim: true,
    required: true,
    minlength: 2
  },
  academy: {
    type: String,
    required: true,
    minlength: 2
  },
  country: {
    type: String,
    required: true,
    default: "US",
    trim: true,
    minlength: 2
  },
  schoolName: {
    type: String,
    trim: true,
    required: true,
    minlength: 2
  },
  schoolId: {
    type: String,
    required: true,
    trim: true

  },
  parentName: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },
  parentEmail: {
    type: String,
    required: true,
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    trim: true
  },
  parentPhone: {
    type: Number,
    required: true
  },
  picture: {
    type: String,
    trim: true,
    default: "https://www.pinclipart.com/picdir/middle/322-3222849_north-carolina-tar-heels-duke-blue-devils.png"
  },
  basketballStats: {
    position: {
      type: String,
      required: true,
      default: "N/A",
      trim: true,
    },
    minutesPlayed: {
      type: Number,
      required: true,
      default: 0
    },
    points: {
      type: Number,
      required: true,
      default: 0
    },
    assists: {
      type: Number,
      default: 0,
      required: true
    },
    blocks: {
      type: Number,
      default: 0,
      required: true
    },
    steals: {
      type: Number,
      default: 0,
      required: true
    },
    fga: {
      type: Number,
      default: 0,
      required: true
    },
    fgm: {
      type: Number,
      default: 0,
      required: true
    },
    freeTA: {
      type: Number,
      default: 0,
      required: true
    },
    freeTM: {
      type: Number,
      default: 0,
      required: true
    },
    rebounds: {
      type: Number,
      default: 0,
      required: true
    },
    gamesPlayed: {
      type: Number,
      required: true,
      default: 0
    },
    tpm: {
      type: Number,
      required: true,
      default: 0
    },
    tpa: {
      type: Number,
      required: true,
      default: 0
    },
    turnovers: {
      type: Number,
      required: true,
      default: 0
    },
    fouls: {
      type: Number,
      required: true,
      default: 0
    }
  },
  soccerStats: {
    position: {
      type: String,
      required: true,
      default: "N/A",
      trim: true
    },
    goals: {
      type: Number,
      required: true,
      default: 0
    },
    matchesPlayed: {
      type: Number,
      required: true,
      default: 0
    },
    playingTime: {
      type: Number,
      required: true,
      default: 0
    },
    assists: {
      type: Number,
      required: true,
      default: 0
    },
    yellowCards: {
      type: Number,
      required: true,
      default: 0
    },
    redCards: {
      type: Number,
      required: true,
      default: 0
    },
    saves: {
      type: Number,
      required: true,
      default: 0
    },
    goalsAgainst: {
      type: Number,
      required: true,
      default: 0
    },
    fouls: {
      type: Number,
      required: true,
      default: 0
    },
    passAttempt: {
      type: Number,
      required: true,
      default: 0
    },
    passMade: {
      type: Number,
      required: true,
      default: 0
    },
    goalAttempt: {
      type: Number,
      required: true,
      default: 0
    },
    onTarget: {
      type: Number,
      required: true,
      default: 0
    },
    milesRun: {
      type: Number,
      required: true,
      default: 0
    }
  },
  academicStats: {
    booksRead: [String],
    gpa: {
      type: String,
      required: true,
      trim: true,
      default: "N/A"
    },
    readingLvl: {
      type: String,
      trim: true,
      required: true,
      default: "N/A"
    }
  }
}, {
  timestamps: true,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;