import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation createUser($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const LOGIN_USER = gql`
mutation login ($email: String!, $password: String!){
  login(email: $email, password: $password){
    token
    user {
      _id
      username
    }
  }
}
`;

// Allows you to update your profile with details such as first_name, last_name, DOB, etc.
// None of these fields are mandatory
export const UPDATE_PROFILE = gql`
  mutation profileDetails($profileInput: profileInput) {
    profileDetails(profileInput: $profileInput) {
      first_name
      last_name
      date_of_birth
      phone_number
      about_me
      safety_double_vax
      safety_police_check
      safety_mask
      have_pets
  }
}
`;


// Doesn't need input variables. Creates a Job Type, 
// with `dateCaseOpened` timestamped as Date.now() and employerUser as context.user.username
export const ADD_JOB = gql`
mutation {  
	addAJob {
 		jobs_hired {
      _id
      employerUser
      workerUser
      dateCaseOpened
      dateJobStart
      dateJobEndWorker
      dateJobEndEmployer
      dateCaseClosed
    }
    jobs_worked {
      _id
      dateCaseOpened
      dateJobStart
      dateJobEndWorker
      dateJobEndEmployer
      dateCaseClosed
    }
  }
}`

// Allows the creator of the job to update its details.

export const UPDATE_JOB = gql`
mutation updateAJob($jobId: ID!, $jobInput: JobDetails) {
  updateAJob(jobId: $jobId, jobInput: $jobInput) {
    _id
    est_hours
    rate_per_hour
    title
    job_description
    safety_double_vax
    safety_mask
    safety_police_check
    have_pets
    have_equipment_employer
    need_equipment_worker
    have_supplies_employer
    need_supplies_worker
    emp_provides_meal
    emp_provides_drinks
    emp_provides_facilities
  }
}`