const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: ID!
        authors: [String]
        description: String!
        title: String!
        image: String
        link: String
      }
    
      input BookInput {
        bookId: String!
        authors: [String]
        description: String!
        title: String!
        image: String
        link: String
      }

    type Auth {
        token: String!
        user: User
    }

    type Query {
        me: User,
        users: [User]
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth

        saveBook(bookData: BookInput!): User

        removeBook(bookId: String): User

        login(email: String!, password: String!): Auth

    }
`

module.exports = typeDefs;