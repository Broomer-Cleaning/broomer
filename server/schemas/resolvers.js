const { AuthenticationError } = require('apollo-server-express');
const { Job, User } = require('../models');
const { signToken } = require('../utils/auth');
const mongoose = require('mongoose')

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },

    jobs: async () => {
      return Job.find({});
    },

    jobsByUser: async (parent, { profileId }, context) => {
      return User.findOne({ _id: profileId }).populate("jobs")
    },

    // ✔️✔️
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("jobs");
      }
    },

    // ✔️✔️
    // Returns a single user's profile based on their profile's ID
    profile: async (parent, { profileId }) => {
      return User.findOne({ _id: profileId });
    },

    // Returns a specific job based on its ID
    specificJob: async (parent, { jobId }) => {
      return Job.findOne({ _id: jobId })
    }

  },
  Mutation: {
    // ✔️✔️
    // Creates a user
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user }
    },

    // ✔️✔️
    login: async (parent, { email, password }) => {
      // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
      const user = await User.findOne({ email });
      // If there is no user with that email address, return an Authentication error stating so
      if (!user) {
        throw new AuthenticationError('No user found with these credentials');
      }
      // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
      const correctPw = await user.isCorrectPassword(password);
      // If the password is incorrect, return an Authentication error stating so
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      // If email and password are correct, sign user into the application with a JWT
      const token = signToken(user);
      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },

    // A profile setup; a second step after a User creates their account
    profileDetails: async (parent, {profileInput}, context) => {

      console.log("context.user._id HERE", context.user._id)
      console.log(profileInput)

      // Goal: Find a User type by its ID and update its custom values
      if (context.user) {
        const updateUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $set: profileInput },
          { new: true, runValidators: true }
        )
        console.log(updateUser)
        return updateUser
      }
    },

    // Creates a Job type with a timestamp
    addAJob: async (parent, args, context) => {

      console.log("context.user.username HERE", context.user.username)
      console.log("context.user._id HERE", context.user._id)
      console.log("Street address is HERE", args.street_address)

      // Creates a Job with location's address (the required items so far)
      // Goal: set the Job's employerUser name as the online user's username
      const job = await Job.create(
        {
          employerUser: context.user.username,
          dateCaseOpened: Date()
        }
      );

      console.log("job", job)

      // finds the user who is creating the job, then add the Job ID to the user's jobs_hired array
      const userJobUpdate = await User.findByIdAndUpdate(
        { _id: context.user._id },
        // "new job" is meant to be the ID of the job that's just been added
        { $push: { jobs_hired: job._id } },
        { new: true, runValidators: true }
      ).populate("jobs")

      console.log("JOBUserUpdate HERE", userJobUpdate)

      return userJobUpdate
    },

    updateAJob: async (parent, {jobId, jobInput}, context) => {

      // console.log("context.user._id HERE", context.user._id)
      // console.log("context.user HERE", context.user)
      
      console.log(jobId)
      console.log(jobInput)
      // Goal: to update the Job type with custom details, based on job's ID
      if (context.user) {

        const update = Job.findByIdAndUpdate(
          { _id: jobId },
          { $set: jobInput },
          { new: true, runValidators: true }
        )

        // console.log(update)

        return update
      }
      throw new AuthenticationError("Only logged in users can do this.")
    },

    // Trying to add the worker's ID or username in workerUser variable
    workerAgreeJob: async (parent, { jobId }, context) => {

      // Goal: update Job type based on ID, for timestamp of worker's agreement to start job
      // Also adds User's username to workerId to job

      console.log(context.user.username)

      if (context.user) {
        const workerAgree = Job.findByIdAndUpdate(
          { _id: jobId },
          { $set:
            { // Timestamps the 'jobStart' moment, adds the worker's username
              dateJobStart: Date(),
              workerUser: context.user.username
            }
          },
          { new: true, runValidators: true }
        )
        console.log("WorkerAgree HERE", workerAgree)

        const userWorkerUpdate = await User.findByIdAndUpdate(
          { _id: context.user._id },

          // "new job" is meant to be the ID of the job that's just been added
          // Adds a new job to the jobs_worked array. Repeatedly adds a job if done more than once.

          { $push: { jobs_worked: jobId } },
          { new: true, runValidators: true }
        ).populate("jobs")

        // console.log("JOBUserUpdate HERE", userWorkerUpdate)
        return userWorkerUpdate
      }
      throw new AuthenticationError("Only logged in users can do this.")
    },

    // [Error: "workerCompleteJob" defined in resolvers, but not in schema]
    workerCompleteJob: async (parent, { jobId }, context) => {

      // if (context.user) {
      //   const workerComplete = Job.findByIdAndUpdate(
      //     {_id: jobId},
      //     { $set: 
      //       {
      //         dateJobEndWorker: Date(), 
      //         // dollarsPromised: (est_hours * rate_per_hour)
      //       }
      //     }, { new: true, runValidators: true }
      //     )
      //     return workerComplete
      // }

      if (context.user) {
        const workerComplete = Job.aggregate([
          {
            $match: {
              _id: jobId
            }
          },
          {
            $set: { dateJobEndWorker: Date() }
          },
          {
            $project: {
              _id: 1, dateJobEndWorker: 1, dollarsPromised: { $multiply: [ "$est_hours", "$rate_per_hour"]}
            }
          },
          { new: true, runValidators: true }  
      ])
      
    }
      console.log(workerComplete)
      return workerComplete
    },

employerCompleteJob: async (parent, { jobId }, context) => {

  if (context.user) {
    const employerComplete = Job.findByIdAndUpdate(
      { _id: jobId },
      {
        $set:
        {
          dateJobEndEmployer: Date(),
          // dollarsPromised: (est_hours * rate_per_hour)
        }
      }, { new: true, runValidators: true }
    )
    return employerComplete
  }
},
  closeJobCase: async (parent, { jobId }, context) => {

    if (context.user) {
      const jobComplete = Job.findByIdAndUpdate(
        { _id: jobId },
        {
          $set:
          {
            dateCaseClosed: Date()
          }
        }, { new: true, runValidators: true }
      )
      return jobComplete
    }
  },

    addReviewWorker: async (parent, args, context) => {
      if (context.user) {
        console.log("Need to access nested query")
      }
    },

      addReviewEmployer: async (parent, args, context) => {
        if (context.user) {
          console.log("Need to access nested query")
        }
      }
  },

};

module.exports = resolvers