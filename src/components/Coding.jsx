import React from "react";
import '../styles/Coding.css';
import { HashLink as Link } from 'react-router-hash-link';
import Navbar from "./Navbar";
import WasteSensorSchematic from "../media/coding/waste_sensor.png"
import PlotThePlot from "../media/coding/plot_the_plot.png"
import AdHunterPoster from "../media/coding/ad_hunter_poster.png"
import Robotics from "../media/coding/robotics.png"
import QualiaCookbook from "../media/coding/qualia_cookbook.png"

const stanfordLink = "http://news.stanford.edu/2019/07/11/students-develop-technology-measures-dumpster-usage/";
const robotLink = "https://www.youtube.com/watch?v=C7MjA_qvWVY&ab_channel=bb1of3"

function Coding() {
  return (
    <div className="coding-container">

        <Navbar />
        <div className="page-content">
          <div className="codePage">
            <p>
              At the moment, all of my professional experience pertains to full stack web development. 
              However, I've dabbled in mechatronics and AI as well, as you'll see below. <br/>
            </p>

            <Link smooth className="anchor" id="qualiacookbook" to="#qualiacookbook"><h2>Qualia Cookbook</h2></Link>
            <p>
              Recently, I built a website that I'm pretty proud of. It's called 
              <a href="https://mbbbackus.github.io/qualiaCookbook/#/"> the qualia cookbook</a>. My goal is to
              post my writing about qualia on my own website instead of on a conventional blog because I want to be able to
              customize the reading experience. I want to be able to add images, videos, and interactive elements,
              and in particular, I've added a nested reading experience such that you can click on a link and it will
              expand the article within the page so that you can easily keep track of what you're reading.
              <br/><br/>
              It's a work in progress, but I'm especially proud of the main articles that I've written as well as the 
              unique user interface.
              <br/><br/>
              <img className="code-img" src={QualiaCookbook}/>
            </p>

            <Link smooth className="anchor" id="plottheplot" to="#plottheplot"><h2>Plot the Plot</h2></Link>
            <p>
              After college, I built a website called Plot the Plot
              that visualizes how the quality of a tv show changes over time. Below is
              a visualization generated by the website for Game of Thrones, which is particularly
              interesting because of how far the ratings dropped during the last season. 
              <br/><br/>
              I learned a lot about web scraping and data visualization while building this website. Ultimately,
              I had to shut it down because it was too expensive. IMDB doesn't supply a normal API. Just zip
              files that get updated every sunday. I was paying $50 a month for a server that would download and
              organize the data. Furthermore, I wanted data about which actors were in which episodes, but
              IMDB didn't make that available. It was a fun project though! My friends were mad when I ended it
              because they loved using it.
              <br/><br/>
              <img className="code-img" src={PlotThePlot}/>
            </p>

            <Link smooth className="anchor" id="wastesensor" to="#wastesensor"><h2>Stanford Waste Sensor</h2></Link>
            <p>
              I spent my Junior and Senior year at Stanford developing a cheap
              sensor that could measure the capacity of the dumpsters on campus and
              send this data to a live web portal. <a href={stanfordLink}>Here's an article about my work</a>.
              And below you can see a simple schematic of the prototype.
              <img className="code-img" src={WasteSensorSchematic} />
            </p>

            <Link smooth className="anchor" id="adhunter" to="#adhunter"><h2>Ad Hunter</h2></Link>
            <p>
              For one of my classes at Stanford, some friends and I developed a classifier
              that would classify instagram posts as either ads or not. The motivation was 
              derived from the recent FCC laws that require all sponsored/influencer content on
              social media websites to be clearly marked as advertisements.
              The code is all <a href="https://github.com/mbbbackus/InstagramPosts">on Github</a>.
              Our project poster can be seen below: <br/><br/>
              <img className="code-img" src={AdHunterPoster}/>
            </p>

            <Link smooth className="anchor" id="vexrobotics" to="#vexrobotics"><h2>Vex Robotics</h2></Link>
            <p>
              In high school, I participated in my school's 
              competitive <a href="https://www.vexrobotics.com/">Vex Robotics</a> program. I
              was and still am extremely proud of the robot I built senior year, which won three
              tournaments and the innovate award at the Virginia state tournament. <br/><br/>

              <a href={robotLink}>Here's a video discussing the work that went into the robot.</a><br/><br/>
              <img className="code-img" src={Robotics}/>
            </p>
          </div>
        </div>
    </div>
  );
}

export default Coding;