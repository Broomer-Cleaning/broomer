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
        jobs_worked: [Job]
        jobs_hired: [Job]
        reviews: [Review]  
    }

    type Job {
        _id: ID!
        street_address: String!
        postal_code: String!
        employerId: String
        workerId: String
        est_hours: Float!
        rate_per_hour: Float!
        job_description: String!

        safety_double_vax: Boolean
        safety_mask: Boolean
        safety_police_check: Boolean
        have_pets: Boolean
        have_equipment_employer: Boolean
        need_equipment_worker: Boolean
        have_supplies_employer: Boolean
        need_supplies_worker: Boolean
        emp_provides_meal: Boolean
        emp_provides_drinks: Boolean
        emp_provides_facilities: Boolean

        dataCaseOpened: String!
        dateJobStart: String
        dateJobEnd: String
        dateCaseClosed: String
        dollarsPromised: Int
        Tip: Int
        Currency: String
        review: Review
    }

    type Review {
        _id: ID!
        jobId: String!
        employerId: String!
        workerId: String!
        review_score_worker: Float
        review_text_worker: String
        review_score_employer: Float
        review_text_employer: String
    }

    type Auth {
        token: String!
        user: User
    }

    type Query {
        users: [User]
        jobs: [Job]
        reviews: [Review]    
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth

        login(email: String!, password: String!): Auth
    }
`

module.exports = typeDefs;




// type Mutation {
    
// }