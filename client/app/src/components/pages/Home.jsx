import React, { useState } from "react";
import "./Home.css";
import profile from "../../img/foto_cv_propre.png";
import git from "../../img/git.png";
import linkedin from "../../img/linkedin.png";
import pdf from "../../files/CV Marcello.pdf"

export const Home= ()=>{
    return(
        <div className="container myhome-container">
            <div className="row my-welcome-home">
                <h1 className="my-welcome-text "><i>"THERE'S NO PROBLEM WITHOUT A SOLUTION!"</i></h1>
            </div>
            <div className="row justify-content-center">
                <div className="card bg-dark my-card-home ">
                    <h1 className="my-title-home ">WELCOME TO MARCELLO'S PORTFOLIO</h1>
                    <div className="row img-subtle-home">
                        <img src={profile} className="card-img-top my-img-home col-md-7" alt="marcello photo"></img>
                        <div className="row justify-content-center col-md-5 ">
                            <h6 className="card-subtitle mb-2 my-subtle-home">Apprenticeship in Data Analysis and Artificial Intelligence</h6>
                            <button className="btn my-btn mt-5"><a href={pdf} className="nav-link" download={pdf} >Download my PDF CV here</a></button>
                        </div>
                    </div>
                        <div className="card-body">
                       
                        <div className="my-text-home"><p className="card-text">I’m starting an apprenticeship 
                            as a Data Analyst at Data in Cachan. 
                            Through my studies, I’m also learning about artificial intelligence, 
                            coding, and software development, which I’m eager to apply in real projects.</p>
                        </div>
                        <div className="card-footer text-body-secondary mycard-foooter">
                            <a href="https://github.com/marcellodestefano" className="links-img"><img className = "shadow rounded links-img" src={git} /></a>
                            <a href="https://www.linkedin.com/in/marcello-de-stefano-7258241a9/" className="links-img"><img className = "shadow rounded links-img" src={linkedin} /></a>
                        </div>
                    </div>
                </div>
            </div>




        </div>
        
    )


}