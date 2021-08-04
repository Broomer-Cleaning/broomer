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

// Allows the creator of the job to update their profile details.
// Can add fields such as 'first_name', 'last_name', 'date_of_birth', etc.
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

// Updates when the worker signs on to a job. Timestamps `dateJobStart` to Date.now()
export const WORKER_AGREE_JOB = gql`
  mutation workerAgreeJob($jobId: ID!) {
  workerAgreeJob(jobId: $jobId) {
    _id
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
      employerUser
      workerUser
      dateCaseOpened
      dateJobStart
      dateJobEndWorker
      dateJobEndEmployer
      dateCaseClosed
    }
  }
}
`
// Updates when the worker submits the job as completed. 
// Timestamps `dateJobEndWorker` to Date.now()
export const WORKER_COMPLETE_JOB = gql`
mutation workerAgreeJob($jobId: ID!) {
  workerAgreeJob(jobId: $jobId) {
    _id
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
      employerUser
      workerUser
      dateCaseOpened
      dateJobStart
      dateJobEndWorker
      dateJobEndEmployer
      dateCaseClosed
    }
  }
}
`
// Updates when the employer submits the job as completed. 
// Timestamps `dateJobEndEmployer` to Date.now()
export const EMPLOYER_COMPLETE_JOB = gql`
mutation employerCompleteJob($jobId: ID!) {
  employerCompleteJob(jobId: $jobId) {
    est_hours
    rate_per_hour
    job_description
    dateCaseOpened
    dateJobStart
    dateJobEndWorker
    dateJobEndEmployer
    dateCaseClosed
    est_hours
    rate_per_hour
    dollarsPromised
  }
}
`

// Allows a user to submit a review to a jobId (mandatory field).
// For now, updates directly to review_score_worker and review_text_worker for texting purposes
// Might be refactored to update worker or employee based on User's relationship to the job
// (i.e., whether their context.user.username matches User's `employerUser` or `workerUser`)

export const ADD_REVIEW_WORKER = gql`
  mutation addReviewWorker($jobId: ID!, 
  		$review_score_worker: Int!,
      $review_text_worker: String!) {
        
  addReviewWorker(jobId: $jobId, 
    review_score_worker: $review_score_worker, 
    review_text_worker: $review_text_worker) {
      
      street_address
    postal_code
    employerUser
    workerUser
    est_hours
    rate_per_hour
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
    dateCaseOpened
    dateJobStart
    dateJobEndWorker
    dateJobEndEmployer
    dateCaseClosed
    dollarsPromised
    tip
    currency
    review_score_worker
    review_text_worker
    review_score_employer
    review_text_employer
`

// Updates when all has been submitted, with reviews exchanged.
// Timestamps `dateCaseClosed` to Date.now()
export const CLOSE_JOB_CASE = gql`
mutation closeJobCase($jobId: ID!) {
  closeJobCase(jobId: $jobId) {
    est_hours
    rate_per_hour
    job_description
    dateCaseOpened
    dateJobStart
    dateJobEndWorker
    dateJobEndEmployer
    dateCaseClosed
    est_hours
    rate_per_hour
    dollarsPromised
  }
}
`