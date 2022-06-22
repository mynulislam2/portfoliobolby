import React from "react";
import TrackVisibility from "react-on-screen";
import { Fade } from "react-reveal";
import me from '../../images/33502-programmer-man.gif';
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";
const aboutContent = {
  name: "Bolby",
  content:
    "Hi i am Mynul islam MERN STACK developer and web designer .I am passionate programmer. that's why I have completed several courses from different institutes.programming hero is one of them. in my field i have done so many projects .also i am familiar with python and wordpress.",
};

const progressData = [
  {
    id: 1,
    title: "MERN stack",
    percantage: 85,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "Web Design",
    percantage: 88,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "Front-End development",
    percantage: 90,
    progressColor: "#6C6CE5",
  },
];

const counterData = [
  {
    id: 1,
    title: "Projects completed",
    count: 20,
    icon: "icon-fire",
  },

  {
    id: 2,
    title: "Satisfied clients",
    count: 1,
    icon: "icon-people",
  },
  {
    id: 3,
    title: "Nominees winner",
    count: 1,
    icon: "icon-badge",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <Fade left>
              <div className="text-center text-md-left">
                <img  src={me} />
              </div>
              <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            </Fade>

          </div>
          <Fade right>
            <div className="col-md-9 triangle-left-md triangle-top-sm">
              <div className="rounded bg-white shadow-dark padding-30">
                <div className="row">
                  <div className="col-md-6">
                    <p>{aboutContent.content}</p>
                    <div className="mt-3">
                      <a  href="https://drive.google.com/u/0/uc?id=1AnBmQ3gMreMDixBcLTPzs833k7oXU3x_&export=download" download className="btn btn-default">
                        Download CV
                      </a>
                    </div>
                    <div
                      className="spacer d-md-none d-lg-none"
                      data-height="30"
                    ></div>
                  </div>
                  <div className="col-md-6">
                    {progressData.map((progress) => (
                      <TrackVisibility
                        once
                        key={progress.id}
                        className="progress-wrapper"
                      >
                        <Skill progress={progress} />
                      </TrackVisibility>
                    ))}
                  </div>
                </div>
              </div>


            </div>            </Fade>

        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing justify-content-center">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
