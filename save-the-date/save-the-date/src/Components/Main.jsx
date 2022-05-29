import React from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "../pages/Profiles/PrivateRoute";
import CustomerProfile from "../pages/Profiles/CustomerProfile";
import Header from "./Header/Header";
import SaveTheDate from "./SaveTheDate/SaveTheDate";
import Services from "./Services/Services";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import ProviderProfile from "../pages/Profiles/ProviderProfile";
import RecommendationParameters from "../pages/Profiles/CustomerQuery";
import Venue from "./Services/Venue/Venue";
import Caterer from "./Services/Caterer/Caterer";
import Decorator from "./Services/Decorator/Decorator";
import Photography from "./Services/Photography/Photography";
import EditVenue from "../pages/editProfiles/editVenue";
import EditCaterer from "../pages/editProfiles/editCaterer";
import CatererProfile from "../pages/Profiles/CatererProfile";

const Main = (props) => {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<SaveTheDate />} />
          <Route path="/customerProfile" element={<PrivateRoute><CustomerProfile/></PrivateRoute> }/>
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/providerProfile" element={<ProviderProfile />} />
          <Route path="/catererProfile" element={<CatererProfile />} />
          <Route path="/recommendation" element={<RecommendationParameters />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/caterer" element={<Caterer />} />
          <Route path="/decorator" element={<Decorator />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/editvenue" element={<EditVenue />} />
          <Route path="/editcaterer" element={<EditCaterer />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
