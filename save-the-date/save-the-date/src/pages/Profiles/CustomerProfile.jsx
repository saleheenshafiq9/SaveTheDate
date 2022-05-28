import { UserContext } from "../../contexts/user-context";
import React,{ useContext,useEffect } from "react";
import { Navigate,  } from "react-router";
import RecommendationParameters from "./CustomerQuery";

function CustomerProfile() {
  
  const {currentUser} = useContext(UserContext);
  // currentUser===null  && navigate('/');
  
  
  return (
    (<div>
      <h3>Welcome {currentUser.username}</h3>
      <RecommendationParameters />
    </div>)
  )
}

export default CustomerProfile;