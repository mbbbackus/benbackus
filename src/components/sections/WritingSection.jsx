import React from "react";
import '../../styles/Writing.css';

import penal from "../../media/writing/Backus_PenalLotteries.pdf";
import complex from "../../media/writing/Metaphysics_complex_present_paper.pdf";

import cognition from "../../media/writing/Backus_Cognition.pdf";
import lovestory from "../../media/writing/Backus_Love_Story.pdf";

function WritingSection() {
  return (
    <div className="writingPage">
      <div className="section-title">Writing</div>
      
      <h3>Essays</h3>
      
      <div className="writing-item">
        <a href={penal} className="writing-title">"In Defense of Penal Lotteries"</a>
        <p className="writing-desc">
          When considering the philosophy of law, should we apply probabilistic punishments to 
          probabilistic crimes? For example, should drunk drivers be punished in a random 5% of 
          cases to the same degree that manslaughter is punished if drunk driving has a 5% chance 
          of leading to manslaughter?
        </p>
      </div>

      <div className="writing-item">
        <a href={complex} className="writing-title">"Complex Present"</a>
        <p className="writing-desc">
          Due to Einstein's theory of relativity, the universe cannot have a constant timestamp 
          of "the present" that applies to every location in the universe as some locations are 
          moving so fast that time is dilated. Since this is true, then what are we talking about 
          when we reference "the present"?
        </p>
      </div>

      <h3>Fiction</h3>

      <div className="writing-item">
        <a href={cognition} className="writing-title">"Cognition"</a>
        <p className="writing-desc">
          What is the experience of rapidly gaining consciousness like? Human babies are hardly 
          conscious when they're born, but what would it feel like for all of your mental faculties 
          to come online in rapid succession?
        </p>
      </div>

      <div className="writing-item">
        <a href={lovestory} className="writing-title">"Love Story"</a>
        <p className="writing-desc">
          How many ways can love be abstracted? How far do the parameters of a relationship have 
          to blur for it to still be "love"?
        </p>
      </div>
    </div>
  );
}

export default WritingSection;
