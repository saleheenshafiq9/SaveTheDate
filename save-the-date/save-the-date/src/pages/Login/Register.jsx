import { UserContext } from "../../contexts/user-context";
import { useContext } from "react";
// import { Formik, Field } from "formik";
import { Link } from "react-router-dom";
import "./Login.css";
import "react-phone-number-input/style.css";
import axios from "axios";
import { useState } from "react";

// const Register = (props) => {
//   return (
//     <div>
//       <Formik
//         initialValues={{
//           firstname: "",
//           lastname: "",
//           email: "",
//           username: "",
//           password: "",
//           confirmpassword: "",
//           phone: "",
//           type: "",
//         }}
//         onSubmit={(values) => {
//           console.log(values);
//         }}
//         validate={(values) => {
//           const errors = {};
//           if (!values.firstname) {
//             errors.firstname = "Required";
//           }
//           if (!values.lastname) {
//             errors.lastname = "Required";
//           }
//           if (!values.username) {
//             errors.username = "Required";
//           }
//           if (!values.email) {
//             errors.email = "Required";
//           }
//           if (!values.phone) {
//             errors.phone = "Required";
//           }
//           if (!values.password) {
//             errors.password = "Required";
//           } else if (values.password.length < 4) {
//             errors.password = "Must be atleast 4 characters!";
//           }
//           if (!values.confirmpassword) {
//             errors.confirmpassword = "Required";
//           } else if (values.password !== values.confirmpassword) {
//             errors.confirmpassword = "Password field does no match!";
//           }
//           //console.log(errors);
//           return errors;
//         }}
//       >
//         {({ values, handleChange, handleSubmit, errors }) => (
//           <div className="container" id="box-reg">

//           </div>
//         )}
//       </Formik>{" "}
//     </div>
//   );
// };

// export default Register;

function Register() {
  const tokenurl='http://127.0.0.1:8000';
  const {currUser,setCurrentUser} = useContext(UserContext);
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
  //input handler
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
        }).then(s=>console.log(s));
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
      <input
        type="text"
        className="form-control"
        id="exampleInputUsertype"
        name="userType"
        value={formInput.userType}
        onChange={handleChange}
        required
      />
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

Register.propTypes = {}

export default Register;