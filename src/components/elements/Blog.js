import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

function Blog({ blogData }) {
  const { id, category, title, date, author, image, filesource, fadeIn } = blogData;


  const getNospaceTitle = (filesource) => {
    let tempArr = filesource.split("/");
    let fileName = tempArr[tempArr.length - 1];
    let getName = fileName.slice(0, -3);
    return getName;
  };

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
  return (

    <Fade left={FadeLeft}
      bottom={FadeBottom}
      right={FadeRight}>
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="fadeInOut"
        animateOnce={true}
      >


        <div className="blog-item rounded bg-white shadow-dark">
          <div className="thumb">
            <a href="!#">
              <span className="category">{category}</span>
            </a>
            <Link to={`blogs/blog-details/${id}/${getNospaceTitle(filesource)}`}>
              <img style={{ height: "300px", width: "100%" }} src={image} alt="blog-title" />
            </Link>
          </div>
          <div className="details">
            <h4 className="my-0 title">
              <Link className="text-decoration-none"
                to={`blogs/blog-details/${id}/${getNospaceTitle(filesource)}`}
              >
                {title}
              </Link>
            </h4>
            <ul className="list-inline meta mb-0 mt-2">
              <li className="list-inline-item">{date}</li>
              <li className="list-inline-item">{author}</li>
            </ul>
          </div>
        </div>
      </ScrollAnimation>
    </Fade>


  );
}

export default Blog;
