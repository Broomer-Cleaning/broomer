const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

const jobSchema = new Schema(
{
    id: {
        type: String,
        allowNull: false,
        // primaryKey: true,
      },

      employerId: {
        type: String,
        allowNull: false,
      },

      workerId: {
        type: String,
        allowNull: false,
      },

      dateCaseOpened: {
        type: Date,
        allowNull: false,
        autoIncrement: true,
      },

      dateJobStart: {
        type: Date,
        allowNull: false,
      },

      dateJobEnd: {
        type: Date,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      dateCaseClosed: {
        type: Date,
        allowNull: false,
        autoIncrement: true,
      },

    //   billable_Hours

    // Rate

    // Total

    // Location: 

    dollarsPromised: {
        type: Number,
        allowNull: false,
      },

      Tip: {
        type: Number,
        allowNull: false
      },

      Currency: {
        type: Number,
        allowNull: false,
        autoIncrement: true,
      },

      Currency: {
        type: Number,
        allowNull: false,
        format: Currency
      },

      reviewEmployer: {
        type: String,
        allowNull: false,
      },
    }),