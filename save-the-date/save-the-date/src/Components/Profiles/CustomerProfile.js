import jwt_decode from "jwt-decode";
import useAuth from "../../hooks/useAuth";


function CustomerProfile() {
  
  const tokens=useAuth();
  const user =jwt_decode(tokens.access);
  // const type=user;
  console.log(user);
 
  return (
    <div>
      <h1> h1</h1><br />
      <h1 className='text-center text-3xl font-bold'>You are logged in</h1>
    </div>
  )
}

export default CustomerProfile;