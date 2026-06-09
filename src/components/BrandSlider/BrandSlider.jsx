import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Versace from "../../assets/versace.png";
import Zara from "../../assets/zara-logo-1 1.png";
import Gucci from "../../assets/gucci-logo-1 1.png";
import Prada from "../../assets/prada-logo-1 1.png";
import Calvin from "../../assets/calvin.png";
import {ImageCarousel} from "./BrandSlider.styles";
const SliderComponent = Slider.default || Slider;



const AutoPlay = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 }
      }
    ]
  };

  return (
    <ImageCarousel>
      <SliderComponent {...settings}>
        <img src={Versace} alt="Versace" style={{ width: "100%", height: "auto" }} /> 
        <img src={Zara} alt="Zara" style={{ width: "100%", height: "auto" }} />
        <img src={Gucci} alt="Gucci" style={{ width: "100%", height: "auto" }}/>
        <img src={Prada} alt="Prada" style={{ width: "100%", height: "auto" }}/>
        <img src={Calvin} alt="Calvin" style={{ width: "100%", height: "auto" }}/>
      </SliderComponent>
    </ImageCarousel>
  );
}

export default AutoPlay;
