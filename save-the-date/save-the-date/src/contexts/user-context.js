import { createContext, useState,useEffect } from "react";
import { useNavigate } from "react-router";


export const UserContext = createContext(
    null)

export const UserProvider = ({children}) => {
    const navigate=useNavigate();
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser};
    useEffect(() => {
        console.log(currentUser);
        //   currentUser.email && navigate('/customerProfile')
      
      }, [currentUser,navigate])


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}