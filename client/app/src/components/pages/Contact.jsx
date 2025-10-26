import "./Contact.css";
import git from "../../img/git.png";
import linkedin from "../../img/linkedin.png";

export const Contact= ()=>{
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
                    <form>
                <div>
                    <label htmlFor="email1" className="form-label">Email address :</label>
                    <input type="email" className="form-control mb-3" id="Inputemail1" placeholder="example@gmail.com" required />
                </div>
                <div>
                    <label htmlFor="name" className="form-label">Name :</label>
                    <input type="email" className="form-control mb-3" id="Inputname" placeholder="Fabrizio" required/>
                </div>
                <div>
                    <label htmlFor="lastname" className="form-label">Lastname :</label>
                    <input type="email" className="form-control mb-3" id="Inputlastname" placeholder="Romano" required />
                </div>
                <div>
                    <label htmlFor="company" className="form-label">Company :</label>
                    <input type="email" className="form-control mb-3" id="Inputcompany" placeholder="Enter the company name here ..." required/>
                </div>
                <div className="mb-3 mt-5">
                    <label htmlFor="message" className="form-label">Message :</label>
                    <textarea className="form-control mb-3" id="Inputmessage" placeholder="Enter your message here ..." required/>
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