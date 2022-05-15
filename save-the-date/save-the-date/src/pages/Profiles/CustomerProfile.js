import { UserContext } from "../../contexts/user-context";
import { useContext } from "react";

function CustomerProfile() {
  const {currentUser} = useContext(UserContext);

  return (
    <div>
      <h1>You are logged in {currentUser.username}</h1>
      <h3>You are a {currentUser.userType}</h3> 
    <h2> your email is {currentUser.email}</h2>

    </div>
  )
}

export default CustomerProfile;