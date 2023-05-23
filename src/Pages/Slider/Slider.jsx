import React from "react";
import "./Slider.css";
const Slider = () => {
  return (
    <>
      <section className="slider">
        <div className="container-fluid overflow-hidden">
          <div className="row position-relative">
            <div className="col-md-5 left-content">
              <img src="assets/circle.svg" alt="" className="circle-img" />
              <div className="circle">
                <h2 className="text-white">25M+ Downloads</h2>
                <p className="text-white text-right">
                  on app store and google play store
                </p>
              </div>
              <div className="bottom-text">
                <img
                  src="assets/mobile-app-of-the-year-by-entrepreneur.png"
                  className="d-none d-md-block mb-3"
                  alt=""
                />
                <h2 className="fw-semibold text-white">ABC 678</h2>
                <p className="mb-0 text-white">
                  We are the best web development
                </p>
                <p className="mb-0 text-white">Company in the world </p>
              </div>
              <div className="d-flex justify-content-between mb-3 mx-5">
                <button className="view-btn">View Case Study</button>
                <button className="skip-btn">SKIP</button>
              </div>
            </div>
            <div className="col-md-7 right-content d-flex align-items-center justify-content-center">
              <div className="d-flex right-side-image">
                <img
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  src="assets/nexgtv-entertainment-mobile-app-development.png"
                  alt=""
                />
                <img
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  src="assets/nexgtv-mobile-app-ui-design.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="slider-2">
        <div className="container-fluid overflow-hidden">
          <div className="row position-relative">
            <div className="col-md-5 left-content">
              <img
                src="assets/circle.svg"
                alt=""
                className="circle-img circle-img-2"
              />
              <div className="circle left-36">
                <p className="text-left mb-0">The Next Big</p>
                <h2 className="text-white mb-0">Blockchain</h2>
                <p className="text-white text-right mb-0">Revolution</p>
                {/* <img src="assets/circle.svg" alt="" className='circle-img' /> */}
              </div>
              <div className="bottom-text mt-400">
                <h2 className="fw-semibold text-white">ABC 234</h2>
                <p className="mb-0 text-white">
                  We are the best web development
                </p>
                <p className="mb-0 text-white">Company in the world </p>
              </div>
              <div className="d-flex justify-content-between mb-3 mx-5">
                <button className="view-btn">Coming Soon</button>
                <button className="skip-btn">SKIP</button>
              </div>
            </div>
            <div className="col-md-7 right-content d-flex align-items-center justify-content-evenly">
              <div className="d-flex align-items-end h-100">
                <img
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  src="assets/veme-blockchain-app-developed.png"
                  className="h-400"
                  alt=""
                />
              </div>
              <div className="d-flex align-items-start h-100">
                <img
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  src="assets/veme-app-ui-design.png"
                  className="h-400"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="slider-3">
        <div className="container-fluid overflow-hidden">
          <div className="row position-relative">
            <div className="col-md-5 left-content">
              <img
                src="assets/circle.svg"
                alt=""
                className="circle-img circle-img-3"
              />
              <div className="circle left-36">
                <p className="text-left mb-0">Redefining</p>
                <h2 className="text-white mb-0">UX & Strategy</h2>
                <p className="text-white text-right mb-0">and ui design</p>
                {/* <img src="assets/circle.svg" alt="" className='circle-img' /> */}
              </div>
              <div className="bottom-text mt-400">
                <h2 className="fw-semibold text-white">ABC 456</h2>
                <p className="mb-0 text-white">We are the best</p>
                <p className="mb-0 text-white">web development company</p>
                <p className="mb-0 text-white">in the world </p>
              </div>
              <div className="d-flex justify-content-between mb-3 mx-5">
                <button className="view-btn">Coming Soon</button>
                <button className="skip-btn">SKIP</button>
              </div>
            </div>
            <div className="col-md-7 bg-black">
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                src="assets/pizza_box.png"
                alt=""
                className="slider-three-img-one"
              />
              <img
                data-aos="fade-down"
                data-aos-anchor-placement="top-bottom"
                src="assets/dominos-bread.png"
                alt=""
                className="slider-three-img-two"
              />
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                src="assets/dominos-bread1.png"
                alt=""
                className="slider-three-img-three"
              />
              <div className="d-flex align-items-center justify-content-evenly h-100">
                <div className="d-flex align-items-end h-100">
                  <img
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1500"
                    src="assets/domi-img1.png"
                    className="h-400"
                    alt=""
                  />
                </div>
                <div className="d-flex align-items-start h-100">
                  <img
                    data-aos="fade-down"
                    data-aos-anchor-placement="center-center"
                    data-aos-duration="1500"
                    src="assets/ux-strategy-for-mobile-app-devlopment.png"
                    className="h-400 mt-100"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="slider-4">
        <div className="container-fluid overflow-hidden">
          <div className="row position-relative">
            <div className="col-md-5 left-content">
              <img
                src="assets/circle.svg"
                alt=""
                className="circle-img circle-img-3"
              />
              <div className="circle left-36">
                <p className="text-left mb-0">Text Headline</p>
                <h2 className="text-white mb-0">Text Headline</h2>
                <p className="text-white text-right mb-0">Footer Headline</p>
              </div>
              <div className="bottom-text mt-400">
                <h2 className="fw-semibold text-white">ABC 567</h2>
                <p className="mb-0 text-white">We are the best</p>
                <p className="mb-0 text-white">web development company</p>
                <p className="mb-0 text-white">in the world </p>
              </div>
              <div className="d-flex justify-content-between mb-3 mx-5">
                <button className="view-btn">Coming Soon</button>
                <button className="skip-btn">SKIP</button>
              </div>
            </div>
            <div className="col-md-7 right-content">
              <div className="d-flex justify-content-center align-items-center h-100 ml-100 ml-0">
                <div className="d-flex justify-start flex-column">
                  <img
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    src="assets/karavan-social-networking-app-screen.png"
                    alt=""
                    className="h-300"
                  />
                  <img
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    src="assets/karavan_2.png"
                    alt=""
                    className="h-300"
                  />
                </div>
                <div className="d-flex justify-start flex-column">
                  <img
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    src="assets/social-networking-app-case-study.png"
                    alt=""
                    className="h-300"
                  />
                  <img
                    data-aos="fade-down"
                    data-aos-duration="1500"
                    src="assets/karavan-social-networking-app-screen-2.png"
                    alt=""
                    className="h-300"
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    data-aos="fade-up-left"
                    data-aos-duration="1500"
                    src="assets/developers-for-social-media-app.png"
                    alt=""
                    className="h-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="slider-5">
        <div className="container-fluid overflow-hidden">
          <div className="row position-relative">
            <div className="col-md-5 left-content">
              <img
                src="assets/circle.svg"
                alt=""
                className="circle-img circle-img-3"
              />
              <div className="circle left-36">
                <p className="text-left mb-0">Developing ERP Solution For</p>
                <h2 className="text-white mb-0">Text Headline</h2>
                <p className="text-white text-right mb-0">
                  in furniture industry
                </p>
                {/* <img src="assets/circle.svg" alt="" className='circle-img' /> */}
              </div>
              <div className="bottom-text mt-400">
                <h2 className="fw-semibold text-white">ABC 678</h2>
                <p className="mb-0 text-white">Best since 2017</p>
                <p className="mb-0 text-white">we offer wide range of</p>
                <p className="mb-0 text-white">
                  Web Development and App Development{" "}
                </p>
              </div>
              <div className="d-flex justify-content-between mb-3 mx-5">
                <button className="view-btn">Vide Case Study</button>
                <button className="skip-btn">SKIP</button>
              </div>
            </div>
            <div className="col-md-7 right-content">
              <img
                data-aos="flip-left"
                data-aos-duration="1500"
                src="assets/erp-app-development-service.png"
                alt=""
                className="w-100 h-100"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="slider-6">
        <div className="container-fluid overflow-hidden">
          <div className="row position-relative">
            <div className="col-md-5 left-content">
              <img
                src="assets/circle.svg"
                alt=""
                className="circle-img circle-img-3"
              />
              <div className="circle left-36">
                <p className="text-left mb-0">Biggest Classified </p>
                <h2 className="text-white mb-0">East Asia</h2>
                <p className="text-white text-right mb-0">Countries</p>
              </div>
              <div className="bottom-text mt-400">
                <img
                  src="assets/mobile-app-of-the-year-by-entrepreneur.png"
                  className="mb-3"
                  alt=""
                />
                <h2 className="fw-semibold text-white">ABC 234567</h2>
                <p className="mb-0 text-white">Best since 2017</p>
                <p className="mb-0 text-white">we offer wide range of</p>
                <p className="mb-0 text-white">
                  Web Development and App Development{" "}
                </p>
              </div>
              <div className="d-flex justify-content-between mb-3 mx-5">
                <button className="view-btn">Vide Case Study</button>
                <button className="skip-btn">SKIP</button>
              </div>
            </div>
            <div className="col-md-7 right-content d-flex align-items-center justify-content-center">
              <img
                data-aos="zoom-in"
                data-aos-duration="1500"
                src="assets/melltoo-img1.png"
                alt=""
                className="h-400"
              />
              <img
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                src="assets/melltoo-img2.png"
                alt=""
                className="h-400"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
