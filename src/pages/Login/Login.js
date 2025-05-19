import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../../component/layout/Footer/Footer";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    
  };

  return (
    <div className={styles.wrapperLogin}>
      <div className={styles.containerLogin}>
        <div className={styles.mainLogin}>
          <div className={styles.imageSectionWrapper}>
            <div className={styles.imageSection}>
              <img
                src="/images/instagram_mockup.png"
                alt="Instagram Mockup"
                className={styles.mockupImg}
              />
            </div>
          </div>

          <div className={styles.formSectionLogin}>
            <div className="firstBox">
              <div className="wrapperLogo">
                <div className="logoInstagramLogin"></div>
              </div>
              <div className={styles.formLogin}>
                <input
                  type="email"
                  className="inputField"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  type="password"
                  className="inputField"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <button className="btnSubmit" onClick={handleLogin}>
                Log in
              </button>
              <p className="orText">OR</p>
              <button className="fbLoginBtn">Log in with Facebook</button>
              <p className={styles.forgotPassword}>
                <Link to="/forgotpassword">Forgot password?</Link>
              </p>
            </div>
            <div className="secondBox">
              <p>
                Don't have an account?{" "}
                <Link className="pageChange" to="/signup">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
