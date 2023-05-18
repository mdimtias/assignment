import React from "react";
import "./blog.css";
import Share from "./Icon/Share";
import View from "./Icon/View";
import ThreeDots from "./Icon/ThreeDots";
import Location from "../RightSidebar/Icon/Location";
import CalenderIcon from "./Icon/CalenderIcon";
const Blog = () => {
  return (
    <>
      <div className="blog-post">
        <div className="blog-img mb-3">
          <img src="assets/blog-1.png" alt="" className="w-100" />
        </div>
        <div className="blog-detail">
          <div className="category mb-3">
            <h3>Article</h3>
          </div>
          <div className="blog-info mb-3">
            <div className="d-flex justify-content-between">
              <h2>
                What if famous brands had regular fonts? Meet RegulaBrands!
              </h2>
              <ThreeDots></ThreeDots>
            </div>
            <p>
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </p>
          </div>
          <div className="author-info d-flex justify-content-between">
            <div className="d-flex justify-content-center align-items-center gap-2">
              <img
                src="assets/sarthak.png"
                className="author-img"
                alt="Sarthak"
              />
              <h3 className="author-name mb-0 fw-semibold">Sarthak Kamra</h3>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-2">
              <View></View>

              <p className="mb-0 post-views">1.4k views</p>
              <div className="share">
                <Share></Share>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-post">
        <div className="blog-img mb-3">
          <img src="assets/blog-2.png" alt="" className="w-100" />
        </div>
        <div className="blog-detail">
          <div className="category mb-3">
            <h3>🔬️ Education</h3>
          </div>
          <div className="blog-info mb-3">
            <div className="d-flex justify-content-between">
              <h2>
                Tax Benefits for Investment under National Pension Scheme
                launched by Government
              </h2>
              <ThreeDots></ThreeDots>
            </div>
            <p>
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </p>
          </div>
          <div className="author-info d-flex justify-content-between">
            <div className="d-flex justify-content-center align-items-center gap-2">
              <img
                src="assets/Joseph.png"
                className="author-img"
                alt="Sarthak"
              />
              <h3 className="author-name mb-0 fw-semibold">Joseph Gray</h3>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-2">
              <View></View>

              <p className="mb-0 post-views">1.4k views</p>
              <div className="share">
                <Share></Share>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-post">
        <div className="blog-img mb-3">
          <img src="assets/blog-3.png" alt="" className="w-100" />
        </div>
        <div className="blog-detail">
          <div className="category mb-3">
            <h3>🗓️ Meetup</h3>
          </div>
          <div className="blog-info mb-3">
            <div className="d-flex justify-content-between">
              <h2>Finance & Investment Elite Social Mixer @Lujiazui</h2>
              <ThreeDots></ThreeDots>
            </div>
            <div className="d-flex gap-5">
              <div className="d-flex gap-2 align-items-center">
                <CalenderIcon></CalenderIcon>
                <p className="mb-0 fs-6 fw-medium text-black">
                  Fri, 12 Oct, 2018
                </p>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <Location></Location>
                <p className="mb-0 fs-6 fw-medium text-black">
                  Ahmedabad, India
                </p>
              </div>
            </div>
            <div className="visit-website d-flex justify-content-center">
              <button>Website</button>
            </div>
          </div>
          <div className="author-info d-flex justify-content-between">
            <div className="d-flex justify-content-center align-items-center gap-2">
              <img
                src="assets/hasan.png"
                className="author-img"
                alt="Sarthak"
              />
              <h3 className="author-name mb-0 fw-semibold">Kaimul Hasan</h3>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-2">
              <View></View>
              <p className="mb-0 post-views">1.4k views</p>
              <div className="share">
                <Share></Share>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-post">
        <div className="blog-img mb-3">
          <img src="assets/blog-4.jpg" alt="" className="w-100" />
        </div>
        <div className="blog-detail">
          <div className="category mb-3">
            <h3>💼️ Job</h3>
          </div>
          <div className="blog-info mb-3">
            <div className="d-flex justify-content-between">
              <h2>Software Developer</h2>
              <ThreeDots></ThreeDots>
            </div>
            <div className="d-flex gap-5">
              <div className="d-flex gap-2 align-items-center">
                <CalenderIcon></CalenderIcon>
                <p className="mb-0 fs-6 fw-medium text-black">
                  Innovaccer Analytics Private Ltd.
                </p>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <Location></Location>
                <p className="mb-0 fs-6 fw-medium text-black">Noida, India</p>
              </div>
            </div>
            <div className="visit-website d-flex justify-content-center">
              <button className="apply-btn">Apply on Timesjobs</button>
            </div>
          </div>
          <div className="author-info d-flex justify-content-between">
            <div className="d-flex justify-content-center align-items-center gap-2">
              <img
                src="assets/kamal.png"
                className="author-img"
                alt="Sarthak"
              />
              <h3 className="author-name mb-0 fw-semibold">Kamal ali</h3>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-2">
              <View></View>

              <p className="mb-0 post-views">1.4k views</p>
              <div className="share">
                <Share></Share>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
