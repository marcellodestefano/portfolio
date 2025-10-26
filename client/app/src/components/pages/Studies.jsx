import React, { useState } from "react";
import "./Studies.css";
import epitech from "../../img/img_epitech.jpeg";
import miage from "../../img/img_ut1.jpg";
import tse from "../../img/img_tse.png"

export const Studies= ()=>{
    return (
        <div className="container ">
            <div className="row justify-content-center">
                <div className="card bg-dark my-card-studies ">
                    <h1 id=""className="my-title-studies ">Studies</h1>
                    <div className="row img-subtle-studies">
                        <div className="row justify-content-center">
                            <h6 className="card-subtitle mb-2 my-subtle-studies">My studies journey</h6>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="my-text-studies">
                            <p className="card-text">
                                Currently studying Computer Science at Epitech in Paris and enjoying !!
                            </p>
                            <p className="card-text">
                                But prior to that a long journey to end up here!
                            </p>
                        </div>
                        <div className="card-footer text-body-secondary mycard-foooter">
                            <ul className="myul-studies">
                                <li className="nav-item myli-studies">
                                    <a href="#Epitech" className="nav-link mylink-studies myli-studies" >
                                        Epitech
                                    </a>
                                </li>
                                <li className="nav-item myli-studies">
                                    <a href="#Miage" className="nav-link mylink-studies myli-studies" >
                                        Miage
                                    </a>
                                </li>
                                <li className="nav-item myli-studies">
                                    <a href="#TSE" className="nav-link mylink-studies myli-studies" >
                                        Economics and Management
                                    </a>
                                </li>
                                <li className="nav-item myli-studies">
                                    <a href="#AES" className="nav-link mylink-studies myli-studies" >
                                        Social and Economic Administration
                                    </a>
                                </li>
                            </ul>                               
                        </div>
                    </div>
                </div>
            </div>
            <div id="Epitech" className="row justify-content-center">
                <div className="card bg-dark mb-3 my-card-studies">
                    <div className="row g-0">
                        <div className="col-md-4 d-flex">
                        <img src={epitech} className="img-fluid rounded-start" alt="epitech logo" />
                        </div>
                        <div className="col-md-8 ">
                        <div className="card-body">
                            <h5 className="card-title my-title-school">Epitech</h5>
                            <p className="card-text my-text-school"><small>sept 2025 to sept 2028</small></p>
                            <p className="card-text my-text-school">
                                I choosed Epitech because I wanted to enhance my technical Software development 
                                skills and learn more about Computer Sciences in general.
                                I decided that i wanted to learn more technical skills because during my work
                                experiences i noticed that in order to be a good and listened to manager, 
                                you need to be at least as good as the best of your team.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="Miage" className="row justify-content-center">
                <div className="card bg-dark mb-3 my-card-studies">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={miage} className="img-fluid rounded-start" alt="epitech logo" />
                        </div>
                            <div className="col-md-8 ">
                                <div className="card-body">
                                    <h5 className="card-title my-title-school">MIAGE</h5>
                                    <p className="card-text my-text-school"><small>sept 2024 to june 2025</small></p>
                                    <p className="card-text my-text-school">
                                        Once i finished my second year at TSE i started looking around me and asking myself
                                        what kind of work i would have liked to do and I thought that Data Analysis,
                                        AI and Management where a combo i would have liked to learn about more.
                                        That's why i joined MIAGE. 
                                        There i learned the basics of Object Oriented Programming, Data Analysis, Machine Learning 
                                        and agile management.
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div id="TSE" className="row justify-content-center">
                <div className="card bg-dark mb-3 my-card-studies">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={tse} className="img-fluid rounded-start" alt="epitech logo" />
                        </div>
                            <div className="col-md-8 ">
                                <div className="card-body">
                                    <h5 className="card-title my-title-school">Toulouse School of Economics</h5>
                                    <p className="card-text my-text-school"><small>sept 2022 to june 2024</small></p>
                                    <p className="card-text my-text-school">
                                        in sept 2022 I enrolled in TSE to learn more about Economics and Managment.
                                        During this two years i studied Macroeconomics theories, Microeconomics,
                                        descriptive Statistics, inferential Statistics, Mathematics and the bases 
                                        of Data Analysis. 
                                        I liked in particular Data Analysis because I could sens the real needs behind it.
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div id="AES" className="row justify-content-center">
                <div className="card bg-dark mb-3 my-card-studies">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={miage} className="img-fluid rounded-start" alt="epitech logo" />
                        </div>
                            <div className="col-md-8 ">
                                <div className="card-body">
                                    <h5 className="card-title my-title-school">Social and Economic Administration</h5>
                                    <p className="card-text my-text-school"><small>sept 2020 to june 2022</small></p>
                                    <p className="card-text my-text-school">
                                        Once I finished my High School studies at the Liceo Scientifico Guglielmo Marconi 
                                        in Parma, I enrolled in Toulouse 1 Capitole University studying Social and Economic Administration.
                                        I soon realised that my need were differents then what the degree was offering me.
                                        My goal was to deepen my knowledge in Mathemathics and Economics.
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )


}