import React from "react";
import Navbar from "./Navbar";
import AboutSection from "./sections/AboutSection";
import CodingSection from "./sections/CodingSection";
import ArtSection from "./sections/ArtSection";
import WritingSection from "./sections/WritingSection";
import '../styles/SinglePage.css';

function SinglePage() {
  return (
    <div className="single-page-container">
      <Navbar />
      <div className="sections-wrapper">
        <section id="about" className="page-section">
          <AboutSection />
        </section>
        <section id="coding" className="page-section">
          <CodingSection />
        </section>
        <section id="art" className="page-section">
          <ArtSection />
        </section>
        <section id="writing" className="page-section">
          <WritingSection />
        </section>
      </div>
    </div>
  );
}

export default SinglePage;
