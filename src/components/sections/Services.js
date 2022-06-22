import React from "react";
import { Link } from "react-router-dom";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";
const servicesData = [
  {
    id: 1,
    icon: "images/service-1.svg",
    title: "web design",
    content:

      "I will make a clean , unique design website with responsive facility, pixel perfect, w3c valid code, clean coding, and SEO friendly. i will provide you a  best web design solution",
    color: "#057aff",
    contentColor: "light",
    fadeIn: 'left'
  },
  {
    id: 2,
    icon: "images/service-2.svg",
    title: " Full Stack Development",
    content:
      "i will do a fully functional website with Front-End and Back-End .I will use most popular stack called MERN stack .i will provide you best web app solution",
    color: "#6C6CE5",
    contentColor: "light",
    fadeIn: 'bottom'
  },
  {
    id: 3,
    icon: "images/service-3.svg",
    title: "Front-End Development",
    content:
      "i will provide Eye-catching,Modern and Responsive Single Page web app. for this i will use react bootstrap,css,material ui,react.js and so many tools according to your needs",
    color: "#E57694",
    contentColor: "light",
    fadeIn: 'right'
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Services" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="mb-0">
            Looking for a custom job?{" "}
            <Link
              className="colorpink pointer"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Click here
            </Link>{" "}
            to contact me! 👋
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
