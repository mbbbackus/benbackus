import React from "react";
import '../../styles/Art.css';
import { artInfo } from '../../utils/variables';

function ArtSection() {

  const renderArt = () => {
    let artList = [];
    for(let i = 0; i < artInfo.length; i++) {
      if(artInfo[i].class === "portrait") {
        let info = artInfo[i];
        let nextInfo = artInfo[i+1];
        i++;
        artList.push(
          <div className="portrait-pair-container" key={`portrait-${i}`}>
            <div className="portrait-container">
              <img 
                className="portrait-image" 
                src={info.src}
                alt={info.name}
              />
              <p className="art-description">"{info.name}", {info.medium}</p>
              <p className="art-date">{info.date}</p>
            </div>
            <div className="portrait-container">
              <img 
                className="portrait-image" 
                src={nextInfo.src}
                alt={nextInfo.name}
              />
              <p className="art-description">"{nextInfo.name}", {nextInfo.medium}</p>
              <p className="art-date">{nextInfo.date}</p>
            </div>
          </div>
        );
      } else if (artInfo[i].class === "landscape") {
        artList.push(
          <div className="landscape-container" key={`landscape-${i}`}>
            <img className="landscape-image" src={artInfo[i].src} alt={artInfo[i].name}/>
            <p className="art-description">"{artInfo[i].name}", {artInfo[i].medium}</p>
            <p className="art-date">{artInfo[i].date}</p>
          </div>
        );
      }
    }
    return artList;
  }

  return (
    <div className="artPage">
      <div className="section-title">Art</div>
      <div className="art-section-container">
        {renderArt()}
      </div>
    </div>
  );
}

export default ArtSection;
