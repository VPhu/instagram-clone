import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../../component/layout/Footer/Footer";
import styles from "./Signup.module.css";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    
  };

  return (
    <div className={styles.wrapperSignup}>
      <div className={styles.containerSignup}>
        <div className="firstBox">
          <div className="wrapperLogo">
            <div className="logoInstagramLogin"></div>
          </div>
          <p className={styles.descriptionSignup}>
            Sign up to see photos and videos from friends.
          </p>
          <button className="fbLoginBtn">Log in with Facebook</button>
          <p className="orText">OR</p>
          <div className={styles.formSignup}>
            <input
              type="text"
              className="inputField"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="inputField"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              className="inputField"
              placeholder="Enter Your Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="text"
              className="inputField"
              placeholder="Enter Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.endFormSignup}>
          <div className={styles.clause}>
            <div className={styles.leaenMore}>
              <p className="info-text">
                Users of our services may have uploaded your contact information
                to Instagram. <Link className="fakeLink">Learn more</Link>
              </p>
            </div>
            <div className={styles.agreePolicy}>
              <p className="info-text">
                {" "}
                By signing up, you agree to our{" "}
                <Link className="fakeLink">Terms</Link> ,{" "}
                <Link className="fakeLink">Privacy Policy</Link> and{" "}
                <Link className="fakeLink">Cookie Policy</Link> .
              </p>
            </div>
          </div>
          <button className="btnSubmit" onClick={handleSignup}>
            Sign up
          </button>
          </div>
        </div>

        <div className="secondBox">
          <p className={styles.haveAccount}>
            Do you have an account? <Link className="pageChange" to="/login">Login</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Signup;
