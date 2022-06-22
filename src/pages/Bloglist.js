import React, { useEffect, useState } from "react";
import blogsbg from '.././images/blogsbg.png';
import Blog from "../components/elements/Blog";
import Pagination from "../components/elements/Pagination";
import HeaderForBlogs from "../components/layouts/HeaderForBlogs";
const allBlogs = [
  {
    id: 1,
    title: "what is javscript hoisting and how it works",
    image: "https://i.ibb.co/6YznfxW/What-is-javascript-hoisting.png",
    filesource: "../../blogs/how-hoisting-works.md",
    date: "06 February, 2020",
    author: "Bolby",
    category: "Business",

  },  

  {
    id: 2,
    title: "How JavaScript works",
    image: "images/blog/3-3.jpg",
    filesource:"../../blogs/how-js-works.md",
    date: "13 April, 2022",
    author: "Mynul",
    category: "javascript",

  },
  {
    id: 3,
    title: "Common Misconceptions About Payment",
    image: "images/blog/2.svg",
    filesource: "../../blogs/common-misconceptions-about-payment.md",
    date: "07 February, 2020",
    author: "Bolby",
    category: "Tutorial",

  },
  {
    id: 4,
    title: "5 Best App Development Tool for Your Project",
    image: "images/blog/1.svg",
    filesource: "../../blogs/best-app-development-tool.md",
    date: "09 February, 2020",
    author: "Bolby",
    category: "Tutorial",
  },
  {
    id: 5,
    title: "Common Misconceptions About Payment",
    image: "images/blog/2.svg",
    filesource: "../../blogs/common-misconceptions-about-payment.md",
    date: "07 February, 2020",
    author: "Bolby",
    category: "Tutorial",

  },
  {
    id: 6,
    title: "3 Things To Know About Startup Business",
    image: "images/blog/3.svg",
    filesource: "../../blogs/things-to-know-about-startup-business.md",
    date: "06 February, 2020",
    author: "Bolby",
    category: "javascript",

  },
  {
    id: 7,
    title: "5 Best App Development Tool for Your Project",
    image: "images/blog/1.svg",
    filesource: "../../blogs/best-app-development-tool.md",
    date: "09 February, 2020",
    author: "Bolby",
    category: "Tutorial",

  },
  {
    id: 8,
    title: "Common Misconceptions About Payment",
    image: "images/blog/2.svg",
    filesource: "../../blogs/common-misconceptions-about-payment.md",
    date: "07 February, 2020",
    author: "Bolby",
    category: "Tutorial",

  },
  {
    id: 9,
    title: "3 Things To Know About Startup Business",
    image: "images/blog/3.svg",
    filesource: "../../blogs/things-to-know-about-startup-business.md",
    date: "06 February, 2020",
    author: "Bolby",
    category: "Tutorial",

  },
  {
    id: 10,
    title: "5 Best App Development Tool for Your Project",
    image: "images/blog/1.svg",
    filesource: "../../blogs/best-app-development-tool.md",
    date: "09 February, 2020",
    author: "Bolby",
    category: "Technology",

  },
];

function Bloglist() {
  // document.body.classList.add("dark");
  //Uncomment the above line if you use dark version

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    setPosts(allBlogs);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest(".content")) {
      setToggleMenu(false);
    }
  });

  return (
    <>
<HeaderForBlogs light logoSource="/images/logo-dark.svg"/>
<div className=" container" style={{marginTop:"100px"}}>
  <img style={{height:"400px",width:"100%",borderRadius:"30px"}} src={blogsbg} alt="blogs" />
</div>
      <main >
        <div className="spacer" data-height="96"></div>
        <div className="blog-page-section">
          <div className="container">
            <div className="row blog-wrapper fix-spacing">
              {currentPosts.map((blogItem) => (
                <div className="col-md-6" key={blogItem.id}>
                  <Blog blogData={blogItem} />
                </div>
              ))}
            </div>
            <div className="spacer" data-height="50"></div>
            {!(posts.length > postsPerPage) ? null : (
              <Pagination
                itemsPerPage={postsPerPage}
                totalItems={posts.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            )}
          </div>
        </div>
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
}

export default Bloglist;
