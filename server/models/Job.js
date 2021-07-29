const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const jobSchema = new Schema(
  {
    street_address: {
      type: String,
      required: true,
    },

    postal_code: {
      type: String,
      required: true,
    },

    employerId: {
      type: String,
    },

    workerId: {
      type: String,
    },

    // basis for total
    est_hours: {
      type: Number,
      required: true
    },

    // basis for total
    rate_per_hour: {
      type: Number,
      required: true
    },

    job_description: {
      type: String,
      required: true
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

    dateJobEnd: {
      type: Date,
    },

    dateCaseClosed: {
      type: Date,
    },

    dollarsPromised: {
      type: Number,
    },

    tip: {
      type: Number,
    },

    currency: {
      type: String,
    },

    review: {
      type: Array
    }
  })

const Job = model('Job', jobSchema);
module.exports = Job;