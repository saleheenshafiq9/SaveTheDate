import React from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./Profiles/PrivateRoute";
import CustomerProfile from "./Profiles/CustomerProfile";
import Header from "./Header/Header";
import SaveTheDate from "./SaveTheDate/SaveTheDate";
import Services from "./Services/Services";
import Blogs from "./Blogs/Blogs";
import Contact from "./Contact/Contact";
import Login from "./Login/Login";
import Register from "./Login/Register";

const Main = (props) => {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<SaveTheDate />} />
          <Route path="/customerProfile" element={<CustomerProfile/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
