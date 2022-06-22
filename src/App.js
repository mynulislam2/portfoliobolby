import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Footer from "./components/layouts/Footer";
import HeaderForBlogs from "./components/layouts/HeaderForBlogs";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Experiences from "./components/sections/Experiences";
import Services from "./components/sections/Services";
import Works from "./components/sections/Works";
import BlogDetails from "./pages/BlogDetails";
import Bloglist from "./pages/Bloglist";
import Homepage3Light from "./pages/Homepage3Light";

function App() {
  return (
    <BrowserRouter>
    <HeaderForBlogs light logoSource="/images/logo-dark.svg"></HeaderForBlogs>
      <Switch>
        <Route path="/" exact>
          <Homepage3Light />
        </Route>
        <Route path='/about' exact>
          <About></About>
        </Route>
        <Route path='/service' exact>
          <Services></Services>
        </Route>
        <Route path='/experience' exact>
<Experiences></Experiences>
        </Route>
        <Route path='/works' exact>
<Works></Works>
        </Route>
        <Route path='/contact' exact>
          <Contact></Contact>
        </Route>
        <Route path="/blogs" component={Bloglist} exact />
        <Route path="/blogs/blog-details/:id/:title" component={BlogDetails} />

      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
