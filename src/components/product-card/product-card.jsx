import "./product-card.styles.scss"
import Button from "../button/button"

const ProductCard = (props)=>{
    // console.log("props",props)
    return (
        <div key={props.product.id} className="product-card-container">

            <img src={props.product.imageUrl} alt={props.product.name} />

            <div className="footer">
                <span className="name">{props.product.name}</span>
                <span className="price">
                {props.product.price}
                </span>

            </div>
            <Button buttonType="inverted">Add to Cart</Button>

        </div>
    )
}


export default ProductCard