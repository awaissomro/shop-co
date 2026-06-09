
import AutoPlay from "../components/BrandSlider/BrandSlider"
import BrowseByStyle from "../components/BrowseStyle/BrowseByStyle"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import NewArrival from "../components/NewArrivals/NewArrival"
import Testimonials from "../components/Testimonials/Testimonials"
import TopSelling from "../components/TopSelling/TopSelling"
const Home = () => {
  return (
    <>
        <Hero/>
            <AutoPlay/>
            <NewArrival/>
            <TopSelling/>
            <BrowseByStyle/>
            <Testimonials/>
            <Footer/>
    </>
  )
}

export default Home
