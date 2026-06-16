import {
  Section,
  Title,
  CardsGrid,
  ViewAllButton,
} from "../CustomHooks/ProductSection.styles.js";
import BlackShirt from "../../assets/black t-shirt.png"; 
import SkinnyJeans from "../../assets/jeans.png";
import CheckedShirt from "../../assets/checkered shirt.png";
import SleeveShirt from "../../assets/sleeve t-shirt.png";
import GraphicShirt from "../../assets/graphic shirt.png";
import Shorts from "../../assets/shorts.png";
import FadedJeans from "../../assets/faded skinny jeans.png";
import { useState } from "react";
import ProductsCard from "../CustomHooks/ProductCard/ProductsCard.jsx";
import { Link } from "react-router-dom";
const NewArrival = () => {
  const [showAll, setShowAll] = useState(false);

  const products = [
    {
      id: 1,
      slug: "t-shirt-tape-details",
      image: BlackShirt,
      name: "T-shirt with Tape Details",
      rating: 4.5,
      price: 120,
      originalPrice: null,
      discount: null,
    },
    {
      id: 2,
      slug: "skinny Fit Jeans",
      image: SkinnyJeans,
      name: "Skinny Fit Jeans",
      rating: 3.5,
      price: 240,
      originalPrice: 260,
      discount: "-20%",
    },
    {
      id: 3,
      slug: "checkered Shirt",
      image: CheckedShirt,
      name: "Checkered Shirt",
      rating: 4.5,
      price: 180,
      originalPrice: null,
      discount: null,
    },
    {
      id: 4,
      slug: "sleeve-striped-t-shirt",
      image: SleeveShirt,
      name: "Sleeve Striped T-shirt",
      rating: 4.5,
      price: 130,
      originalPrice: 160,
      discount: "-30%",
    },
    {
      id: 5,
      image: GraphicShirt,
      name: "Courage Graphic T-shirt",
      rating: 4,
      price: 145,
      originalPrice: null,
      discount: null,
    },
    {
      id: 6,
      image: Shorts,
      name: "Loose Fit Bermuda Shorts",
      rating: 3,
      price: 80,
      originalPrice: null,
      discount: null,
    },
    {
      id: 7,
      image: FadedJeans,
      name: "Faded Skinny Jeans",
      rating: 4.5,
      price: 210,
      originalPrice: null,
      discount: null,
    },
    {
      id: 8,
      image: SleeveShirt,
      name: "Slim Fit Chinos",
      rating: 3.8,
      price: 190,
      originalPrice: 220,
      discount: "-10%",
    },
  ];

  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <Section>
      <Title>New Arrivals</Title>
      <CardsGrid>
        {visibleProducts.map((product) => (
          <Link to={`/product/${product.slug}`} key={product.id} style={{textDecoration:"none"}} >
          <ProductsCard  {...product} />
          </Link>
        ))}
      </CardsGrid>
      <ViewAllButton onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Less" : "View All"}
      </ViewAllButton>
    </Section>
  );
};

export default NewArrival;
