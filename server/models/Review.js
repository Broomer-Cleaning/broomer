const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const reviewSchema = new Schema(
    {
        jobId: {
            type: String,
            // required: true,
        },

        employerId: {
            type: String,
            // required: true,
        },

        workerId: {
            type: String,
            // required: true
        },
        review_score_worker: {
            type: Number
        },
        review_text_worker: {
            type: String,
        },
        review_score_employer: {
            type: Number
        },
        review_text_employer: {
            type: String,
        },
    })

const Review = model('Review', reviewSchema);
module.exports = Review;