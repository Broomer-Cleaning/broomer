const db = require('../config/connection');
const { User, Job } = require('../models');

const userData = require('./userData.json');
const jobData = require('./jobData.json');

db.once('open', async () => {
  await User.deleteMany({});
  await Job.deleteMany({});

  await User.insertMany(userData);
  await Job.insertMany(jobData);

  console.log('Technologies seeded!');
  process.exit(0);
});
