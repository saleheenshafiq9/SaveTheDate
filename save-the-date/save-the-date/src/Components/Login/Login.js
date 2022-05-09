import React, {useContext, useState} from "react";
import { Formik } from "formik";
import "./Login.css";
import { Link } from "react-router-dom";
import Register from "./Register";
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../firebase/firebase';
import {FcGoogle} from "react-icons/fc";
import axios from "axios";
import { UserContext } from "../../contexts/user-context";

const tokenurl="http://127.0.0.1:8000";
const login_key='/auth/jwt/create/';
const refresh_key='/auth/jwt/refresh';


// const Login = () => {


{/* <Formik
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
{({ values, handleChange, handleSubmit, errors }) => ( */}

//   return (
    
//   );
// }

// export default Login;

const Login = () => {
  const logGoogleUser = async() => { 
    const {user} = await signInWithGooglePopup();
    setCurrentUser(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  }
  
  const [username,setUser]=useState("")
  const [password,setPassword]=useState("");
  
  const {setCurrentUser} = useContext(UserContext);

  function handlePassChange(e){
    setPassword(e.target.value);
   
  }
  async function handleSubmit(e){
    const nameInput=e.target.username.value;
    const passInput=e.target.password.value;
    e.preventDefault();
    const data={"username":nameInput,"password":passInput};
    const token= await axios.post(tokenurl+login_key,data,
      {
        headers:{
        Accept: "application/json",
          'Content-Type':'application/json;charset=UTF-8'
      }  
    }).then(res=>res.data)
      console.log(token);

    if (token.refresh){
      setPassword('');
      setUser('');
      const acces_token= await axios.post(tokenurl+refresh_key,{"refresh":token.refresh},{
        headers:{
          Accept:"application/json;",
          'Content-Type':'application/json;charset=UTF-8'
        }
      }).then(s=>s.data)
      token.access=acces_token.access;
      localStorage.setItem("stdBackend",JSON.stringify(token));
    }
    setCurrentUser(token);

  }
  
  
  function handleUserChange(e){
    setUser(e.target.value);
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

            <div className="container" id="box">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label for="exampleInputEmail" className="form-label">
                    <b>Username</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail"
                    aria-describedby="emailHelp"
                    name="username"
                    value={username}
                    onChange={handleUserChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword" className="form-label">
                    <b>Password</b>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword"
                    name="password"
                    value={password}
                    onChange={handlePassChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-dark" value={"Submit"}>
                  Login
                </button>
                <p className="register-text">
                  Don't have an account?{" "}
                  <Link to="/register">Register Here</Link>.
                </p>
                <button className="btn btn-dark" onClick={logGoogleUser}><FcGoogle className="mx-2"/> Sign in with Google</button>

              </form>
            </div>
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
  )
}

export default Login;
