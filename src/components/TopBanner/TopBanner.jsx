import { Banner,BannerText } from "../TopBanner/TopBanner.styles";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const TopBanner = () => {
  const[hideBanner, setHideBanner] = useState(false)
  if(hideBanner) return null;
  return (
   
    <Banner>
      <BannerText>
        <span>Sign up and get 20% off to your first order.</span>
        <Link to="/signup">Sign Up Now</Link>
      </BannerText>
      <div class="close-btn">
        <RxCross2 onClick={()=>setHideBanner(true)}/>
      </div>
    </Banner>
  );
};

export default TopBanner;
