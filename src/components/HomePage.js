import React, { Component } from "react";
import profilePic from "../media/profile_pic.jpg";
import resume from "../media/writing/Backus_Resume.pdf";

class HomePage extends Component {
  render () {
    return (
        <div>
            <div className="navbar">
                <a className="nav-link selected-tab" href="/">Home</a>
                <a className="nav-link" href="/#/Code/">Code</a>
                <a className="nav-link" href="/#/Art/">Art</a>
                <a className="nav-link" href="/#/Writing/">Writing</a>
            </div>
            <div className="page-content">
              <div className="home-page">
                <div className="text-container">
                  <p className="about-text">
                    Hi! I’m Ben Backus. I grew up in Great Falls, Virginia, 
                    and I come from a family of entrepreneurs.
                    <a href="https://johnback.us"> [1] </a>
                    <a href="https://poised2sell.com/">[2] </a>
                    <a href="https://proof.vc/team/john-backus/">[3] </a><br/><br/>
                    I recently graduated from Stanford University with a 
                    degree in <a href="https://symsys.stanford.edu/">Symbolic Systems</a>. <br/><br/>

                    Here's <a href={resume}>my resumé</a>,

                    here's <a href="https://github.com/mbbbackus">my github</a>,

                    and here’s <a href="https://www.linkedin.com/in/ben-backus-72845492/"> 
                    my LinkedIn</a>. <br/><br/>

                    For a while I’ve been interested in silly stuff like 
                    how to program a robot to have human experiences or how to 
                    live a meaningful life. So far, I have two conclusions: <br/><br/>

                    1. <a href="https://plato.stanford.edu/entries/qualia/">Qualia</a> cannot and will not be synthesized via math, science, 
                    or computation, as they exist today. <br/><br/>
                    2. The experiences of coding cool websites, painting pretty 
                    pictures, and writing chaotic stories are all suprisingly 
                    meaningful to me, so I’m gonna keep doing all of that. <br/><br/>

                    There’s a lot more going on in my head than that but I can’t 
                    say the rest of it has been very useful to me, so I’ll leave 
                    it at that. <br/><br/>

                    I’d love it if you checked out some of my creations! It ain’t 
                    much, but it’s honest work :)


                  </p>
                </div>
                <div className="img-container">
                  <img className="profile-pic" src={profilePic}/>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default HomePage;
