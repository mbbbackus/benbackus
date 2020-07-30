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

            Here is <a href="https://github.com/mbbbackus">my github</a>.<br/><br/>

            I’ve written a lot more code professionally (in private repositories) than I 
            have for hobby, so here’s <a href="https://www.linkedin.com/in/ben-backus-72845492/"> 
            my LinkedIn for reference</a><br/><br/>

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
