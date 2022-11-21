import "./product-card.styles.scss"
import Button from "../button/button"
import { useContext } from "react"

import { CartContext } from "../../contexts/cart-context"


const ProductCard = ({product})=>{
    // console.log("props",product)
    const {id,name,price,imageUrl} =product

    const {addItemToCart} = useContext(CartContext)

const addProductToCart = ()=> addItemToCart(product)


    return (
        <div key={id} className="product-card-container">

            <img src={imageUrl} alt={name} />

            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">
                {price}
                </span>

            </div>
            <Button onClick={addProductToCart} buttonType="inverted">Add to Cart</Button>

        </div>
    )
}


export default ProductCard