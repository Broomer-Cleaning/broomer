import React, {useState} from 'react'
import "./contact.css";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, setErrors, formState: { errors }} = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_78mcLniDsjVeU0wwRh8yM";

  const onSubmit = (data, r) => {
   sendEmail(
     serviceID,
     templateID,
     {
       name: data.name,
       phone: data.phone,
       email: data.email,
       subject: data.subject,
       description: data.description
     },
     userID
   )
   r.target.reset();
 }

 const sendEmail = (serviceID, templateID, variables, userID) => {
   emailjs.send(serviceID, templateID, variables, userID)
     .then(() => {
       setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
     }).catch(err => console.error(`Something went wrong ${err}`));
 }

 return (
  <div id="contactUs" className="contactUs">
  <div className="text-center">
  <h1>contact us</h1>
   <p>Please fill out the form and we will contact you shortly</p>
   <span className="success-message">{successMessage}</span>
  </div>
  <div className="container">
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="row">
      <div className="col-md-6 col-xs-12">
        <div className="text-start">
         <input 
           type="text"
           className="form-control"
           placeholder="Name"
           name="name"
           {...register("name", {
            required:"Please enter name...",
            maxLength: {
              value: 20,
              message: "Please enter the name with fewer than 20 characters..."
             }
          })}
         />
         <ErrorMessage errors={errors} name="name"/>
         <div className="line"></div>
        </div>
        {/* <span className="error-message">{errors.name && errors.name.message}</span> */}
        <div className="text-start">
         <input 
           type="text"
           className="form-control"
           placeholder="Phone Number"
           name="phone"
           {...register("phone", {
            required: "Please enter your phone number...",
          })}
         />
          <ErrorMessage errors={errors} name="phone"/>
         <div className="line"></div>
         </div>
         {/* <span className="error-message">{errors.phone && errors.phone.message}</span> */}
        <div className="text-start">
         <input 
           type="email"
           className="form-control"
           placeholder="Email"
           name="email"
           {...register("email", {
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid Email"
            }
          })}
         />
          <ErrorMessage errors={errors} name="email"/>
         <div className="line"></div>
        </div>
        {/* <span className="error-message">{errors.email && errors.email.message}</span> */}

        <div className="text-start">
         <input 
           type="text"
           className="form-control"
           placeholder="Subject"
           name="subject"
           {...register("subject", {
            required: "OOPS, you forget to add the subject...",
          })}
         />
          <ErrorMessage errors={errors} name="subject"/>
         <div className="line"></div>
        </div>
        {/* <span className="error-message">
            {errors.subject && errors.subject.message}
          </span> */}

      </div>
      <div className="col-md-6 col-xs-12">
       <div className="text-start">
         <textarea
           type="text"
           className="form-control"
           placeholder="Description"
           name="description"
           {...register("description", {
           required: "Please describe shortly what it is regarding for...",
          })}

          ></textarea>
           <ErrorMessage errors={errors} name="description"/>
         <div className="line"></div>
        </div>
        {/* <span className="error-message">{errors.description && errors.description.message}</span> */}
        <button className="btn-main contact-btn" type="submit">contact me</button>
      </div>
    </div>
    </form>
  </div>
</div>
 )
}

export default Contact
