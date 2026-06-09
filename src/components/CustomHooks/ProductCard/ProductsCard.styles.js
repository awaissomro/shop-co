import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
`;

export const CardImage = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background-color: #f0eeed;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 20px;
  }
`;

export const CardName = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: #000;
  margin: 0;
`;

export const CardRating = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  img { height: 16px; width: auto; }
  span { font-size: 13px; color: #00000099; }
`;

export const CardPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h3 { font-size: 20px; font-weight: 700; color: #000; margin: 0; }

  .originalPrice {
    font-size: 20px;
    font-weight: 700;
    color: #00000033;
    text-decoration: line-through;
    margin: 0;
  }

  .discount {
    font-size: 12px;
    color: #ff3333;
    background-color: #ffebeb;
    padding: 4px 10px;
    border-radius: 20px;
  }
`;