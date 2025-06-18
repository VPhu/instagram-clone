import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EMAIL_REGEX, USERNAME_REGEX, MIN_PASSWORD_LENGTH, EMOJI_REGEX } from "../../constants/regex";
import Footer from "../../component/layout/Footer/Footer";
import { toast } from "react-toastify";
import classNames from "classnames";
import styles from "./Signup.module.css";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [errorAuth, setErrorsAuth] = useState({});
  const [isValidInfo, setIsValidInfo] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const validate = (nameInput, value) => {
    const errors = {};

    const isEmail = EMAIL_REGEX.test(value);

    const isValidUserName = USERNAME_REGEX.test(value);
    const containsEmoji = EMOJI_REGEX.test(password);

    if (nameInput === "email") {
      if (!value.trim()) {
        errors.email = "This field is required.";
      } else if (!isEmail) {
        errors.email = "Invalid email.";
      }
    }

    if (nameInput === "password") {
      if (!value || value.length < MIN_PASSWORD_LENGTH) {
        errors.password =
          "Create a password that is at least 6 characters long.";
      } else if (containsEmoji) {
        errors.password = "Your password cannot contain emojis.";
      }
    }

    if (nameInput === "fullName") {
      if (!value.trim()) {
        errors.fullName = "This field is required.";
      }
    }

    if (nameInput === "username") {
      if (!value) {
        errors.username = "This field is required.";
      } else if (!isValidUserName) {
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
    setShowPass(!showPass);
  };

  const validInfo = useCallback(() => {
    return {
      ...validate("email", email),
      ...validate("password", password),
      ...validate("fullName", fullName),
      ...validate("username", username),
    };
  }, [email, password, fullName, username]);

  useEffect(() => {
    const checkErrorFull = validInfo();
    if (Object.values(checkErrorFull).length === 0) {
      setIsValidInfo(true);
    } else {
      setIsValidInfo(false);
    }
  }, [validInfo]);

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
          email,
          password,
          fullName,
        }),
      });

      const data = response.json();

      if (response.ok) {
        toast.success("Registration successful");
        navigate("/");
      } else {
        const error = new Error(data.message || "Server error");
        error.status = response.status;
        throw error;
      }
    } catch (error) {
      if (error.status) {
        if (error.status === 400) {
          setErrorsAuth((prev) => ({
            ...prev,
            email: "Another account is using the same email.",
          }));
        }
        if (error.status === 500) {
          setErrorsAuth((prev) => ({
            ...prev,
            username: "That username is already taken.",
          }));
        }
      } else {
        toast.error(error);
      }
    }
  };

  return (
    <div className={styles.wrapperSignup}>
      <div className={styles.containerSignup}>
        <div className={`first-box ${styles.hideBoder}`}>
          <div className="wrapper-logo">
            <div className="logo-instagram-login"></div>
          </div>
          <p className={styles.descriptionSignup}>
            Sign up to see photos and videos from friends.
          </p>
          <button className="fb-login-btn">Log in with Facebook</button>
          <p className="or-text">OR</p>
          <div className={styles.formSignup}>
            <div className={styles.inputSignupItem}>
              <input
                type="text"
                className={classNames("input-field", {
                  "input-error": errorAuth.email,
                })}
                placeholder="Email"
                value={email}
                name="email"
                onChange={(e) => handleChangeInput(e, setEmail)}
                onBlur={handleBlurInput}
              />
              {errorAuth.email && (
                <div>
                  <div className={styles.iconErrorInput}>
                    <i className="fa-regular fa-circle-xmark"></i>
                  </div>
                  <span className={styles.errorMessage}>{errorAuth.email}</span>
                </div>
              )}
            </div>
            <div className={styles.inputSignupItem}>
              <input
                type={showPass ? "text" : "password"}
                className={classNames("input-field", {
                  "input-error": errorAuth.password,
                })}
                onCopy={!showPass ? (e) => e.preventDefault() : undefined}
                placeholder="Password"
                value={password}
                name="password"
                onChange={(e) => handleChangeInput(e, setPassword)}
                onBlur={handleBlurInput}
              />
              <div className={styles.inputInteraction}>
                {errorAuth.password && (
                  <div className={styles.iconErrorInputPass}>
                    <i className="fa-regular fa-circle-xmark"></i>
                  </div>
                )}
                {password.length > 0 && (
                  <div className={styles.passStatus} onClick={handleShowPass}>
                    <span className={styles.passStatusText}>
                      {showPass ? "Hide" : "Display"}
                    </span>
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
                className={classNames("input-field", {
                  "input-error": errorAuth.fullName,
                })}
                placeholder="Full Name"
                name="fullName"
                value={fullName}
                onChange={(e) => handleChangeInput(e, setFullName)}
                onBlur={handleBlurInput}
              />
              {errorAuth.fullName && (
                <div>
                  <div className={styles.iconErrorInput}>
                    <i className="fa-regular fa-circle-xmark"></i>
                  </div>
                  <span className={styles.errorMessage}>
                    {errorAuth.fullName}
                  </span>
                </div>
              )}
            </div>

            <div className={styles.inputSignupItem}>
              <input
                type="text"
                className={classNames("input-field", {
                  "input-error": errorAuth.username,
                })}
                placeholder="User name"
                value={username}
                name="username"
                onChange={(e) => handleChangeInput(e, setUsername)}
                onBlur={handleBlurInput}
              />
              {errorAuth.username && (
                <div>
                  <div className={styles.iconErrorInput}>
                    <i className="fa-regular fa-circle-xmark"></i>
                  </div>
                  <span className={styles.errorMessage}>
                    {errorAuth.username}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className={styles.endFormSignup}>
            <div className={styles.clause}>
              <div className={styles.leaenMore}>
                <p className="info-text">
                  Users of our services may have uploaded your contact
                  information to Instagram.{" "}
                  <Link className="link-item" to="#">
                    Learn more
                  </Link>
                </p>
              </div>
              <div className={styles.agreePolicy}>
                <p className="info-text">
                  {" "}
                  By signing up, you agree to our{" "}
                  <Link className="link-item" to="#">
                    Terms
                  </Link>{" "}
                  ,{" "}
                  <Link className="link-item" to="#">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link className="link-item" to="#">
                    Cookie Policy
                  </Link>{" "}
                  .
                </p>
              </div>
            </div>
            <button
              className={classNames("btn-submit", {
                "btn-submit-valid": isValidInfo,
              })}
              onClick={handleSignup}
            >
              Sign up
            </button>
          </div>
        </div>

        <div className={`second-box ${styles.hideBoder}`}>
          <p className={styles.haveAccount}>
            Do you have an account?{" "}
            <Link className="page-change" to="/login">
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
