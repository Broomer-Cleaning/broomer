const db = require('../config/connection');
const { User, Job, Review } = require('../models');

const userData = require('./userData.json');
const jobData = require('./jobData.json');
// const reviewData = require('./reviewData.json')

db.once('open', async () => {
  await User.deleteMany({});
  await Job.deleteMany({});
//   await Review.deleteMany({});

  await User.insertMany(userData);
  await Job.insertMany(jobData);
//   await Review.insertMany(reviewData);

  console.log('Technologies seeded!');
  process.exit(0);
});
