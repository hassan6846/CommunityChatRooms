import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


// Css
import "./Login.css";
// components and Library.
import { useNavigate } from "react-router-dom";
import Loginbtns from "../../components/LoginPageBtns.tsx";

import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import toast, { Toaster } from "react-hot-toast";
//api
import axios from "axios";
import { ENDPOINT } from "../../api/Endpoint.tsx";


const Login = () => {
  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState<any>(false);

  // Validation functions
  const validateEmail = (email: any) => {
    // Basic email validation
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validatePassword = (password: any) => {
    return password.length >= 7;
  };

  const handleEmailChange = (e: any) => {
    const value = e.target.value;
    setEmail(value);

    if (!value) {
      setEmailError("Please fill the email field");
    } else if (!validateEmail(value)) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e: any) => {
    const value = e.target.value;
    setPassword(value);

    if (!value) {
      setPasswordError("Please fill the password field");
    } else if (!validatePassword(value)) {
      setPasswordError("Password must be at least 7 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Check if form is valid
    if (emailError || passwordError || !email || !password) {
      return;
    }

    setIsSubmitting(true); // Start login submission

    try {
      console.log(`Sending request to: http://localhost:4000/api/v1/login`);

      // Make the API call
      const response = await axios.post(`${ENDPOINT}/login`, {
        email,
        password,

      }
        ,
        {
          withCredentials: true
        }
      );

      console.log(response)
      toast.success("Successfully logged in");
      navigate('/')
    } catch (error: any) {
      console.log("Error during login:", error);
      if (error.response) {
        console.log("Error response data:", error.response.data.message);
        toast.error(error.response.data.message)

      } else {

        console.log("Error message:", error.message);
      }
    } finally {
      setIsSubmitting(false); // End login submission
    }
  };

  useEffect(() => {

    console.log("Home Page Rendered")


    // eslint-disable-next-line 
  }, []);

  return (
    <div>
      <section className="login_wrapper-100">
        <div>
          <Toaster />
        </div>
        <div className="login-container">
          <h1 className="login-heading">Login account</h1>
          <Loginbtns />
          <p className="orline_login">OR CONTINUE WITH</p>
          <form onSubmit={handleSubmit} className="login-form">
            <MDBInput
              value={email}
              onChange={handleEmailChange}
              className="login-input"
              type="email"
              placeholder="Enter Email"
              label="Email"
            />
            {emailError && <div className="error">{emailError}</div>}

            <MDBInput
              value={password}
              onChange={handlePasswordChange}
              className="login-input"
              type="password"
              placeholder="Enter Password"
              label="Password"
              autoComplete="true"
            />
            {passwordError && <div className="error">{passwordError}</div>}

            <Link className="forgot-link" to="/password/forgot">
              Forgot Password?
            </Link>

            <MDBBtn
              type="submit"
              style={{ backgroundColor: "#4BB497", border: "0px" }}
              className="otp-submit"
              disabled={isSubmitting || !email || !password || emailError || passwordError}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </MDBBtn>
          </form>
          <div className="login_flex">
            <p className="login_page_tag_line">DON'T HAVE ACCOUNT?</p>
            <Link to="/auth/signup" className="register">
              Create Account Instead
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
