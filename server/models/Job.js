const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const jobSchema = new Schema(
  {
    street_address: {
      type: String,
    },

    postal_code: {
      type: String,
    },

    employerUser: {
      type: String,
    },

    workerUser: {
      type: String,
    },

    // basis for total
    est_hours: {
      type: Number,
      default: 0
    },

    // basis for total
    rate_per_hour: {
      type: Number,
      default: 0
    },

    title: {
      type: String,
    },

    job_description: {
      type: String,
    },

    safety_double_vax: {
      type: Boolean,
      default: false
    },
    safety_mask: {
      type: Boolean,
      default: false
    },
    safety_police_check: {
      type: Boolean,
      default: false
    },
    have_pets: {
      type: Boolean,
      default: false
    },
    have_equipment_employer: {
      type: Boolean,
      default: false
    },
    need_equipment_worker: {
      type: Boolean,
      default: false
    },
    have_supplies_employer: {
      type: Boolean,
      default: false
    },
    need_supplies_worker: {
      type: Boolean,
      default: false
    },
    emp_provides_meal: {
      type: Boolean,
      default: false
    },
    emp_provides_drinks: {
      type: Boolean,
      default: false
    },
    emp_provides_facilities: {
      type: Boolean,
      default: false
    },
    dateCaseOpened: {
      type: Date,
    },

    dateJobStart: {
      type: Date,
    },

    dateJobEndWorker: {
      type: Date,
    },

    dateJobEndEmployer: {
      type: Date,
    },

    dateCaseClosed: {
      type: Date,
    },

    dollarsPromised: {
      type: Number,
      default: 0
    },

    tip: {
      type: Number,
      default: 0
    },

    currency: {
      type: String,
    },

    // This is the review ISSUED BY the worker
    review_score_worker: {
      type: Number
    },
    review_text_worker: {
        type: String,
    },
    
    // This is the review ISSUED BY the employer
    review_score_employer: {
        type: Number
    },
    review_text_employer: {
        type: String,
    }
    
  })

 const Job = model('Job', jobSchema);
module.exports = Job;