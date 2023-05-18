import React, { useState } from "react";
import "./BannerSection.css";
import SignUp from "../../Pages/SignUp/SignUp";
import SignIn from "../../Pages/SignIn/SignIn";

const BannerSection = () => {
  const [signUpModal, setSignUpModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);

  return (
    <>
      {signUpModal && <SignUp setSignUpModal={setSignUpModal}></SignUp>}
      {signInModal && <SignIn setSignInModal={setSignInModal}></SignIn>}
      <section className="banner">
        <div className="container">
          <div className="menu">
            <ul>
              <li>
                <button href="" onClick={() => setSignUpModal(!signUpModal)}>
                  Sign Up
                </button>
              </li>
              <li>
                <button href="" onClick={() => setSignUpModal(!signInModal)}>
                  Log In
                </button>
              </li>
            </ul>
          </div>
          <div className="banner-content">
            <h1 className="text-light">Computer Engineering</h1>
            <p className="text-light">142,765 Computer Engineers follow this</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerSection;
