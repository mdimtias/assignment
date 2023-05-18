import React from "react";
import "./blog-navbar.css";
import SelectArrow from "./Icon/SelectArrow";
import GroupIcon from "./Icon/GroupIcon";
const BlogNavbar = () => {
  return (
    <>
      <div className="blog-navbar d-none d-md-flex justify-content-between">
        <div className="blog-menu pt-5 pb-3">
          <ul className="d-flex gap-2">
            <li>
              <a href="" className="active">
                All Posts(32)
              </a>
            </li>
            <li>
              <a href="">Article</a>
            </li>
            <li>
              <a href="">Event</a>
            </li>
            <li>
              <a href="">Education</a>
            </li>
            <li>
              <a href="">Job</a>
            </li>
          </ul>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <button className="write-post-btn">
            Write a Post <SelectArrow></SelectArrow>
          </button>
          <button className="join-group-btn">
            <GroupIcon></GroupIcon> Join Group
          </button>
        </div>
      </div>
      <div className="blog-navbar d-flex d-md-none justify-content-between align-items-center">
        <div className="blog-menu py-3">
          <ul className="d-flex">
            <li>
              <a href="" className="active">
                Posts(368)
              </a>
            </li>
          </ul>
        </div>

        <div>
          <button className="write-post-btn">
            Filter: All <SelectArrow></SelectArrow>
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogNavbar;
