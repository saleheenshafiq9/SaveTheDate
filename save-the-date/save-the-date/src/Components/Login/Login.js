import React, { Component } from "react";
import { Formik } from "formik";
import "./Login.css";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
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
            <div classNameName="container" id="box">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    <b>Email address</b>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <span style={{ color: "Red" }}>{errors.email}</span>
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
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
              </form>
            </div>
          )}
        </Formik>
      </div>
    );
  }
}

export default Login;
