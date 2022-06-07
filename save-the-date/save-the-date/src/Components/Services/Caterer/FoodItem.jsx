import React from 'react'
import './Caterer.css'
import FoodList from './FoodList'

function FoodItem(props) {
  return (
      <>
      <div>
        <div className='food-container text-center'>
            <div className="food-header">
            <div className="header-block">
                <span>Item</span>
            </div>
            <div className="header-block">
                <span>Name</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
    </div>
    </div>
        <FoodList foods={props.items} />
        <div className='text-center p-5'>
        <span className='total'>Total: 0</span>
        </div>
        </>
  )
}

export default FoodItem
