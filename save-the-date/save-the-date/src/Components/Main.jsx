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
<<<<<<< HEAD
import Register from "../pages/Register/Register";
import ProviderProfile from "../pages/Profiles/ProviderProfile";
=======
import Register from "../pages/Login/Register";
import VenueProfile from "../pages/Profiles/VenueProfile";
>>>>>>> c686077d6929a60dc5e35bc2dafd4eb75387a1e5
import RecommendationParameters from "../pages/Profiles/CustomerQuery";
import Venue from "./Services/Venue/Venue";
import Caterer from "./Services/Caterer/Caterer";
import Decorator from "./Services/Decorator/Decorator";
import Photography from "./Services/Photography/Photography";
import EditVenue from "../pages/editProfiles/editVenue";
import EditCaterer from "../pages/editProfiles/editCaterer";
import CatererProfile from "../pages/Profiles/CatererProfile";
import EditDecorator from "../pages/editProfiles/editDecorator";
import DecoratorProfile from "../pages/Profiles/DecoratorProfile";
import EditPhotography from "../pages/editProfiles/editPhotography";
import PhotographyProfile from "../pages/Profiles/PhotographyProfile";

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

          <Route path="/providerProfile" 
          element={<PrivateRoute><ProviderProfile /></PrivateRoute>} />
          <Route path="/catererProfile" element={<PrivateRoute><CatererProfile /></PrivateRoute>} />
          <Route path="/recommendation" element={<PrivateRoute><RecommendationParameters /></PrivateRoute>} />

          <Route path="/providerProfile" element={<VenueProfile />} />
          <Route path="/catererProfile" element={<CatererProfile />} />
          <Route path="/decoratorProfile" element={<DecoratorProfile />} />
          <Route path="/photographyProfile" element={<PhotographyProfile />} />
          <Route path="/recommendation" element={<RecommendationParameters />} />

        </Routes>
      </div>
    </div>
  );
};

export default Main;
