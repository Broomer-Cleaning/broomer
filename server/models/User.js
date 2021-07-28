const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import schema from Job.js
const jobSchema = require('./Job');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      // required: true,
    },
    last_name: {
      type: String,
      // required: true,
    },
    date_of_birth: {
      type: Date,
      // required: true,
    },
    phone_number: {
      type: String,
      // required: true,
    },
    about_me: {
      type: String,
    },
    // Come back to this later
    qualifications: {
      type: [String],
      default: undefined,
    },
    // Come back to this later
    specifications: {
      type: [String],
      default: undefined,
    },

    jobs_worked: {
      type: Array
    },

    jobs_hired: {
      type: Array
    },

    reviews: {
      type: Array
    }
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
userSchema.virtual('bookCount').get(function () {
  return this.savedBooks.length;
});

const User = model('User', userSchema);

module.exports = User;
