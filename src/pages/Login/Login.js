import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { EMAIL_REGEX, MIN_PASSWORD_LENGTH } from "../../constants/regex";
import { toast } from "react-toastify";
import { setToken } from "../../utils/cookie";
import Footer from "../../component/layout/Footer/Footer";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [errorLogin, setErrorsLogin] = useState(false);
  const [validInfo, setValidInfo] = useState(false);
  const navigate = useNavigate();

  const handleChangeInput = (e, setState) => {
    const value = e.target.value;
    setState(value);
    setErrorsLogin(false)
  };
  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const checkForm = useCallback(() => {
    const isEmail = EMAIL_REGEX.test(email);
    const isPassword = password.length >= MIN_PASSWORD_LENGTH;
    return isEmail && isPassword;
  }, [email, password]);

  useEffect(() => {
    checkForm() ? setValidInfo(true) : setValidInfo(false);
  }, [checkForm]);

  const handleLogin = async () => {
    if (!validInfo) {
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Cache-Control": "no-cache",
          "Content-Type": "application/json",
          "Accept": "*/*",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Login successful!");
        setTimeout(()=>{
          setToken(data.token)
          localStorage.setItem("user",JSON.stringify(data.user))
          navigate("/")   
        }, 3000)
      } else {
        if (data.message) {
          setErrorsLogin(true);
        }
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className={styles.wrapperLogin}>
      <div className={styles.containerLogin}>
        <div className={styles.mainLogin}>
          <div className={styles.imageSectionWrapper}>
            <div className={styles.imageSection}>
              <img
                src="https://media.gcflearnfree.org/content/633d944b3823fb02e84dce55_10_05_2022/Screen%20Shot%202022-10-10%20at%202.28.19%20PM.png"
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
                <div className={styles.inputLoginWrapper}>
                  <input
                    type="email"
                    className="inputField"
                    placeholder="Phone number, or email"
                    onChange={(e) => {
                      handleChangeInput(e, setEmail);
                    }}
                  />
                </div>
                <div className={styles.inputLoginWrapper}>
                  <input
                    type={showPass ? "text" : "password"}
                    className="inputField"
                    placeholder="Password"
                    onCopy={showPass ? (e) => e.preventDefault() : undefined}
                    onChange={(e) => {
                      handleChangeInput(e, setPassword);
                    }}
                  />
                  {password.length > 0 && (
                    <div className={styles.passStatus} onClick={handleShowPass}>
                      {showPass ? (
                        <span className={styles.passStatusText}>Hide</span>
                      ) : (
                        <span className={styles.passStatusText}>Display</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <button
                className={`btnSubmit ${validInfo ? "btnSubmitValid" : ""}`}
                onClick={handleLogin}
              >
                Log in
              </button>
              <p className="orText">OR</p>
              <button className="fbLoginBtn">Log in with Facebook</button>
              {errorLogin && (
                <span className={styles.errorMessage}>
                  Sorry, your password was incorrect. Please double-check your
                  password.
                </span>
              )}
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
