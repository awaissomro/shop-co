
import {Section,Title,Header,ArrowGroup,ArrowButton,CarouselWrapper,CarouselTrack,Card,RatingImage,CustomerName,Review} from "./Testimonials.styles.js"
import ratingImage from "../../assets/CustomersRating.png"
import { useState } from "react"
import checkCircle from "../../assets/checkCircle.png"
import { FaArrowLeftLong,FaArrowRight } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa6";




  const customers =  [
        {id:1,  name:"Sarah M.", review:"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."},
        {id:2,  name:"Alex K.", review:"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."},
        {id:3,  name:"James L.", review:"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."},
        {id:4, name: "Mood A.",   review: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends." },
        {id:5, name: "Lisa T.",   review: "Shop.co has completely changed how I shop for clothes online. The quality is outstanding and the customer service is top notch. I will definitely be a returning customer!" }
    ]
 const Testimonials = () => {

        const[index, setIndex] = useState(0);
        const maxIndex = customers.length-3;

    const handlePrev = () =>{
        setIndex ((prev)=> Math.max(prev-1,0) )
    }
    const handleNext = () => {
        setIndex((prev)=> Math.min(prev+1,maxIndex))
    }

  return (
 <Section>
      <Header>
        <Title>Our Happy Customers</Title>
        <ArrowGroup>
          <ArrowButton onClick={handlePrev} disabled={index === 0}><FaArrowLeftLong /></ArrowButton>
          <ArrowButton onClick={handleNext} disabled={index === maxIndex}><FaArrowRight /></ArrowButton>
        </ArrowGroup>
      </Header>

      <CarouselWrapper>
        <CarouselTrack index={index}>
          {customers.map((customer) => (
            <Card key={customer.id}>
              <RatingImage src={ratingImage} alt="rating" />
              <CustomerName>
                <h4>{customer.name}</h4>
                <img src={checkCircle} alt="checked circle"/>
              </CustomerName>
              <Review>"{customer.review}"</Review>
            </Card>
          ))}
        </CarouselTrack>
      </CarouselWrapper>
    </Section>
  );
};

export default Testimonials;

