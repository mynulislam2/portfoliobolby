import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Fade from 'react-reveal/Slide';

function Portfolio({ portfolio }) {
  const { category, title, image, popupLink, link,fadeIn } = portfolio;
  let FadeLeft
  if (fadeIn === 'left') {
    FadeLeft = true
  }
  let FadeBottom
  if (fadeIn === 'bottom') {
    FadeBottom = true
  }

  let FadeRight
  if (fadeIn === 'right') {
    FadeRight = true
  }
  const [toggler, setToggler] = useState(false);

  const handleLightbox = (e) => {
    if (!link) {
      e.preventDefault();
      setToggler(!toggler);
    }
  };

  const handleIcon = () => {
    if (link) {
      return <i className="icon-link"></i>;
    } else if (popupLink) {
      if (popupLink.length > 1) {
        if (popupLink.toString().match(/youtube/g)) {
          return <i className="icon-camrecorder"></i>;
        }
        return <i className="icon-picture"></i>;
      } else if (popupLink.toString().match(/youtube/g)) {
        return <i className="icon-camrecorder"></i>;
      } else {
        return <i className="icon-magnifier-add"></i>;
      }
    }
    return <i className="icon-magnifier-add"></i>;
  };
  return (
    <Fade left={FadeLeft}
    bottom={FadeBottom}
    right={FadeRight}>

        <div className="portfolio-item rounded shadow-dark">
          <div className="details">
            <span className="term text-capitalize">{category}</span>
            
<a href={link ? link : "!#"}><h4 className="title text-decoration-underline">{title}</h4></a>
            <span className="more-button">{handleIcon()}</span>
          </div>
          <div className="thumb" style={{height:"300px"}}>
            <img  src={image} alt="Portfolio-title" />
            <div className="mask"></div>
          </div>
        </div>
      {popupLink && <FsLightbox toggler={toggler} sources={popupLink} />}
    </Fade>
  );
}

export default Portfolio;
