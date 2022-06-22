import React from "react";
import About from "../components/sections/About";
import Blogs from "../components/sections/Blogs";
import Brandlogos from "../components/sections/Brandlogos";
import Contact from "../components/sections/Contact";
// import Experiences from "../components/sections/Experiences";
import Herosection from "../components/sections/Herosection";
import Services from "../components/sections/Services";
import Works from "../components/sections/Works";


function Homepage3Light() {
  document.body.classList.remove("dark");

  return (
    <>
      <main className="content-3">
        
            <Herosection light />
        
          <About />
        
          <Services />
        
        
          {/* <Experiences /> */}
        
        
          <Works />
        
        
          <Brandlogos />
        
        
          <Blogs />
        
        
          <Contact />
        
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
}

export default Homepage3Light;
