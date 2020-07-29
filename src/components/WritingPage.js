import React, { Component } from "react";
import penal from "../media/writing/Backus_PenalLotteries.pdf";
import polit from "../media/writing/Backus_political_philosophy.pdf";
import meta from "../media/writing/Meta-realism.pdf";
import complex from "../media/writing/Metaphysics_complex_present_paper.pdf";

import cognition from "../media/writing/Backus_Cognition.pdf";
import lovestory from "../media/writing/Backus_Love_Story.pdf";
import PoF from "../media/writing/PoFExcerpt.pdf";
import PTB from "../media/writing/PTB_Outline.pdf";

class WritingPage extends Component {
  render () {
    return (
      <div className="writingPage">
        I don't fully endorse any of the assertions I 
        make in any of the following essays. Both because 
        sometimes I find it easier to argue a point that 
        contrasts my own beliefs, and because I am still 
        young and changing my beliefs rapidly. <br/><br/>

        Also, some of my creative fiction is vulgar and 
        awkwardly written. Sometimes, the vulgarity and 
        awkwardness were intentional creative decisions,
        sometimes not. Hopefully you'll give me the 
        benefit of the doubt. <br/><br/>

        Essays:<br/><br/>
        <a href={penal}>"In Defense of Penal Lotteries"</a><br/><br/>
      	<a href={complex}>"Complex Present"</a><br/><br/>
      	<a href={polit}>"Philosophical Foundations of Politics"</a><br/><br/>
      	<a href={meta}>"Meta-Realism"</a><br/><br/>
      
        <br/>
        Fiction:<br/><br/>
        <a href={cognition}>"Cognition"</a><br/><br/>
        <a href={lovestory}>"Love Story"</a><br/><br/>
        I wrote a book once. I'll never share it with a soul. 
        But, here's an excerpt. (Context, it's a book about a protagonist
        who doesn't want to be the protagonist of the book I wrote).<br/>
        <a href={PoF}>"Prison of Freedom Excerpt"</a><br/><br/>
        Also, I'm drafting a new book that I might actually share with 
        people. Here's the outline: 
        <a href={PTB}>"Phenomenal Trope Book Outline"</a><br/><br/>
      </div>
    );
  }
}

export default WritingPage;
