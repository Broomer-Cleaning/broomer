const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        first_name: String
        last_name: String
        date_of_birth: String
        phone_number: String
        about_me: String
        qualifications: [String]
        safety_double_vax: Boolean
        safety_mask: Boolean
        safety_police_check: Boolean
        have_pets: Boolean
        jobs_worked: [Job]
        jobs_hired: [Job]
    }

    # input profileSetup {
    #     first_name: String
    #     last_name: String
    #     date_of_birth: String
    #     phone_number: String
    #     about_me: String
    #     safety_double_vax: Boolean
    #     safety_mask: Boolean
    #     safety_police_check: Boolean
    #     have_pets: Boolean
    # }

    type Job {
        _id: ID!
        street_address: String!
        postal_code: String!
        employerUser: String
        workerUser: String
        est_hours: Float
        rate_per_hour: Float
        job_description: String
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
        dataCaseOpened: String
        dateJobStart: String
        dateJobEndWorker: String
        dateJobEndEmployer: String
        dateCaseClosed: String
        dollarsPromised: Int
        tip: Int
        currency: String
        review: [Review]
    }

    input JobDetails {
        street_address: String!
        postal_code: String!
        est_hours: Float
        rate_per_hour: Float
        job_description: String
        safety_double_vax: Boolean
        safety_mask: Boolean
        safety_police_check: Boolean
        have_pets: Boolean
        need_supplies_worker: Boolean
        emp_provides_meal: Boolean
        emp_provides_drinks: Boolean
        emp_provides_facilities: Boolean
    }

    type Review {
        _id: ID!
        review_score_worker: Float
        review_text_worker: String
        review_score_employer: Float
        review_text_employer: String
        need_equipment_worker: Boolean
    }

    type Auth {
        token: String!
        user: User
    }

    type Query {
        users: [User]
        jobs: [Job]
        profile(profileId: ID!): User
        specificJob(jobId: ID!): Job
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        
        # profileDetails(userData: profileSetup!): User
        profileDetails(first_name: String, 
        last_name: String, 
        date_of_birth: String,
        phone_number: String,
        about_me: String,
        safety_double_vax: Boolean,
        safety_mask: Boolean,
        safety_police_check: Boolean,
        have_pets: Boolean
        ): User

        # Start here with 'addAJob' mutation
        addAJob(street_address: String, postal_code: String): Job
        # addAJob(jobData: JobDetails!): Job

        updateAJob(jobId: ID!, est_hours: Float, rate_per_hour: Float): Job

        workerAgreeJob(jobId: ID!
        # , workerId: workerUser!
        ): Job 
    }
`

module.exports = typeDefs;