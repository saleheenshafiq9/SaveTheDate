import { UserContext } from "../../contexts/user-context";
import React,{ useContext,useEffect } from "react";

import { useNavigate,Link } from "react-router-dom";
import "./Login.css";
import "react-phone-number-input/style.css";
import axios from "axios";
import { useState } from "react";


function Register() {
  const navigate= useNavigate();
  const tokenurl='http://127.0.0.1:8000';
  const {currentUser,setCurrentUser} = useContext(UserContext);
  const reg_key='/auth/users/';
  const [formInput,SetInputs]=useState({
      first_name:'',
      last_name:'',
      email:'',
      username:'',
      password:'',
      confirmpassword:'',
      phoneNumber:'',
      userType:''
  });


  useEffect(() => {
    currentUser?.userType=="Cusotmer"&& navigate("../customerProfile");
    currentUser?.userType=="Venue"&& navigate("../providerProfile");
    currentUser?.userType=="Caterer"&& navigate("../catererProfile");
  
  }, [currentUser])
  
  
  const handleChange=(e)=>{
      SetInputs(
          {...formInput,
              [e.target.name]:e.target.value
          }
      )}
  const  handleSubmit= async (e)=>{
      e.preventDefault();
      const username=e.target.username.value;
      const first_name=e.target.first_name.value;
      const last_name=e.target.last_name.value;
      const password=e.target.password.value;
      const email=e.target.email.value;
      const phoneNumber=e.target.phoneNumber.value;
      const userType=e.target.userType.value;
      const confirmpassword=e.target.confirmpassword.value;
      const data={
          "first_name":first_name,
          "last_name":last_name,
          "username":username,
          "email":email,
          "password":password,
          "phoneNumber":phoneNumber,
          "userType":userType
      }

      if(password!==confirmpassword) {
        alert("Passwords do not match");
        return;
      }

      const userData=await axios.post(tokenurl+reg_key,data,{
          headers:{
            Accept:"application/json;",
            'Content-Type':'application/json;charset=UTF-8'
          }
        }).then(s=>s.data);
        console.log(userData);
      setCurrentUser(userData)
  }
  
  return (
<div id="box-reg">
  <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <div className="row">
      <div className="col">
        <label htmlFor="exampleInputFirstName1" className="form-label">
          <b>First Name</b>
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputFirstName1"
          aria-describedby="textHelp"
          name="first_name"
          value={formInput.first_name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col">
        <label htmlFor="exampleInputLastName1" className="form-label">
          <b>Last Name</b>
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputLastName1"
          aria-describedby="textHelp"
          name="last_name"
          value={formInput.last_name}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      <b>Email</b>
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      name="email"
      value={formInput.email}
      onChange={handleChange}
      required
    />
    <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>
  <div className="mb-3">
    <div className="row">
      <div className="col">
        <label htmlFor="exampleInputUsername1" className="form-label">
          <b>Username</b>
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputUsername1"
          name="username"
          value={formInput.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col typechoose">
        <label htmlFor="exampleInputtype1" className="form-label">
          <b>User Type</b>
        </label>
        <br />
        <div role="group" aria-labelledby="my-radio-group">
        
        <select
          className="form-control"
          id="exampleInputUsertype"
          name="userType"
          value={formInput.userType}
          onChange={handleChange}
          required >
          <option value="Customer">Customer</option>
          <option value="Venue">Venue Provider</option>
          <option value="Caterer">Caterer Provider</option>
          <option value="Decorator">Decorator Provider</option>
          <option value="Photography">Photography Provider</option>
        </select>
        </div>
      </div>
    </div>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPhone1" className="form-label">
      <b>Phone Number</b>
    </label>
    <input
      type="tel"
      className="form-control"
      id="exampleInputPhone1"
      name="phoneNumber"
      value={formInput.phoneNumber}
      onChange={handleChange}
      required
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      <b>Password</b>
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      name="password"
      value={formInput.password}
      onChange={handleChange}
      required
    />
  </div>
  <div className="mb-3">
    <label
      htmlFor="exampleInputConfirmPassword1"
      className="form-label"
    >
      <b>Confirm Password</b>
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputConfirmPassword1"
      name="confirmpassword"
      value={formInput.confirmpassword}
      onChange={handleChange}
      required
    />
  </div>
  <button type="submit" className="btn btn-dark" value={"Submit"}>
    Register
  </button>
  <p className="register-text">
    Already have an account? <Link to="/login">Login Here</Link>.
  </p>
</form>
      </div>
)}



export default Register;