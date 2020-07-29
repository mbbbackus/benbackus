import React, { Component } from "react";
import backus_resume from "../media/backus_resume.jpg";

class CodePage extends Component {
  render () {
    return (
      <div className="codePage">
        <div className="text-container">
          <p className="code-text">
            At the moment, I’m trying to improve my skills as a 
            frontend web developer. I’ve had a plethora of full 
            stack internships, but I find UI problems to be the 
            most interesting to solve. My strongest technologies 
            are definitely Python/Django and Javascript/React.js. <br/><br/>

            My github can be found here: https://github.com/mbbbackus<br/><br/>

            I’ve written a lot more code professionally than I 
            have for hobby, so here’s my LinkedIn for reference:
            https://www.linkedin.com/in/ben-backus-72845492/<br/><br/>

            I’m working on some projects at the moment (as of 
            August 2020) so expect them to show up here soon.<br/><br/>

            In the meantime, here’s my resumé!
          </p>
        </div>
        <div className="resume-container">
          <img className="resume" src={backus_resume}/>
        </div>
      </div>
    );
  }
}

export default CodePage;
