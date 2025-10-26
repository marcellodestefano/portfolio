import React, { useState } from "react";
import "./Skills.css";
import web from "../../img/web.png";
import oop from "../../img/oop.png";
import data from "../../img/data.png";
import software from "../../img/img_powerbi.jpeg";


export const Skills= ()=>{
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="card bg-dark my-card-studies ">
                    <h1 id=""className="my-title-studies ">Skills</h1>
                    <div className="row img-subtle-studies">
                        <div className="row justify-content-center">
                            <h6 className="card-subtitle mb-2 my-subtle-studies">My Technical Skills</h6>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="my-text-studies">
                            <p className="card-text">
                                Here is what i am capable of if I have a computer with me!
                            </p>
                        </div>
                        <div className="card-footer text-body-secondary mycard-foooter">
                            <ul className="myul-studies">
                                <li className="nav-item myli-studies">
                                    <a href="#Webdevelopement" className="nav-link mylink-studies myli-studies" >
                                        Web 
                                    </a>
                                </li>
                                <li className="nav-item myli-studies">
                                    <a href="#OOP" className="nav-link mylink-studies myli-studies" >
                                        Programming languages (OOP)
                                    </a>
                                </li>
                                <li className="nav-item myli-studies">
                                    <a href="#Data" className="nav-link mylink-studies myli-studies" >
                                        Data Analysis 
                                    </a>
                                </li>
                                
                            </ul>                               
                        </div>
                    </div>
                </div>
            </div>
            <div id="Webdevelopement" className="row justify-content-center">
                <div className="card bg-dark mb-3 my-card-studies">
                    <div className="row g-0">
                        <div className="col-md-4 d-flex">
                        <img src={web} className="img-fluid rounded-start" alt="epitech logo" />
                        </div>
                        <div className="col-md-8 ">
                        <div className="card-body">
                            <h5 className="card-title my-title-school">Web Developement</h5>
                            <div className="star-rating">
                            <span className="star filled">&#9733;</span>
                            <span className="star filled">&#9733;</span>
                            <span className="star filled">&#9733;</span>
                            <span className="star ">&#9733;</span>
                            <span className="star">&#9733;</span>
                            </div>
                            <p className="card-text my-text-school">
                                I give myself 3 stars because today i feel at ease creating web applications. 
                                I know how to make them responsive with frameworks such as Bootstrap or Materialize.
                                I also know how to use React and make the website dynamic.
                                Finally i know how to connect the front end with the backend using React and Django.
                                Even though I think there is still lots to learn and I can always improve.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="OOP" className="row justify-content-center">
                <div className="card bg-dark mb-3 my-card-studies">
                    <div className="row g-0">
                        <div className="col-md-4 d-flex">
                        <img src={oop} className="img-fluid rounded-start" alt="epitech logo" />
                        </div>
                        <div className="col-md-8 ">
                        <div className="card-body">
                            <h5 className="card-title my-title-school">Objects Orientend Programmation </h5>
                            <div className="star-rating">
                            <span className="star filled">&#9733;</span>
                            <span className="star filled">&#9733;</span>
                            <span className="star ">&#9733;</span>
                            <span className="star ">&#9733;</span>
                            <span className="star">&#9733;</span>
                            </div>
                            <p className="card-text my-text-school">
                                I give myself two stars out of five because even though I fully understand what I am doing,
                                I know that, at this time, I still have too much to learn to give myself a higher grade.
                                I am sure that this grade is going to raise and I can't wait to do it.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="Data" className="row justify-content-center">
                <div className="card bg-dark mb-3 my-card-studies">
                    <div className="row g-0">
                        <div className="col-md-4 d-flex">
                        <img src={data} className="img-fluid rounded-start" alt="epitech logo" />
                        </div>
                        <div className="col-md-8 ">
                        <div className="card-body">
                            <h5 className="card-title my-title-school">Data Analysis</h5>
                            <div className="star-rating">
                            <span className="star filled">&#9733;</span>
                            <span className="star filled">&#9733;</span>
                            <span className="star filled">&#9733;</span>
                            <span className="star ">&#9733;</span>
                            <span className="star ">&#9733;</span>
                            </div>
                            <p className="card-text my-text-school">
                                I give myself three stars out of five because I fully understand the main conepts of Data Analysis 
                                and I know how to exploit the simple funcitons of a Data Base programming language.
                                Even thought I must learn much more about the technical part, my studies and my curiosity
                                make me able to easily choose useful insights.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        
        </div>
    )
    

}