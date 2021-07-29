const { AuthenticationError } = require('apollo-server-express');
const { Job, User, Review } = require('../models');
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

        // Expired now that reviews are collapsed into the 'jobs' object
        // reviews: async () => {
        //   return Review.find({})
        // },

        // Returns a single user's profile based on their profile's ID
        profile: async (parent, { profileId }) => {
          return User.findOne({ _id: profileId });
        } 

      },
    Mutation: {
        createUser: async ( parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            
            return {token, user}
          },  

        login: async (parent, {email, password}) => {
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

          // Creates the initial job
          addAJob: async (parent, args, context) => {
            // Creates a Job with location's address
            const job = await Job.create(args);
            
            // The user's username will be 
            // if (context) {
              const addUser = await Job.findByIdAndUpdate(
                {_id: context.user._id},
                {$set: {employerUser: context.user.username}},
                {new: true, runValidators: true}
              )
            // }

            // try {
              return addUser
            //  } catch {
              // return job
            //  } 
            
          },

          // A profile setup; a second step after a user creates their account
          profileDetails: async (parent, {userData}, context) => {
            if (context.user) {
              const updateUser = await User.findByIdAndUpdate(
                {_id: context.user._id},
                {$set: {
                  first_name: userData.first_name,
                  last_name: userData.last_name,
                  date_of_birth: userData.date_of_birth,
                  phone_number: userData.phone_number,
                  about_me: userData.about_me,
                  safety_double_vax: userData.safety_double_vax,
                  safety_mask: userData.safety_mask,
                  safety_police_check: userData.safety_police_check,
                  have_pets: userData.have_pets
                }},
                
                {new: true, runValidators: true}
            )
            console.log(updateUser)
            return updateUser
          }
          throw new AuthenticationError("Only logged in users can keep a book list.")  
        } 
    },
};

module.exports = resolvers