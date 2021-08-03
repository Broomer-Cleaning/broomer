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

    input profileInput {
        first_name: String
        last_name: String
        date_of_birth: String
        phone_number: String
        about_me: String
        safety_double_vax: Boolean
        safety_mask: Boolean
        safety_police_check: Boolean
        have_pets: Boolean
    }

    type Job {
        _id: ID!
        street_address: String
        postal_code: String
        employerUser: String
        workerUser: String
        est_hours: Float
        rate_per_hour: Float
        title: String
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
        dateCaseOpened: String
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
        street_address: String
        postal_code: String
        est_hours: Float
        rate_per_hour: Float
        title: String
        job_description: String
        safety_double_vax: Boolean
        safety_mask: Boolean
        safety_police_check: Boolean
        have_pets: Boolean
        emp_provides_meal: Boolean
        emp_provides_drinks: Boolean
        emp_provides_facilities: Boolean
        have_equipment_employer: Boolean
        need_equipment_worker: Boolean
        have_supplies_employer: Boolean
        need_supplies_worker: Boolean
    }

    type Review {
        _id: ID!
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
        me: User
        jobsByUser(profileId: ID): User
        profile(profileId: ID!): User
        specificJob(jobId: ID!): Job
        goodReviews: [Job]
    }

    type Mutation {
        
        # Login/Registration/Profile Updates
        createUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
            profileDetails(profileInput: profileInput): User

        # Creating a job 
        addAJob: User
        updateAJob(jobId: ID!, jobInput: JobDetails): Job

        # The job-open to job-close sequence
        workerAgreeJob(jobId: ID!): User 
        workerCompleteJob(jobId: ID!): Job
        employerCompleteJob(jobId: ID!): Job
        closeJobCase(jobId: ID!): Job
        addReviewWorker(jobId: ID!, review_score_worker: Float!, review_text_worker: String!): Job
        addReviewEmployer(jobId: ID!, review_score_employer: Float!, review_text_employer: String!): Job
    }
`

module.exports = typeDefs;