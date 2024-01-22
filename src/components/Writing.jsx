import React from "react";
import '../styles/Writing.css';
import Navbar from "./Navbar";

import penal from "../media/writing/Backus_PenalLotteries.pdf";
import polit from "../media/writing/Backus_political_philosophy.pdf";
import meta from "../media/writing/Meta-realism.pdf";
import complex from "../media/writing/Metaphysics_complex_present_paper.pdf";

import cognition from "../media/writing/Backus_Cognition.pdf";
import lovestory from "../media/writing/Backus_Love_Story.pdf";

function Writing() {
    return (
        <div className="writing-container">
            <Navbar />
            <div className="page-content">
                <div className="writingPage">
                    Essays:<br/><br/>
                    <a href={penal}>"In Defense of Penal Lotteries"</a><br/><br/>
                    <a href={complex}>"Complex Present"</a><br/><br/>
                    <a href={polit}>"Philosophical Foundations of Politics"</a><br/><br/>
                    <a href={meta}>"Meta-Realism"</a><br/><br/>
                
                    <br/>
                    Fiction:<br/><br/>
                    <a href={cognition}>"Cognition"</a><br/><br/>
                    <a href={lovestory}>"Love Story"</a><br/><br/>
                </div>
            </div>
        </div>
    );
  }

export default Writing;