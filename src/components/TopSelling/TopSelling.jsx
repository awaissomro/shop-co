import { useState } from "react";
import ProductsCard from "../CustomHooks/ProductCard/ProductsCard";
import {
  Section,
  Title,
  CardsGrid,
  ViewAllButton,
} from "../CustomHooks/ProductSection.styles";
import VerticalShirt from "../../assets/vertical striped shirt.png";
import GraphicShirt from "../../assets/graphic shirt.png";
import Shorts from "../../assets/shorts.png";
import FadedJeans from "../../assets/faded skinny jeans.png";
import SleeveShirt from "../../assets/sleeve t-shirt.png";
import BlackShirt from "../../assets/black t-shirt.png";

const TopSelling = () => {
  const [showAll, setShowAll] = useState(false);
  const products = [
    {
      id: 1,
      slug: "vertical-striped-shirt",
      image: VerticalShirt,
      name: "Vertical Striped Shirt",
      rating: 5,
      price: 212,
      originalPrice: 232,
      discount: "-20%",
    },
    {
      id: 2,
      slug:"courage-graphic-t-shirt",
      image: GraphicShirt,
      name: "Courage Graphic T-shirt",
      rating: 4,
      price: 145,
      originalPrice: null,
      discount: null,
    },
    {
      id: 3,
      slug: "loose-fit-bermuda-shorts",
      image: Shorts,
      name: "Loose Fit Bermuda Shorts",
      rating: 3,
      price: 80,
      originalPrice: null,
      discount: null,
    },
    {
      id: 4,
      slug:"faded-skinny-jeans",
      image: FadedJeans,
      name: "Faded Skinny Jeans",
      rating: 4.5,
      price: 210,
      originalPrice: null,
      discount: null,
    },
    {
      id: 5,
      image: SleeveShirt,
      name: "Sleeve Striped T-shirt",
      rating: 4.5,
      price: 130,
      originalPrice: 160,
      discount: "-30%",
    },
    {
      id: 6,
      image: BlackShirt,
      name: "Polo T-shirt",
      rating: 4.0,
      price: 110,
      originalPrice: null,
      discount: null,
    },
  ];
  const visibleProducts = showAll ? products : products.slice(0, 4);
  return (
    <Section>
      <Title>Top Selling</Title>
      <CardsGrid>
        {visibleProducts.map((product) => (
          <ProductsCard key={product.id} {...product} />
        ))}
      </CardsGrid>
      <ViewAllButton onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Less" : "View All"}
      </ViewAllButton>
    </Section>
  );
};

export default TopSelling;
