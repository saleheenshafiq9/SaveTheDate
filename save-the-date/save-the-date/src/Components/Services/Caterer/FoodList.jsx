import React, {useState} from 'react'
import './Caterer.css'
import { MdRemoveCircle } from 'react-icons/md';

const FoodList = (props) => {
    const [quantity, setQuantity] = useState(0);

    const handleInputChange = (e) => {
        setQuantity(e.target.value);
    }

    const FoodShow = props.foods.map((food) => {
        console.log(food.title);
        return (
        <div className='food-container text-center'>
            <div className="food-header">
                <div className="header-block img-container">
                    <img src={food.images[0].image} alt={`${food.title}`} height="60px"/>
                </div>
                <div className="header-block">
                    <span className='name'>{food.title}</span>
                </div>
                <div className="header-block">
                        <span className='name'>{food.description}</span>
                </div>
                <div className="header-block">
                <input
                    type="number"
                    className="form-control w-50 mt-3 ml-5"
                    name={quantity}
                    onChange= {handleInputChange}
                    required >
                </input>
                </div>
                <div className="header-block">
                    <span className='price' onChange={handleInputChange}>{`${food.unitPrice*quantity}`}</span>
                </div>
                <div className="header-block">
                    <MdRemoveCircle className='remove-button text-danger' />
                </div>
            </div>
        </div>
          )
    })
    return (
        <div>{FoodShow}</div>
    )
}

export default FoodList
