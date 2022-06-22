import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../elements/Logo";

function HeaderForBlogs ({ light, bootstrapNav }) {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const handleMobilenav = (e) => {
    e.preventDefault();
    setToggleNavbar(!toggleNavbar);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest(".content-3")) {
      setToggleNavbar(false);
    }
  });

  return (
    <header
      className={
        light
          ? "desktop-header-3 fixed-top light"
          : "desktop-header-3 fixed-top"
      }
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Logo  bootstrapNav={bootstrapNav} />
          <button
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-target="#navbarNavDropdown"
            data-toggle="collapse"
            type="button"
            onClick={handleMobilenav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              toggleNavbar
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse "
            }
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav  ml-auto scrollspy mx-auto">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="/works"

                >
                  Works
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="/blogs"

                >
                  Blogs
                </Link>
              </li>
              
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="/service"

                >
                  Service
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="/experience"

                >
                  Experience
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="/about"

                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="/contact"

                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default HeaderForBlogs;
