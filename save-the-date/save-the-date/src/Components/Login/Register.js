import React from "react";
import { Formik, Field } from "formik";
import { Link } from "react-router-dom";
import "./Login.css";
import "react-phone-number-input/style.css";

const Register = (props) => {
  return (
    <div>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          username: "",
          password: "",
          confirmpassword: "",
          phone: "",
          type: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validate={(values) => {
          const errors = {};
          if (!values.firstname) {
            errors.firstname = "Required";
          }
          if (!values.lastname) {
            errors.lastname = "Required";
          }
          if (!values.username) {
            errors.username = "Required";
          }
          if (!values.email) {
            errors.email = "Required";
          }
          if (!values.phone) {
            errors.phone = "Required";
          }
          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length < 4) {
            errors.password = "Must be atleast 4 characters!";
          }
          if (!values.confirmpassword) {
            errors.confirmpassword = "Required";
          } else if (values.password !== values.confirmpassword) {
            errors.confirmpassword = "Password field does no match!";
          }
          //console.log(errors);
          return errors;
        }}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <div className="container" id="box-reg">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <div className="row">
                  <div className="col">
                    <label for="exampleInputFirstName1" className="form-label">
                      <b>First Name</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputFirstName1"
                      aria-describedby="textHelp"
                      name="firstname"
                      value={values.firstname}
                      onChange={handleChange}
                    />
                    <span style={{ color: "Red" }}>{errors.firstname}</span>
                  </div>
                  <div className="col">
                    <label for="exampleInputLastName1" className="form-label">
                      <b>Last Name</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputLastName1"
                      aria-describedby="textHelp"
                      name="lastname"
                      value={values.lastname}
                      onChange={handleChange}
                    />
                    <span style={{ color: "Red" }}>{errors.lastname}</span>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  <b>Email</b>
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
                <div className="row">
                  <div className="col">
                    <label for="exampleInputUsername1" className="form-label">
                      <b>Username</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputUsername1"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                    />
                    <span style={{ color: "Red" }}>{errors.username}</span>
                  </div>
                  <div className="col typechoose">
                    <label for="exampleInputtype1" className="form-label">
                      <b>User Type</b>
                    </label>
                    <br />
                    <div role="group" aria-labelledby="my-radio-group">
                      <label>
                        <Field type="radio" name="type" value="customer" />
                        Customer
                      </label>
                      <br />
                      <label>
                        <Field
                          type="radio"
                          name="type"
                          value="serviceprovider"
                          id="typechoose"
                        />
                        Service Provider
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPhone1" className="form-label">
                  <b>Phone Number</b>
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleInputPhone1"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
                <span style={{ color: "Red" }}>{errors.phone}</span>
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
              <div className="mb-3">
                <label
                  for="exampleInputConfirmPassword1"
                  className="form-label"
                >
                  <b>Confirm Password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputConfirmPassword1"
                  name="confirmpassword"
                  value={values.confirmpassword}
                  onChange={handleChange}
                />
                <span style={{ color: "Red" }}>{errors.confirmpassword}</span>
              </div>
              <button type="submit" className="btn btn-dark">
                Register
              </button>
              <p className="register-text">
                Already have an account? <Link to="/login">Login Here</Link>.
              </p>
            </form>
          </div>
        )}
      </Formik>{" "}
    </div>
  );
};

export default Register;
