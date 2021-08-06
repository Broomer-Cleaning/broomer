# Broomer Cleaning

 ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

  ## Table of contents
 * [Description](#GDescription)
 * [User Story](#User-Story)
 * [Installation](#Installation)
 * [Functionality](#Functionality)
 * [Contributing](#Contributing)
 * [Questions](#Questions)
 * [Deployment of application](#Deployment-of-application)
 * [Application Code](#Application-Code)
 * [Screenshots](#Screenshots)
 * [Future Developments](#Future-Developments)

# Description

 Broomer is a MERN+GraphQL stack application that connects local cleaning tasks to qualified workers with one another for some quick cash. Creating a profile allows usersto  post and accept jobs in your surrounding areas. Jobs available to you are specific to your qualifications as a worker, and vice versa. A set hourly wage, estimated number of hours, and tip is decided on after each task is completed with the option for both the worker and employer to leave a review. Your work information is tracked in your dashboard, upon which you can view your lifetime jobs, as well as your total monies made through their Broomer Cleaning Career.

# User Story

 ## Employer
 <pre> AS a person with a messy house and not enough time
 I WANT an online service that quickly finds cleaners for my living spaces (houses, garages, cars).
 THEN I pay workers upon completion of job</pre>

 ## Worker
</pre> AS a worker who is willing to clean for others
 I WANT an online platform to offer my services and to get hired for quick jobs.
 THEN receiving pay upon completion of each job</pre>

## As a User..
<pre> 
 WHEN I reach the homepage
 THEN I am given a log-in/sign-up option to provide credentials
 WHEN I provide the proper credentials
 THEN I am taken to my dashboard, allow access to all features</pre>

## As an Employer..
 <pre>  ONCE I am logged in
 WHEN viewing the dashboard, I am able to post jobs
 THEN allowing workers to accept 
 WHEN job is accepted, worker arrives and completes job
 THEN being given from wages promised, the employer pays the worker with the option of a tip
 Outside of the application, the worker presumably visits the work site and fulfills the job requirements.
 WHEN both parties validate the job is complete
 THEN the job closes, logging the information on both users dashboard</pre>

## As a Worker..
<pre>  ONCE I am logged in
 I can see my dashboard with available jobs within a selected range
 WHEN viewing jobs, workers are presented a variety of jobs from multiple employers
 THEN allowing workers to access information regarding each job such as pay, address and equipment required
 WHEN accepting a job, a time period is give to arrive and begin the job
 Outside of the application, the worker presumably visits the work site and fulfills the job requirements.
 WHEN completing a job, both employer and worker verify completion 
 THEN worker gets paid with promised wage and a tip from employers decision with the option of leaving a review
 THEN the job closes, logging the information on both users dashboard</pre>

# Installation

 The following are steps to install the application: run `npm run seeds` in the `server` folder to seed data, `npm install` on the main `broomer` folder, then `npm run build` or `npm run develop` to access React files and to run the website. For backend testing run `node server.js` or `nodemon server`

# Functionality

GraphQL:
Through MongoDB, Node.js, and Express.js, this project runs GraphQL to provide dynamic data to the front end. The following is a breakdown of its queries and mutations:

# Queries
- **Return all existing users**: `users`: all signed up users appear in this list
- **Return all existing jobs**: `jobs`: these range from unmatched to closed cases.
- **Return a specific job**: `specificJob`: Requires the job's jobId
- **Return all of the user's info**: `me`: Returns their profile/dashboard information, including all jobs they've worked or hired for, and all reviews. 
- **Jobs with no match**: `pullOpenJobs`: where jobCaseOpen has a value but jobCaseStart does not
- **Jobs in progress**: `inProgress`: where jobCaseStart has a value but JobCaseEnd does not
- **Jobs with no review**: `noReviews`: i.e., with dateJobEndWorker and dateJobEndEmployer but no dateJobCaseClosed - will appear in the ‘Jobs Completed’ section of the dashboard


# Mutation Timeline
- **Create the user**: `createUser`: Provide the username, email, and password to create a User type
- **Login**: `login`: Enter your registered credentials into the login form
- **Update the user**: `profileDetails`: While logged in, the user will update their profile and provide details such as first_name, last_name, date_of_birth
- **Create a job**: `addAJob`: After providing the profile information, a user can create a job; the Job type returned includes the _id and the username of the Employer/User who submitted the mutation.
- **Fill out job information**: `updateAJob`: The employer then fills out the mandatory information (is blocked by front-end, not by GraphQL, if not filled out). The description, and safety-related accommodation booleans are updated. The `dateCaseStart` variable is timestamped with `Date.now()`.
- **Worker agrees to a job**: `workerAgreeJob`. A different user - the worker - agrees to a job (no additional vetting required), at which point the `dateJobStart` variable is updated to `Date.now()`. 
- **Worker submits job for review**: `workerCompleteJob`: When the worker is finished, they submit their work as completed; the `dateJobEndWorker` variable gets timestamped to `Date.now()`
- **Employer approves job as complete**: `employerCompleteJob`. The employer agrees that the job is complete. The `dateJobEndEmployer` variable gets timestamped to `Date.now()`
**Both parties submit reviews**: `addReviewWorker`: Separately, the worker and the employer may submit their review score and explanatory text. These get added to their associated Job type and `closeJobCase` gets updated to `Date.now()`. So far, as the code is set up, only the worker can add a review to a job. 

 -React

 -APIs
 
# Contributing

 Contributors: Daniel P, Slavic O, Ahmed H, Anastasia S, 


# Questions
 
 Use "Contact Me" portion in dashboard of application

# Deployment of application

  To run a project, please follow the link 
  [https://broomer-cleaning.herokuapp.com/](https://broomer-cleaning.herokuapp.com/)

# Application Code

  To view application code, please follow the link:
  https://github.com/Broomer-Cleaning/broomer.git 

# Future Developments
 