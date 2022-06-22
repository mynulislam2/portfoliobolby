import React from "react";
import { Link } from "react-router-dom";
import Blog from "../elements/Blog";
import Pagetitle from "../elements/Pagetitle";

const allBlogs = [
  {
    id: 1,
    title: "How JavaScript works",
    image: "images/blog/3-3.jpg",
    filesource:"../../blogs/how-js-works.md",
    date: "13 April, 2022",
    author: "Mynul",
    category: "javascript",
    fadeIn: 'left'

  },
  {
    id: 2,
    title: "Common Misconceptions About Payment",
    image: "images/blog/2.svg",
    filesource: "../../blogs/common-misconceptions-about-payment.md",
    date: "07 February, 2020",
    author: "Bolby",
    category: "Tutorial",
       fadeIn: 'bottom'
    
  },
  {
    id: 3,
    title: "what is javscript hoisting and how it works",
    image: "https://i.ibb.co/6YznfxW/What-is-javascript-hoisting.png",
    filesource: "../../blogs/how-hoisting-works.md",
    date: "06 February, 2020",
    author: "Bolby",
    category: "Business",
    fadeIn: 'right'

  },  
];

function Blogs() {
  return (
    <section id="blog">
      <div className="container">
        <Pagetitle title="Latest Posts" />
        <div className="row blog-wrapper">
          {allBlogs.map((blogItem) => (
            <div className="col-md-4" key={blogItem.id}>
              <Blog blogData={blogItem} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="spacer" data-height="30"></div>
          <Link to="/blogs" className="btn btn-default ">
            Show all blogs
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
