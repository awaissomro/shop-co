import styled from "styled-components";

export const Section = styled.section`
  padding: 50px 40px;
  max-width: 1240px;
  margin: 0 auto;
  /* overflow: hidden; */
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 900;
  text-transform: uppercase;
  color: #000;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const ArrowGroup = styled.div`
  display: flex;
  gap: 12px;
`;

export const ArrowButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #0000001a;
  background: transparent;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

export const CarouselWrapper = styled.div`
  overflow: hidden;        /* hides cards outside view */
`;

export const CarouselTrack = styled.div`
 display: flex;
  gap: 20px;
  transition: transform 0.4s ease;
  transform: ${({ index }) => `translateX(calc(-${index} * (320px + 20px)))`};
  width: max-content;   
`;

export const Card = styled.div`
  box-sizing: border-box;
  flex: 0 0 320px;
  border: 1px solid #0000001a;
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    min-width: 280px;
  }
`;

export const RatingImage = styled.img`
   width: 120px;
  height: auto;
  display: block; 
`;

export const CustomerName = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  h4 {
    font-size: 16px;
    font-weight: 700;
    color: #000;
    margin: 0;
  }

  span {
    color: green;
    font-size: 16px;
  }
`;

export const Review = styled.p`
  font-size: 14px;
  color: #00000099;
  line-height: 1.6;
  margin: 0;
`;