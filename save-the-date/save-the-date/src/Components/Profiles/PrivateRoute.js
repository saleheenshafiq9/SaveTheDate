import React, { Children } from 'react';
import useAuth from "../../hooks/useAuth";
import {Navigate, Outlet} from "react-router-dom";

export const PrivateRoute = ({children}) => {
  const auth=useAuth();

  return (<>
 {auth?children:
 <Navigate to ="/login" />}
 </>
  )
}