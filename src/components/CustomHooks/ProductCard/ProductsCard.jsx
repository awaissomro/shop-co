import { Card, CardImage,CardName,CardPrice,CardRating } from "./ProductsCard.styles"
import Rating from "../../../assets/rating.png"
const ProductsCard = ({image,name,rating,price,originalPrice,discount}) => {


  return (
    <Card>
        <CardImage>
            <img src={image} alt={name} />
        </CardImage>
        <CardName>{name}</CardName>
        <CardRating>
            <img src={Rating} alt="rating" />
            <span>{rating}/5</span>
        </CardRating>
        <CardPrice>
            <h3>${price}</h3>
            {originalPrice && <p className="originalPrice">${originalPrice}</p> }
            {discount && <p className="discount">{discount}</p>}
        </CardPrice>


      
    </Card>
  )
}

export default ProductsCard
