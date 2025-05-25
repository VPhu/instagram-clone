import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../component/layout/Footer/Footer";
import { toast } from "react-toastify";
import styles from "./Signup.module.css";
const Signup = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [errorAuth, setErrorsAuth] = useState({});
  const [isValidInfo, setIsValidInfo] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate()

  const validate = (nameInput, value) => {
    const errors = {};

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const isPhone = /^(\+?\d{8,15})$/.test(value);
    const checkUsername = /^[a-zA-Z0-9._]+$/.test(value);

    if (nameInput === "emailOrPhone") {
      if (!value.trim()) {
        errors.emailOrPhone = "This field is required.";
      } else if (!isEmail && !isPhone) {
        errors.emailOrPhone = "Invalid email or phone number.";
      }
    }

    if (nameInput === "password") {
      if (!value || value.length < 6) {
        errors.password =
          "Create a password that is at least 6 characters long.";
      }
    }

    if (nameInput === "fullName") {
      if (!value.trim()) {
        errors.fullName = "Please enter your name.";
      }
    }

    if (nameInput === "username") {
      if (!value) {
        errors.username = "This field is required.";
      } else if (!checkUsername) {
        errors.username =
          "Usernames can only use letters, numbers, underscores, and punctuation.";
      }
    }

    return errors;
  };

  const handleChangeInput = (e, setState) => {
    const name = e.target.name;
    setState(e.target.value);
    setErrorsAuth((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBlurInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const errorItem = validate(name, value);
    setErrorsAuth((prev) => ({ ...prev, ...errorItem }));
  };

  const handleShowPass = () => {
    setShowPass(!showPass)
  }

  const validInfo = useCallback(() => {
    return {
      ...validate("emailOrPhone", emailOrPhone),
      ...validate("password", password),
      ...validate("fullName", fullName),
      ...validate("username", username)
    }
  },[emailOrPhone, password, fullName, username]);

  useEffect(()=>{
    const checkErrorFull = validInfo()
    if (Object.values(checkErrorFull).length === 0) {
      setIsValidInfo(true)
    } else {
      setIsValidInfo(false)
    }
  }, [validInfo])

  const handleSignup = async () => {
    if (!isValidInfo) {
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email: emailOrPhone,
          password,
          fullName,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Registration successful");
        navigate("/login")
      } else {
        if(data.message) {
          if(data.message.toLowerCase().includes("user already exists")) {
          setErrorsAuth((prev)=>({...prev, emailOrPhone: "Another account is using the same email."}))
        } else if (data.message.toLowerCase().includes("username") && data.message.toLowerCase().includes("dup")) {
          setErrorsAuth((prev)=>({...prev, username: "That username is already taken."}))
        }
        }
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className={styles.wrapperSignup}>
      <div className={styles.containerSignup}>
        <div className={`firstBox ${styles.hideBoder}`}>
          <div className="wrapperLogo">
            <div className="logoInstagramLogin"></div>
          </div>
          <p className={styles.descriptionSignup}>
            Sign up to see photos and videos from friends.
          </p>
          <button className="fbLoginBtn">Log in with Facebook</button>
          <p className="orText">OR</p>
          <div className={styles.formSignup}>
            <div className={styles.inputSignupItem}>
              <input
                type="text"
                className={`inputField ${
                  errorAuth.emailOrPhone ? "inputError" : ""
                }`}
                placeholder="Mobile number or email"
                value={emailOrPhone}
                name="emailOrPhone"
                onChange={(e) => {
                  handleChangeInput(e, setEmailOrPhone);
                }}
                onBlur={(e) => {
                  handleBlurInput(e);
                }}
              />
              {errorAuth.emailOrPhone && (
                <div className={styles.iconErrorInput}>
                  <i className="fa-regular fa-circle-xmark"></i>
                </div>
              )}
            </div>
            {errorAuth.emailOrPhone && (
              <span className={styles.errorMessage}>
                {errorAuth.emailOrPhone}
              </span>
            )}
            <div className={styles.inputSignupItem}>
              <input
                type={showPass ? "text" : "password"}
                className={`inputField ${
                  errorAuth.password ? "inputError" : ""
                }`}
                onCopy={!showPass ? (e) => e.preventDefault() : undefined}
                placeholder="Password"
                value={password}
                name="password"
                onChange={(e) => {
                  handleChangeInput(e, setPassword);
                }}
                onBlur={(e) => {
                  handleBlurInput(e);
                }}
              />
              <div className={styles.inputInteraction}>
              {errorAuth.password && (
                <div className={styles.iconErrorInputPass}>
                  <i className="fa-regular fa-circle-xmark"></i>
                </div>
              )}
              {password.length > 0 && (
                <div className={styles.passStatus} onClick={handleShowPass}>
                  {showPass ? <span className={styles.passStatusText}>Hide</span> : <span className={styles.passStatusText}>Display</span>}
                </div>
              )}
              </div>
            </div>
            {errorAuth.password && (
              <span className={styles.errorMessage}>{errorAuth.password}</span>
            )}
            <div className={styles.inputSignupItem}>
              <input
                type="text"
                className={`inputField ${
                  errorAuth.fullName ? "inputError" : ""
                }`}
                placeholder="Full Name"
                name="fullName"
                value={fullName}
                onChange={(e) => {
                  handleChangeInput(e, setFullName);
                }}
                onBlur={(e) => {
                  handleBlurInput(e);
                }}
              />
              {errorAuth.fullName && (
                <div className={styles.iconErrorInput}>
                  <i className="fa-regular fa-circle-xmark"></i>
                </div>
              )}
            </div>
            {errorAuth.fullName && (
              <span className={styles.errorMessage}>{errorAuth.fullName}</span>
            )}
            <div className={styles.inputSignupItem}>
              <input
                type="text"
                className={`inputField ${
                  errorAuth.username ? "inputError" : ""
                }`}
                placeholder="User name"
                value={username}
                name="username"
                onChange={(e) => {
                  handleChangeInput(e, setUsername);
                }}
                onBlur={(e) => {
                  handleBlurInput(e);
                }}
              />
              {errorAuth.username && (
                <div className={styles.iconErrorInput}>
                  <i className="fa-regular fa-circle-xmark"></i>
                </div>
              )}
            </div>
            {errorAuth.username && (
              <span className={styles.errorMessage}>{errorAuth.username}</span>
            )}
          </div>
          <div className={styles.endFormSignup}>
            <div className={styles.clause}>
              <div className={styles.leaenMore}>
                <p className="info-text">
                  Users of our services may have uploaded your contact
                  information to Instagram.{" "}
                  <Link className="fakeLink" to="#">
                    Learn more
                  </Link>
                </p>
              </div>
              <div className={styles.agreePolicy}>
                <p className="info-text">
                  {" "}
                  By signing up, you agree to our{" "}
                  <Link className="fakeLink" to="#">
                    Terms
                  </Link>{" "}
                  ,{" "}
                  <Link className="fakeLink" to="#">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link className="fakeLink" to="#">
                    Cookie Policy
                  </Link>{" "}
                  .
                </p>
              </div>
            </div>
            <button className={`btnSubmit ${isValidInfo ? "btnSubmitValid" : ""}`} onClick={handleSignup}>
              Sign up
            </button>
          </div>
        </div>

        <div className={`secondBox ${styles.hideBoder}`}>
          <p className={styles.haveAccount}>
            Do you have an account?{" "}
            <Link className="pageChange" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Signup;
