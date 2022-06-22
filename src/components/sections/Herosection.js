import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import '.././stye.css/stye.css';

function Herosection(props) {
  return (
    <section
      id="home"
      className={
        props.light
          ? "home d-flex align-items-center light"
          : "home d-flex align-items-center "
      }
    >
      <div className="container">
        <div className="intro">

          <h1 className="mb-2 mt-0">Hi I'M <span className="text-danger">MYNUL</span></h1>
          <p>
            <i>            I'm a{" "}
            <Typed
              strings={[
                "Web designer ",
                "Front-End developer",
                "Mern Stack Developer",
              ]}
              typeSpeed={80}
              backSpeed={40}
              attr="value"
              loop
            >
              <label value></label>
            </Typed></i>

          </p>

          <ul className="social-icons light list-inline mb-0 mt-4">

            <li className="list-inline-item">
              <a href="https://github.com/mynulislam2">
                <i className="fab fa-github"></i>
              </a>
            </li>
            {/* <li className="list-inline-item">
              <a href="!#">
                <i className="fab fa-youtube"></i>
              </a>
            </li> */}
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/mynul-islam-ridoy/">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.facebook.com/codermynul23">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
          </ul>

          <div className="mt-4">
            <Link
              className="btn btn-default"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Hire me
            </Link>
          </div>
        </div>

        <div className="scroll-down">
          <a
            href="#about"
            spy={true}
            smooth={true}
            duration={500}
            className="mouse-wrapper"
          >
            <span>Scroll Down</span>
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </a>
        </div>

       
      </div>
    </section>
  );
  };

  

export default Herosection;
