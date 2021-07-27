const { AuthenticationError } = require('apollo-server-express');
const { Book, User } = require('../models');
const { signToken } = require('../utils/auth');
const mongoose = require('mongoose')

const resolvers = {
    Query: {
        // get all books
        users: async () => {
          return User.find({});
        },

        me: async (parent, args, context) => {
          if (context.user) {
            return User.findOne({_id: context.user._id});
          }
        }

        // // Book is not an object?
        // book: async() => {
        //     return Book.find({})
        // }
      },
    Mutation: {
        createUser: async ( parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            
            return {token, user}
          },

        saveBook: async (parent, {bookData}, context) => {
            if (context.user) {
                const updateUser = await User.findByIdAndUpdate(
                    {_id: context.user._id},
                    {$push: {savedBooks: bookData}},
                    {new: true, runValidators: true}
                )
                console.log(updateUser)
                return updateUser
            }
            throw new AuthenticationError("Only logged in users can keep a book list.")
        },

        // Updating a user's set of 'savedBooks' based on the book's ID
        removeBook: async (parent, {bookId}, context) => {
            if (context.user) {
                const book = await User.findOneAndUpdate (
                    {_id: context.user._id},
                    {$pull: {savedBooks: {bookId: bookId}}},
                    {new: true}
                );
                return book
            }
            throw new AuthenticationError('You need to be logged in!')
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
          }
    },
};

module.exports = resolvers