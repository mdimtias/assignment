import React from "react";
import Blog from "../Blog/Blog";
import RightSidebar from "../RightSidebar/RightSidebar";
import BlogNavbar from "../BlogNavbar/BlogNavbar";

const Blogs = () => {
  return (
    <section className="blogs">
      <div className="container">
        <div className="row">
            <BlogNavbar></BlogNavbar>
        </div>
        <div className="row mt-5">
          <div className="col-lg-8">
            <Blog></Blog>
          </div>
          <div className="col-lg-4">
            <RightSidebar></RightSidebar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
