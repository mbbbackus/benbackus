import React from "react";
import '../../styles/About.css';
import resume from "../../media/writing/Backus_Resume_2024.pdf";

function AboutSection() {
  return (
    <div className="about-page">
      <div className="section-title">About</div>
      <div className="text-container">
        <p className="about-text">
          Hi! I'm Ben Backus.
          I graduated from Stanford University with a 
          degree in <a href="https://symsys.stanford.edu/">Symbolic Systems</a>. <br/><br/>

          Here's <a href={resume}>my resumé</a>. <br/>

          Here's <a href="https://github.com/mbbbackus">my github</a>.<br/>

          Here's <a href="https://www.linkedin.com/in/ben-backus-72845492/"> 
          my LinkedIn</a>. <br/><br/>

          I come from a family of entrepreneurs.
          <a href="https://johnback.us"> [1] </a>
          <a href="https://www.linkedin.com/in/peggy-backus-03b7a89/">[2] </a>
          <a href="https://proof.vc/team/john-backus/">[3] </a><br/><br/>

          I'm interested in silly questions like how to get a machine to have experiences and how to 
          live a meaningful life. So far, I have two conclusions: <br/><br/>

          <div className="idea-container">
            1. <a href="https://plato.stanford.edu/entries/qualia/">Qualia</a> cannot and will not be synthesized via math, science, 
            or computation, as they exist today. <br/><br/>
            2. The experiences of coding cool websites, painting pretty 
            pictures, and writing chaotic stories are all suprisingly 
            meaningful to me, so I'm gonna keep doing all of that. <br/><br/>                        
          </div>

          I'd love it if you checked out some of my creations! It ain't 
          much, but it's honest work :)
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
