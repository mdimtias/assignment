import React, { useState } from "react";
import "./signup.css";
const SignUp = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      {showModal && (
        <section className="sign-up align-items-end align-items-md-center">
          <div className="container">
            <div className="row">
              <div class="col-md-2"></div>
              <div className="col-lg-8 sign-up-modal">
                <div className="row">
                  <div className="d-none  col-lg-12 sign-up-alert-top">
                    <p className="mb-0">
                      Let's learn, share & inspire each other with our passion
                      for computer engineering. Sign up now 🤘🏼
                    </p>
                  </div>
                </div>
                <div className="row px-3">
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between align-items-center">
                      <h2 className="my-3 fw-bold text-black fs-4 text-left">
                        Create Account
                      </h2>
                      <button
                        className="close-modal d-md-none"
                        onClick={() => setShowModal(false)}
                      >
                        X
                      </button>
                    </div>
                    <form action="" className="mb-3">
                      <div className="d-flex flex-wrap name">
                        <input
                          type="text"
                          className="first-name w-50"
                          placeholder="First Name"
                        />
                        <input
                          type="text"
                          className="last-name w-50"
                          placeholder="Last Name"
                        />
                      </div>
                      <div className="">
                        <input
                          type="email"
                          className="email w-100"
                          placeholder="Email"
                        />
                      </div>
                      <div className="">
                        <input
                          type="password"
                          className="password w-100"
                          placeholder="Password"
                        />
                      </div>
                      <div className="">
                        <input
                          type="password"
                          className="confirm-password w-100"
                          placeholder="Confirm Password"
                        />
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <button
                          type="submit"
                          className="w-50 d-md-none submit-btn"
                        >
                          Create Account
                        </button>
                        <button
                          type="submit"
                          className="w-100 d-none d-md-block submit-btn"
                        >
                          Create Account
                        </button>
                        <a href="#" className="fs-6 d-block d-md-none">
                          or, Sign In
                        </a>
                      </div>
                    </form>
                    <button className="w-100 facebook-btn mb-2">
                      {" "}
                      <img src="assets/facebook.png" alt="" className="" /> Sign
                      up with Facebook
                    </button>
                    <button className="w-100 facebook-btn mb-5">
                      {" "}
                      <img src="assets/google.png" alt="" className="" /> Sign
                      up with Google
                    </button>
                    <p className="d-block d-md-none w-100 text-gray text-sm mb-5 text-center d-block text-decoration-none">
                      By signing up, you agree to our Terms & conditions,
                      Privacy policy
                    </p>
                  </div>
                  <div className="col-md-6 d-none d-md-block">
                    <div className="d-flex justify-content-end align-items-center my-3">
                      <p className="text-right mb-0 me-2 text-sm text-gray">
                        Already have an account?{" "}
                      </p>
                      <a href="#" className="fs-6">
                        {" "}
                        Sign In
                      </a>
                      <button
                        className="close-modal d-none d-md-block ms-3"
                        onClick={() => setShowModal(false)}
                      >
                        X
                      </button>
                    </div>
                    <div className="d-flex align-items-end flex-column">
                      <img src="assets/login.png" alt="" />
                      <p className="sign-up-bottom-text">
                        By signing up, you agree to our Terms & conditions,
                        Privacy policy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2"></div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SignUp;
