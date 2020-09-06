import React, { Component } from "react";
import { artInfo } from '../variables';

class ArtPage extends Component {
  constructor(props) {
    super(props);
    this.renderArt = this.renderArt.bind(this);
  }

  renderArt () {
    let artList = [];
    for(let i = 0; i < artInfo.length; i++) {
      if(artInfo[i].class === "portrait") {
        let info = artInfo[i];
        let nextInfo = artInfo[i+1];
        i++;
        artList.push(
          <div className="portrait-pair-container">
            <div className="portrait-container">
              <img 
                className="portrait-image" 
                src={info.src}
              />
              <p className="art-description">"{info.name}", {info.medium}</p>
              <p className="art-date">{info.date}</p>
            </div>
            <div className="portrait-container">
              <img 
                className="portrait-image" 
                src={nextInfo.src}
              />
              <p className="art-description">"{nextInfo.name}", {nextInfo.medium}</p>
              <p className="art-date">{nextInfo.date}</p>
            </div>
          </div>
        );
      } else if (artInfo[i].class === "landscape") {
        artList.push(
          <div className="landscape-container">
            <img className="landscape-image" src={artInfo[i].src}/>
            <p className="art-description">"{artInfo[i].name}", {artInfo[i].medium}</p>
            <p className="art-date">{artInfo[i].date}</p>
          </div>
        );
      }
    }
    return artList;
  }

  render () {
    return (
      <div>
        <div className="navbar">
          <a className="nav-link" href="/">Home</a>
          <a className="nav-link" href="/Code/">Code</a>
          <a className="nav-link selected-tab" href="/Art/">Art</a>
          <a className="nav-link" href="/Writing/">Writing</a>
        </div>
        <div className="page-content">
          <div className="artPage">
            <div className="art-text-container">
              <p className="art-text">
                I’d like to preface my visual art by saying that I love color. 
                Philosophically, it’s what provoked me to consider <a href="https://plato.stanford.edu/entries/qualia/">qualia</a> when 
                thinking about AI, which has made the aesthetic experience of 
                color much more rich for me. <br/><br/>

                Before I learned about <a href="https://plato.stanford.edu/entries/qualia/">qualia</a> , most of my art was figurative 
                and drawn in black and white. Since then, I’ve come to relish 
                in the mindless and methodical process of designing abstract 
                compositions while experimenting with underutilized color 
                palettes. <br/><br/>
              </p>
            </div>
            <div className="art-section-container">
              {this.renderArt()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtPage;
