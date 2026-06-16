import styled from "styled-components";

export const Section = styled.section`
  background-color: #f0eeed;
  border-radius: 32px;
  padding: 48px 56px;
  max-width: 1240px;
  margin: 0 auto 60px auto;

  @media (max-width: 768px) {
    padding: 32px 20px;
    border-radius: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  color: #000;
  margin: 0 0 40px 0;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: 230px 230px; */
  gap: 20px;

  grid-template-areas:
    "casual formal formal"
    "party party gym";
    
     @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "casual"
      "formal"
      "party"
      "gym";
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const StyleCard = styled.div`
  /* grid-column: ${({ wide }) => (wide ? "1/2" : "2/3")}; */
  grid-area: ${({ area }) => area};
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  height: 220px;
  background-color: #fff;

  @media (max-width: 1024px) {
    height: 180px;
  }

  @media (max-width: 768px) {
    height: 160px;
  }

  @media (max-width: 480px) {
    height: 180px;
  }

  img {
   width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: right center;
  }

  &:hover img {
    transform: scale(1.04);
    transition: transform 0.3s ease;
  }
`;

export const CardLabel = styled.h3`
  position: absolute;
  top: 9px;
  left: 17px;
  font-size: 30px;
  font-weight: 700;
  color: #000;
  margin: 0;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
