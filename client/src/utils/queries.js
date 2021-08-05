import { gql } from '@apollo/client';

// Use this when you want to grab every user with an account on the platform
export const QUERY_USERS = gql`
query allUsers {
  users {
    _id
    username
    email
    first_name
    last_name
    date_of_birth
    phone_number
    about_me
    qualifications
    safety_double_vax
    safety_mask
    safety_police_check
    have_pets
    jobs_worked {
      _id
    }
    jobs_hired {
      _id
    }
  }
}
`;

// Use this when you want to find a specific profile/user
// Does not have to be the user themselves
export const QUERY_USER = gql`
query profile($profileId: ID!) {
  profile(profileId: $profileId) {
    _id
    username
    email
    first_name
    last_name
    date_of_birth
    phone_number
    about_me
    qualifications
    safety_double_vax
    safety_mask
    safety_police_check
    have_pets
    jobs_worked {
      _id
    }
    jobs_hired {
      _id
    }
  }
}
`;

// Returns a very detailed profile of the user (i.e., self) logged in
export const GET_ME = gql`
query me {
  me {
    _id
    username
    email
    password
    first_name
    last_name
    date_of_birth
    phone_number
    about_me
    qualifications
    safety_double_vax
    safety_mask
    safety_police_check
    have_pets
    jobs_worked {
      _id
      street_address
      postal_code
      employerUser
      workerUser
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
    }
    jobs_hired _id
      street_address
      postal_code
      employerUser
      workerUser
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
    }
  }
}`;

// Returns a specific job based on jobId
export const GET_SINGLE_JOB = gql`
query specificJob($jobId: ID!) {
  specificJob(jobId: $jobId) {
    _id
    street_address
    postal_code
    employerUser
    workerUser
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
  }
}
`

// Returns all jobs in existence
export const GET_ALL_JOBS = gql`
query jobs {
  jobs {
    _id
    street_address
    postal_code
    employerUser
    workerUser
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
  }
}
`

// Finds all jobs without a start date
// Is used to find out which jobs a worker can apply to in the marketplace.
export const JOBS_ON_MARKET = gql`
query pullOpenJobs {
  pullOpenJobs {
    _id
    street_address
    postal_code
    employerUser
    workerUser
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
    dateCaseOpened
  }
}
`

// Finds all jobs which have been started, but not deemed 'completed' by either the worker or employer
// Is used to determine which jobs are 'in progress'.
export const JOBS_IN_PROGRESS = gql`
  query inProgress {
  inProgress {
    _id
    street_address
    postal_code
    employerUser
    workerUser
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
    dateCaseOpened
    dateJobStart	
    dateJobEndWorker
    dateJobEndEmployer
    dateCaseClosed
  }
}
`

// Finds all jobs which both the worker and employer have completed, but no review left
// Your dashboard will prompt you to 'leave a review'
export const DONE_NO_REVIEWS = gql`

`