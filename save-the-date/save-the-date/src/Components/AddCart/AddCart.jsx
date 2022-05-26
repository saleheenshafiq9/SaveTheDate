import { useContext } from "react";

import { CartContext } from "../../contexts/cart";
import Venue from "../Services/Venue/Venue";

const AddCart = () => {
    const {carts} = useContext(CartContext);
    return (
        <div>
            {carts.map(({cart}) => (
                <Venue />
            ))}
        </div>
    )
}

export default AddCart;