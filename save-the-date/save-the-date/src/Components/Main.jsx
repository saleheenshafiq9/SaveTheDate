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


import Register from "../pages/Register/Register";

import RecommendationParameters from "../pages/Profiles/CustomerQuery";
import EditVenue from "../pages/editProfiles/editVenue";
import EditCaterer from "../pages/editProfiles/editCaterer";
import VenueProfile from "../pages/Profiles/VenueProfile";
import CatererProfile from "../pages/Profiles/CatererProfile";
import EditDecorator from "../pages/editProfiles/editDecorator";
import DecoratorProfile from "../pages/Profiles/DecoratorProfile";
import EditPhotography from "../pages/editProfiles/editPhotography";
import PhotographyProfile from "../pages/Profiles/PhotographyProfile";
import VenueShow from "./Services/Venue/VenueShow";
import CatererShow from "./Services/Caterer/CatererShow";
import DecoratorShow from "./Services/Decorator/DecoratorShow";
import PhotographyShow from "./Services/Photography/PhotographyShow";


const Main = (props) => {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<SaveTheDate />} />
          <Route path="/recommendation" element={<RecommendationParameters />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/venue" element={<VenueShow />} />
          <Route path="/caterer" element={<CatererShow />} />
          <Route path="/decorator" element={<DecoratorShow />} />
          <Route path="/photography" element={<PhotographyShow />} />
          {/* Edit Profiles */}
          <Route path="/editvenue" element={<EditVenue />} />
          <Route path="/editcaterer" element={<EditCaterer />} />
          <Route path="/editdecorator" element={<EditDecorator />} />
          <Route path="/editphotography" element={<EditPhotography />} />

          {/* Private Profiles  */}
          <Route path="/customerProfile" 
            element={
              <PrivateRoute>
                <CustomerProfile/>
              </PrivateRoute> 
            }/>
          <Route path="/catererProfile" 
          element={
            <PrivateRoute>
              <CatererProfile />
            </PrivateRoute>
          } />
          

          <Route path="/venueProfile" 
            element={
              <PrivateRoute>
                <VenueProfile />
              </PrivateRoute>
          
          } />

          <Route path="/decoratorProfile" 
            element={
              <PrivateRoute>
                <DecoratorProfile />
              </PrivateRoute>} />
          <Route path="/photographyProfile" 
            element={
              <PrivateRoute>
                <PhotographyProfile /> 
              </PrivateRoute>
            } />
          
        </Routes>
      </div>
    </div>
  );
};

export default Main;
