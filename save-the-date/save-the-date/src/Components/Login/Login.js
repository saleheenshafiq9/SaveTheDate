import React from "react";
import { Formik } from "formik";
import "./Login.css";
import { Link } from "react-router-dom";
import Register from "./Register";
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../firebase/firebase';
import {FcGoogle} from "react-icons/fc";


const Login = () => {
  const logGoogleUser = async() => { 
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div className="allogin">
      <ul
        className="nav nav-pills justify-content-center"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item">
          <a
            className="nav-link active"
            id="pills-home-tab"
            data-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Login
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="pills-profile-tab"
            data-toggle="pill"
            href="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Sign Up
          </a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validate={(values) => {
              const errors = {};
              if (!values.username) {
                errors.username = "Required";
              }

              if (!values.password) {
                errors.password = "Required";
              } else if (values.password.length < 4) {
                errors.password = "Must be atleast 4 characters!";
              }
              //console.log(errors);
              return errors;
            }}
          >
            {({ values, handleChange, handleSubmit, errors }) => (
              <div className="container" id="box">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      <b>Username</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                    />
                    <span style={{ color: "Red" }}>{errors.username}</span>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      <b>Password</b>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                    />
                    <span style={{ color: "Red" }}>{errors.password}</span>
                  </div>
                  <button type="submit" className="btn btn-dark">
                    Login
                  </button>
                  <p className="register-text">
                    Don't have an account?{" "}
                    <Link to="/register">Register Here</Link>.
                  </p>
                  <button className="btn btn-dark" onClick={logGoogleUser}><FcGoogle className="mx-2"/> Sign in with Google</button>

                </form>
              </div>
            )}
          </Formik>
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <Register />
        </div>
      </div>
    </div>
  );
}

export default Login;
