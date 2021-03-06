import React, { useContext, useState } from 'react'
import './Recommendation.css';
import {MdOutlineDoneOutline} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/cart-context';

const PartyType = () => {
    const [selected, setSelected] = useState(0);
    const {addType} = useContext(CartContext);

    const selectType = () => {
        if(selected===1) {
            addType("Wedding");
        }

        else if(selected===2) {
            addType("Birthday Party");
        }

        else if(selected===3) {
            addType("Success Party");
        }

        else if(selected===4) {
            addType("Gaaye Holud");
        }

        else if(selected===5) {
            addType("Workshop");
        }

        else if(selected==6) {
            addType("Others");
        }
    }

  return (
    <div>
      <h2 className='tagline text-center p-5 m-5'>Let's get started! What type of party are you going to plan?</h2>
        <div className="row text-center">
            <div className="col-2">
                <div class="box red" onClick={() => setSelected(1)}>
                    <h5 className='mb-4'>Wedding</h5>
                    <img src="../../../Recommendation/wedding.png" alt="" id='img-party'/><br />
                    {selected === 1 && <MdOutlineDoneOutline className='bg-success text-light' style={{
                        marginTop: "40px"
                    }}/>}
                </div>
            </div>
            <div className="col-2">
                <div class="box cyan" onClick={() => setSelected(2)}>
                    <h5 className='mb-4'>Birthday Party</h5>
                    <img src="../../../Recommendation/cupcake.png" alt="" id='img-party'/><br />
                    {selected === 2 && <MdOutlineDoneOutline className='bg-success text-light' style={{
                        marginTop: "40px"
                    }}/>}
                </div>
            </div>
            <div className="col-2">
                <div class="box blue" onClick={() => setSelected(3)}>
                    <h5 className='mb-4'>Success Party</h5>
                    <img src="../../../Recommendation/success.png" alt="" id='img-party'/><br />
                    {selected === 3 && <MdOutlineDoneOutline className='bg-success text-light' style={{
                        marginTop: "40px"
                    }}/>}
                </div>
            </div>
            <div className="col-2">
                <div class="box orange" onClick={() => setSelected(4)}>
                    <h5 className='mb-4'>Gaaye Holud</h5>
                    <img src="../../../Recommendation/hindu-wedding.png" alt="" id='img-party'/><br />
                    {selected === 4 && <MdOutlineDoneOutline className='bg-success text-light' style={{
                        marginTop: "40px"
                    }}/>}
                </div>
            </div>
            <div className="col-2">
                <div class="box teal" onClick={() => setSelected(5)}>
                    <h5 className='mb-4'>Workshop</h5>
                    <img src="../../../Recommendation/training.png" alt="" id='img-party'/><br />
                    {selected === 5 && <MdOutlineDoneOutline className='bg-success text-light' style={{
                        marginTop: "40px"
                    }}/>}
                </div>
            </div>
            <div className="col-2">
                <div class="box purple" onClick={() => setSelected(6)}>
                    <h5 className='mb-4'>Others</h5>
                    <img src="../../../Recommendation/dance.png" alt="" id='img-party'/><br />
                    {selected === 6 && <MdOutlineDoneOutline className='bg-success text-light' style={{
                        marginTop: "40px"
                    }}/>}
                </div>
            </div>
        </div>
        <div className='text-center'>
        <Link to="/partydate"><button className='btn btn-lg' id='btnParty'><b style={{
            fontWeight: "500"
        }} onClick={selectType}>Continue</b></button></Link>
        </div>
    </div>
  )
}

export default PartyType
