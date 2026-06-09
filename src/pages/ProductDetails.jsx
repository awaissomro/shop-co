
import { useParams } from "react-router-dom"
import { newArrivals,topSelling } from "../data/product"
import ProductsCard from "../components/CustomHooks/ProductCard/ProductsCard"

const allProducts = [...newArrivals, ...topSelling]
const ProductDetails = () => {
    const {slug} = useParams();
    const product = allProducts.find((p)=> p.slug===slug); 
    if(!product) return <h2>no product found</h2>

  return (
    <div>
    <ProductsCard {...product}/>
    {/* <img src={product.image} />
    <h1>{product.name}</h1>
    <p>Price: ${product.price}</p>
    {product.discount && <p>Discount:{product.discount}</p>}
    <p>Rating: {product.rating}⭐</p> */}
      
    </div>
  )
}

export default ProductDetails
