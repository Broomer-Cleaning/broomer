const { AuthenticationError } = require('apollo-server-express');
const { Job, User, Review } = require('../models');
const { signToken } = require('../utils/auth');
const mongoose = require('mongoose')

const resolvers = {
  Query: {
    // ✔️✔️
    users: async () => {
      return User.find({});
    },
    
    // ✔️✔️
    jobs: async () => {
      return Job.find({});
    },

    // ✔️✔️
    // Returns a single user's profile based on their profile's ID
    profile: async (parent, { profileId }) => {
      return User.findOne({ _id: profileId });
    },

    // Returns a specific job based on its ID
    specificJob: async (parent, {jobId}) => {
      return Job.findOne({ _id: jobId})
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
    profileDetails: async (parent, args, context) => {

      console.log("context.user._id HERE", context.user._id)
      console.log(args)
      
      // Goal: Find a User type by its ID and update its custom values
      if (context.user) {
        const updateUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $set: args },
          { new: true, runValidators: true }
        )
        console.log(updateUser)
        return updateUser
      }
    },

    // Creates a Job type with a timestamp
    addAJob: async (parent, args, context) => {

      // To Better understand the background
      console.log("context.user HERE", context.user)
      console.log("context.user.username HERE", context.user.username)
      console.log("context.user._id HERE", context.user._id)
      console.log("args", args)

      // Creates a Job with location's address (the required items so far)
      // Goal: set the Job's employerUser name as the online user's username
      const job = await Job.create(
        { employerUser: context.user.username,
          dataCaseOpened: Date.now()
        }
        // { $set: { employerUser: context.user.username } }
      );

      console.log("job", job)

      // finds the user who is creating the job, then add the Job ID to the user's jobs_hired array
      const userJobUpdate = await User.findByIdAndUpdate(
        { _id: context.user._id },
        { $push: { jobs_hired: "new job" } },
        { new: true, runValidators: true }
      )

      console.log("JOBUserUpdate HERE", userJobUpdate)

      return {job, userJobUpdate}
    },

    updateAJob: async (parent, args, context) => {
      console.log(args)
      console.log("context.user._id HERE", context.user._id)
      console.log("context.user HERE", context.user)
      console.log("context.job HERE", context.job)
      
      // Goal: to update the Job type with custom details, based on job's ID
      if (context.user) {

        const update = Job.findByIdAndUpdate(
          { _id: args.jobId },
          { $set: args },
          { new: true, runValidators: true }
        )

        console.log(update)

        return update
      }
      throw new AuthenticationError("Only logged in users can do this.")
    },

    // Trying to add the worker's ID or username in workerUser variable
    workerAgreeJob: async (parent, { jobId
      // , workerId
    }, context) => {

      // Goal: update Job type based on ID, for timestamp of worker's agreement to start job
      // Also adds User's username to workerId to job

      if (context.user) {
        const workerAgree = Job.findByIdAndUpdate(
          { _id: jobId },
          { $set: 
            {
              dateJobStart: Date(), 
              // workerUser: workerId 
            }
          },
          { new: true, runValidators: true }
        )

        console.log(workerAgree)

        return workerAgree
      }
      throw new AuthenticationError("Only logged in users can do this.")

    }
    
  },
};

module.exports = resolvers