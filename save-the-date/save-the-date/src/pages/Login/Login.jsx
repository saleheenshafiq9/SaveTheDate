import React, {useContext, useState,useEffect} from "react";


import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Register from "../Register/Register";
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../firebase/firebase';
import {FcGoogle} from "react-icons/fc";
import axios from "axios";
import { UserContext } from "../../contexts/user-context";
import PostReq from "../../helper/PostReq";
import ReqWithHead from "../../helper/ReqWithHead";
const tokenurl="http://127.0.0.1:8000";
const login_key='/auth/jwt/create/';
const refresh_key='/auth/jwt/refresh';
const data_key='/auth/users/me';



const Login = () => {
  
  const navigate = useNavigate();
  const {currentUser,updateToken,setCurrentUser,setToken} = useContext(UserContext);
  const logGoogleUser = async() => { 
    const {user} = await signInWithGooglePopup();
    setCurrentUser(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  }
  
  const [username,setUser]=useState("")
  const [password,setPassword]=useState("");
  
  


  

  function handlePassChange(e){
    setPassword(e.target.value);
  }
  async function handleSubmit(e){
    e.preventDefault();

    const nameInput=e.target.username.value;
    const passInput=e.target.password.value;
    
    const data={"username":nameInput,"password":passInput};
    let token=await axios.post(tokenurl+login_key,data)
    .then(res=>res.data).then(res=>
      {localStorage.setItem("stdBackend",JSON.stringify(res));
        setToken(res);
      
      return res;
   });

    updateToken()
    // const access_tok = `JWT ${token.access}`;
    // console.log(token);
    // const fetchedData = await axios.get(tokenurl+data_key, {
    //   headers: {
    //   'Authorization': access_tok,
    //   }
    // }).then(s=>s.data)
    // const fect=ReqWithHead(tokenurl,data_key,access_tok);
    // fect.then(res=>setCurrentUser(res));
    
    // setCurrentUser(fetchedData);
    // currentUser.email && navigate('/customerProfile');
    
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
                  <label htmlFor="exampleInputEmail" className="form-label">
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
                  <label htmlFor="exampleInputPassword" className="form-label">
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
