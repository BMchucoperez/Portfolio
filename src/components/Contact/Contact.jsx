import styles from "./Contact.module.css";
import { useForm } from "../Helpers/useForm";
import React, { useEffect } from "react";

const Contact = () =>{

  const initialForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  
  const validationsForm = (form) => {
    const errors = {};
    if (!form.name) {
      errors.name = "Name is required";
    }
    if (!form.email) {
      errors.email = "Email is required";
    } else if (!(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(form.email))) {
      errors.email = "Email is not valid";
    }
    if (!form.subject) {
      errors.subject = "Subject is required";
    }
    if (!form.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const {
    form,
    errors,
    response,
    effect,
    handleChange,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  useEffect(() => {
    effect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);
       
    return(
        <div id="contact-section" className={styles.container}>
            <h1>Contact me</h1>
            <h3>Do you want to know more about me?</h3>
            <h3>Don't hesitate and contact me!</h3>
            <br />
            <form onSubmit={handleSubmit} id="contactForm" className={styles.form}>
                <div className={styles.nameEmail}>
                    <input value={form.name} onChange={handleChange} type="text" name="name" placeholder="Your name" />
                    {<p className={styles.txt}>{errors.name}</p>}
                    <input value={form.email} onChange={handleChange} type="email" name="email" placeholder="Your email" />
                    {<p className={styles.txt}>{errors.email}</p>}
                </div>
                <br />
                <div className={styles.message}>
                    <input value={form.subject} onChange={handleChange} type="text" name="subject" placeholder="Subject"/>
                    {<p className={styles.txt}>{errors.subject}</p>}
                    <br />
                    <textarea value={form.message} onChange={handleChange} name="message" placeholder="Your message"></textarea>
                    {<p className={styles.txt}>{errors.message}</p>}
                    <br />
                    <button className={styles.btn} type="submit">Send message</button>
                </div>
                <div>
          </div>
            </form>
        </div>
    );
};

export default Contact;