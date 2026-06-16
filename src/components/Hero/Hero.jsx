
// import {Link} from "react-router-dom"
import { Container } from "../../styles/Container.js";
import HeroImage from "../../assets/people.png";
import {
  HeroSection,
  HeroInner,
  HeroText,
  HeroTitle,
  HeroDescription,
  ShopButton,
  HeroStats,
  StatItem,
  StatDivider,
  HeroImageWrapper,
  StarLarge,
  StarSmall
} from "../Hero/Hero.styles.js";
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate()
  return (
    <HeroSection>
      
      <Container>
        <HeroInner>
          <HeroText>
            <HeroTitle>Find Clothes That Matches Your Style</HeroTitle>
            <HeroDescription>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense of style.
            </HeroDescription>
            <ShopButton onClick={()=>navigate("/newArrivals")}>Shop Now</ShopButton>
            {/* <Link to="/shop">Shop Now</Link> */}
            <HeroStats>
              <StatItem>
                <h3>200+</h3>
                <p>International Brands</p>
              </StatItem>
              <StatDivider />
              <StatItem>
                <h3>2,000+</h3>
                <p>High-Quality Products</p>
              </StatItem>
              <StatDivider />
              <StatItem>
                <h3>30,000+</h3>
                <p>Happy Customers</p>
              </StatItem>
            </HeroStats>
          </HeroText>

          <HeroImageWrapper>
            <img src={HeroImage} alt="Fashion models" />
          </HeroImageWrapper>
        </HeroInner>
      </Container>
      <StarLarge>✦</StarLarge>
      <StarSmall>✦</StarSmall>
    </HeroSection>
  );
};

export default Hero;