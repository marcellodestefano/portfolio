import React, { useState } from "react";
import "./About.css";
import me from "../../img/me.JPG";

export const About= ()=>{
    return(
        <div className="container myhome-container">
                    <div className="row my-welcome-home">
                        <h1 className="my-welcome-text ">About Me</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="card bg-dark my-card-home ">
                            <h1 className="my-title-home ">Marcello De Stefano</h1>
                            <div className="row img-subtle-home">
                                <img src={me} className="card-img-top  col-md-7" alt="marcello photo"></img>
                            </div>
                                <div className="card-body">
                               </div>
                                <div className="my-text-home">
                                    <p className="card-text">
                                        I am Born in Rome, Italy and grew up in Parma.
                                        Once I turned 18 and finished High School i decided to move in France to study and live.
                                    </p>
                                    <p className="card-text">
                                        I speak fluently Italian, French and English.
                                        I Like Football and am a supporter of the As Roma and i like sports in general both to watch and to practice.
                                        I also like music even thought music doesen't like me.
                                        I tried to play Oboe and Guitar, but i am not capable of playing neither one of them.

                                    </p>
                                </div>
                                <div className="card-footer text-body-secondary mycard-foooter">
                                    
                            </div>
                        </div>
                    </div>
        
        
        
        
                </div>
                
    )


}

