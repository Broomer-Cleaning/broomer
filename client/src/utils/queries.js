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
      review {
        _id
      }
    }
    jobs_hired {
      _id
      review {
        _id
      }
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
      review {
        _id
        review_score_worker
        review_text_worker
        review_score_employer
        review_text_employer
      }
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
      review {
        _id
        review_score_worker
        review_text_worker
        review_score_employer
        review_text_employer
      }
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
    review {
      _id
      review_score_worker
      review_text_worker
      review_score_employer
      review_text_employer
    }
  }
}
`

// Returns all jobs
export const GET_ALL_JOBs = gql`
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
    review {
      _id
      review_score_worker
      review_text_worker
      review_score_employer
      review_text_employer
    }
  }
}
`