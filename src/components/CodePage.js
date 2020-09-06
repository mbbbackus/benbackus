import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import WasteSensorSchematic from "../media/WasteSensorSchematic.png"
import AdHunterPoster from "../media/AdHunterPoster.png"
import RobotImg from "../media/robotImg.JPG"
import RobotImg2 from "../media/robotImg2.JPG"

let stanfordLink = "http://news.stanford.edu/2019/07/11/students-develop-technology-measures-dumpster-usage/";
let robotLink = "https://www.youtube.com/watch?v=C7MjA_qvWVY&ab_channel=bb1of3"

class CodePage extends Component {
  render () {
    return (
      <div>
        <div className="navbar">
          <a className="nav-link" href="/">Home</a>
          <a className="nav-link selected-tab" href="/#/Code/">Code</a>
          <a className="nav-link" href="/#/Art/">Art</a>
          <a className="nav-link" href="/#/Writing/">Writing</a>
        </div>

        <div className="page-content">
          <div className="codePage">
            <p>
              At the moment, I’m focused on improving my skills as a 
              frontend web developer, but I’ve had a plethora of full 
              stack internships. My strongest technologies 
              are Python/Django and Javascript/React.js. <br/>
            </p>
            <Link smooth className="anchor" id="plottheplot" to="/code#plottheplot"><h2>Plot the Plot</h2></Link>
            <p>
              As of September 2020, I've been working 
              on <a href="http://plottheplot.com">Plot the Plot</a>, a website
              that visualizes how the quality tv shows change over time. Below is
              a visualization generated by the website for Game of Thrones.<br/><br/>
              <img className="code-img" src="https://i.imgur.com/WvjwR3m.png"/>
            </p>

            <Link smooth className="anchor" id="wastesensor" to="/code#wastesensor"><h2>Stanford Waste Sensor</h2></Link>
            <p>
              I spent my Junior and Senior year at Stanford developing a cheap
              sensor that could measure the capacity of the dumpsters on campus and
              send this data to a live web portal. <a href={stanfordLink}>Here's an article about my work</a>.
              And below you can see a simple schematic of the prototype.
              <img className="code-img" src={WasteSensorSchematic} />
            </p>

            <Link smooth className="anchor" id="adhunter" to="/code#adhunter"><h2>Ad Hunter</h2></Link>
            <p>
              For one of my classes at Stanford, some friends and I developed a classifier
              that would classify instagram posts as either ads or not. The motivation was 
              derived from the recent FCC laws that require all sponsored/influencer content on
              social media websites to be clearly marked as advertisements.
              The code is all <a href="https://github.com/mbbbackus/InstagramPosts">on Github</a>.
              Our project poster can be seen below: <br/><br/>
              <img className="code-img" src={AdHunterPoster}/>
            </p>

            <Link smooth className="anchor" id="vexrobotics" to="/code#vexrobotics"><h2>Vex Robotics</h2></Link>
            <p>
              In high school, I participated in my school's 
              competitive <a href="https://www.vexrobotics.com/">Vex Robotics</a> program. I
              was and still am extremely proud of the robot I built senior year, which won three
              tournaments and the innovate award at the Virginia state tournament. <br/><br/>

              <a href={robotLink}>Here's a video discussing the work that went into the robot.</a><br/><br/>
              <img className="code-img-vertical" src={RobotImg}/>
              <img className="code-img-vertical" src={RobotImg2}/>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CodePage;
