const db = require('../config/connection');
const { User, Job } = require('../models');

const userData = require('./userData.json');
const jobData = require('./jobData.json');

// console.log(userData[0])

db.once('open', async () => {
  await User.deleteMany({});
  await Job.deleteMany({});
  var users = []

  for (let i = 0; i < userData.length; i++) {
   var x = await User.create(userData[i])
   users.push(x)
  }

  const newJobs = await Job.insertMany(jobData);
  console.log(newJobs.length)

  for (let i = 0; i < newJobs.length; i++) {
    users[0].jobs_worked.push(newJobs[i])
    await users[0].save()
  }

  console.log('Technologies seeded!');
  process.exit(0);
});
