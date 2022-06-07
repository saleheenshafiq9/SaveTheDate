import { UserContext } from "../../contexts/user-context";
import { CartContext } from "../../contexts/cart-context";
import React,{ useContext, useEffect, useState } from "react";
import { Navigate,  } from "react-router";
import "./ProfileStyle.css";
import { Link } from "react-router-dom";
import ReqWithHead from "../../helper/ReqWithHead"
import CartItem from "../../Components/cart-item/cart-item";
import PostReq from "../../helper/PostReq";

function CustomerProfile() {
  const party_key="/api/partys/"
  
  const {currentUser,token} = useContext(UserContext);
  const {cartDecorators} = useContext(CartContext);
  const {cartVenues} = useContext(CartContext);
  const {cartCaterers} = useContext(CartContext);
  const {cartPhotos} = useContext(CartContext);
  const {cartItems} = useContext(CartContext);
  const [disable, setdisable] = useState(true);

  useEffect(() => {
    if(cartItems.length > 0) {
      setdisable(false);
    }
  })
  const getPartys=async(cartItems,Vendortype,apiVenueId)=>{
    const partyData={"guestCount":cartItems[0]?.capacity};
    const tokenHeader=`JWT ${token?.access}`;
    

    // adding a new party to parties 
    const created=PostReq(party_key,partyData,tokenHeader).then(res=>console.log(res))
    
    if (created){
      //get the last party
      const parties=await ReqWithHead(party_key,tokenHeader).then(res=>window.partyId=res[res.length-1].id)
      
      const KeyApiParty= parties &&`/api/partys/${partyId}/${Vendortype}/`
      console.log(KeyApiParty);
      //create new partyslot
      parties && PostReq(KeyApiParty,apiVenueId,tokenHeader).then(res=>console.log(res)).catch(e=>console.log(e.message))
    }  
  }

  const bookSpot=()=>{
    const venueId=cartItems[0]?.id;
    getPartys(cartVenues,"partyvenues",{
      venue_id: venueId
  });
  return null
  }


  // console.log(isDecorators);
  // currentUser===null  && navigate('/');
  
  return (
    (<div className="p-3">
      <div className="row">
        <div className="col-3">
            <div className="card w-100">
            <img
              className="card-img-top"
              src="/Customer/user.png"
              alt={currentUser.username}
              id="profileimg"
            />
            <div className="card-body">
              <h5 className="card-title">{currentUser.first_name} {currentUser.last_name}</h5>
              <button className="btn btn-dark">
                Edit Profile
              </button>
            </div>
            <div className="card-footer">
              <b>Phone: </b>
              {currentUser.phoneNumber}
              <br />
              <br />
              <b>Email: </b>
              {currentUser.email}
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="col-9">
          <div className="row">
            <div className="col text-center m-3" id="starttext">
              <h5>Haven't start planning yet?
              <button className="btn btn-dark">
                <Link to="/recommendation" id="plantext">Start here</Link>
              </button>
              </h5>
            </div>
          </div>
          <div className="row">
          <div className="col-2"></div>
        <div className="col-4 mt-4">
          <div className="card text-center" id="booking-card">
            <div className="card-body">
              <h5 className="card-title">Venue</h5>
              <p className="card-text">
                {cartVenues.map(item => (
                <CartItem key={item.id} cartItem={item} />
                ))}
              </p>
              <button className="btn" style={{backgroundColor:"#FDCA40"}}><Link to='/venue' id="exploretext"><b style={{fontWeight:"500"}}>Explore Venues</b></Link></button>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-4 mt-4">
        <div className="card text-center" id="booking-card">
            <div className="card-body">
              <h5 className="card-title">Caterer</h5>
                  <p className="card-text">
                    {cartCaterers.map(item => (
                    <CartItem key={item.id} cartItem={item} />
                    ))}
                  </p>
              <button className="btn" style={{backgroundColor:"#FDCA40"}}><Link to='/caterer' id="exploretext"><b style={{fontWeight:"500"}}>Explore Caterers</b></Link></button>
            </div>
          </div>
        </div>
        </div>
        <div className="row">
        <div className="col-2"></div>
        <div className="col-4 mt-5">
        <div className="card text-center" id="booking-card">
            <div className="card-body">
              <h5 className="card-title">Decorator</h5>
              <p className="card-text">
                {cartDecorators.map(item => (
                <CartItem key={item.id} cartItem={item} />
                ))}
              </p>
              <button className="btn" style={{backgroundColor:"#FDCA40"}}><Link to='/decorator' id="exploretext"><b style={{fontWeight:"500"}}>Explore Decorators</b></Link></button>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-4 mt-5">
          <div className="card text-center" id="booking-card">
            <div className="card-body">
              <h5 className="card-title">Photography</h5>
              <p className="card-text">
              {cartPhotos.map(item => (
          <CartItem key={item.id} cartItem={item} />
          ))}
              </p>
              <button className="btn" style={{backgroundColor:"#FDCA40"}}><Link to='/photography' id="exploretext"><b style={{fontWeight:"500"}}>Explore Photographers</b></Link></button>
            </div>
          </div>
        </div>
          </div>
          <div className="row">
            <div className="col text-center mt-3" id="starttext">
              <button type="button" className="btn btn-success" onClick={bookSpot} disabled={disable}>Go to Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-5">
        <p>
          <a className="btn btn-dark" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Past Bookings</a>
          <button className="btn btn-dark" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Upcoming Appointments</button>
        </p>
        <div className="row">
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample1">
              <div className="card card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </div>
          </div>
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample2">
              <div className="card card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>)
  )
}

export default CustomerProfile;