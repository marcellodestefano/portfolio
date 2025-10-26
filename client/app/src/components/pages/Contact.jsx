import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css";
import git from "../../img/git.png";
import linkedin from "../../img/linkedin.png";

export const Contact= ()=>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_sznvz5t',       
            'template_jw9gy9s',      
            form.current,
            '5eQBmcAODUPaOy-id'         
        )
        .then(
            (result) => {
            console.log('Email sent successfully:', result.text);
            alert('Message sent!');
        },
        (error) => {
            console.error('Error sending email:', error.text);
            alert('Failed to send message.');
        }
        );

    e.target.reset(); // reset form after submission
  };

    return(
        <div className="my_contact flex-wrap">
            <div className="card bg-dark border-secondary text-center my_card shadow">
                <div className="card-header">
                    Contact informations :
                </div>
                <div className="card-body">
                    <h4 className="card-title">Marcello De Stefano</h4>
                    <h5 className="card-text">+33 6 22 49 97 98</h5> 
                    <h5 className="card-text">marcello_destefano@hotmail.com</h5> 
                    
                    <div className="card-footer text-body-secondary mycard-foooter">
                    <a href="https://github.com/marcellodestefano" className="links-img"><img className = "shadow rounded links-img" src={git} /></a>
                    <a href="https://www.linkedin.com/in/marcello-de-stefano-7258241a9/" className="links-img"><img className = "shadow rounded links-img" src={linkedin} /></a>
                    </div>
                </div>
            </div>

            <div className="card bg-dark border-secondary my-form shadow">
                <div className="card-header text-center">
                    <h4 className="card-title">Send me a message :</h4>
                </div>
                <div className="card-body">
                    <form ref={form} onSubmit={sendEmail}>
                <div>
                    <label htmlFor="email1" className="form-label">Email address :</label>
                    <input type="email" className="form-control mb-3" id="Inputemail1" placeholder="example@gmail.com" name="email" required />
                </div>
                <div>
                    <label htmlFor="name" className="form-label">Name :</label>
                    <input type="text" className="form-control mb-3" id="Inputname" placeholder="Fabrizio" name="name" required/>
                </div>
                <div>
                    <label htmlFor="lastname" className="form-label">Lastname :</label>
                    <input type="text" className="form-control mb-3" id="Inputlastname" placeholder="Romano" name="lastname" required />
                </div>
                <div>
                    <label htmlFor="company" className="form-label">Company :</label>
                    <input type="text" className="form-control mb-3" id="Inputcompany" placeholder="Enter the company name here ..." name="company" required/>
                </div>
                <div className="mb-3 mt-5">
                    <label htmlFor="message" className="form-label">Message :</label>
                    <textarea className="form-control mb-3" id="Inputmessage" placeholder="Enter your message here ..." name="message" required/>
                </div>    
                <div className="card-footer text-body-secondary mycard-foooter">
                    <button type="submit" className="btn my-btn">Here we go!</button>
                </div>
                    </form>
                </div>
            </div>
            
            
        </div>
    )


}