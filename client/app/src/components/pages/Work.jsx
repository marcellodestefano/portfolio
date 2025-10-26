import React, { useState } from "react";
import "./Work.css";
import chezmamie from "../../img/chezmamie.png";
import couleur from "../../img/couleur.png";
import pizzacap from "../../img/pizzacap.png";


export const Work= ()=>{
    return(
        <div className="container ">
                    <div className="row justify-content-center">
                        <div className="card bg-dark my-card-studies ">
                            <h1 id=""className="my-title-studies ">Work Experiences</h1>
                            <div className="row img-subtle-studies">
                                <div className="row justify-content-center">
                                    <h6 className="card-subtitle mb-2 my-subtle-studies">My Working journey</h6>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="my-text-studies">
                                    <p className="card-text">
                                        Soon a Data Analyst at Data !!
                                    </p>
                                    
                                </div>
                                <div className="card-footer text-body-secondary mycard-foooter">
                                    <ul className="myul-studies">
                                        <li className="nav-item myli-studies">
                                            <a href="#Data" className="nav-link mylink-studies myli-studies" >
                                                Data 
                                            </a>
                                        </li>
                                        <li className="nav-item myli-studies">
                                            <a href="#ChezMamie" className="nav-link mylink-studies myli-studies" >
                                                Jobs Etudiants
                                            </a>
                                        </li>
                                    </ul>                               
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Data" className="row justify-content-center">
                        <div className="card bg-dark mb-3 my-card-studies">
                            <div className="row g-0">
                                <div className="col-md-4 d-flex bg-white justify-content-center align-items-center">
                                    <h5 className="card-title my-title-school text-black">Coming soon...</h5>
                                {/* <img src="" className="img-fluid rounded-start" alt="Data" /> */}
                                </div>
                                <div className="col-md-8 ">
                                <div className="card-body">
                                    <h5 className="card-title my-title-school">Soon</h5>
                                    <p className="card-text my-text-school"><small>jan 2026 to nov 2028</small></p>
                                    <p className="card-text my-text-school">
                                        Soon to be...
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="ChezMamie" className="row justify-content-center">
                        <div className="card bg-dark mb-3 my-card-studies">
                            <div className="row g-0">
                                <div className="col-md-4 d-flex bg-white justify-content-center align-items-center">
                                    <img src={chezmamie} className="img-fluid rounded-start" alt="Chez Mamie" />
                                </div>
                                    <div className="col-md-8 ">
                                        <div className="card-body">
                                            <h5 className="card-title my-title-school">Chez Mamie - Toulouse</h5>
                                            <p className="card-text my-text-school"><small>jan 2022 to nov 2024</small></p>
                                            <p className="card-text my-text-school">
                                                CDI - 30h a week during studies.</p>
                                            <p className="card-text my-text-school">
                                                I worked as a cook to pay for my studies in the bar "Chez Mamie" in Toulouse.
                                                I was in charge of the second shift. 
                                                Before my arrival the second shift wasn't working smoothly and once I arrived, 
                                                I reorganized the shift of the evening and managed to bring interest to the food service of the bar.
                                                This exeprience allowed me to have a first taste of what managing means and how it can enhance productivity. 
                                            </p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="card bg-dark mb-3 my-card-studies">
                            <div className="row g-0">
                                <div className="col-md-4 bg-white">
                                    <img src={couleur} className="img-fluid rounded-start" alt="couleur logo" />
                                </div>
                                    <div className="col-md-8 ">
                                        <div className="card-body">
                                            <h5 className="card-title my-title-school">La Couleur de la Culotte - Toulouse</h5>
                                            <p className="card-text my-text-school"><small>oct 2021 to jan 2022</small></p>
                                            <p className="card-text my-text-school">
                                                CDI - 25h a week during studies.</p>
                                                <p className="card-text my-text-school">
                                                I worked as a helper to the cook during 1 year and a half.
                                                There i learned to manage my time and a kitchen and taught me to be more efficient and organized
                                                in all the aspects of my life.
                                                Due to the time taken away from studies for work, I had to manage hours in the most efficient way.
                                                </p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="card bg-dark mb-3 my-card-studies">
                            <div className="row g-0">
                                <div className="col-md-4 d-flex bg-black justify-content-center align-items-center">
                                    <img src={pizzacap} className="img-fluid rounded-start" alt="pizzacap logo" />
                                </div>
                                    <div className="col-md-8 ">
                                        <div className="card-body">
                                            <h5 className="card-title my-title-school">PizzaCap - Toulouse</h5>
                                            <p className="card-text my-text-school"><small>sept 2020 to july 2021</small></p>
                                            <p className="card-text my-text-school">
                                                CDI -30h a week during studies.</p>
                                            <p className="card-text my-text-school">
                                                I worked as a Pizzaiolo in a small Pizzeria in Toulouse.
                                                Most of our orders where from Uber and Deliveroo due to Covid-19.
                                                There i Worked with a little team of 2 persons and I had my first professional experience in 
                                                the Hotellerie sector.
                                            </p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
    )


}