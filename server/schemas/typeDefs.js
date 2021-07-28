const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        first_name: String!
        last_name: String!
        date_of_birth: String!
        phone_number: String!
        about_me: String
        qualifications: [String]
        specifications: [String]
        job_worked: [String]
        jobs_hired: [String]
        reviews: [String]
        
    }

    type Auth {
        token: String!
        user: User
    }

    type Query {
        users: [User]    
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth

        login(email: String!, password: String!): Auth
    }
`

module.exports = typeDefs;




// type Mutation {
    
// }