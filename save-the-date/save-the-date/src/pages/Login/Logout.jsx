import React from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";
const Logout = () => {
    const {setCurrentUser,setToken,setLoading}=useContext(UserContext);
    function handleClick(e){
        setCurrentUser(null);
        localStorage.removeItem("stdBackend")
        setToken(null);
        setLoading(false)
        
    }
    return (
        <span id="NavLink"  onClick={handleClick}> Sign Out</span>
    )
}

export default Logout;