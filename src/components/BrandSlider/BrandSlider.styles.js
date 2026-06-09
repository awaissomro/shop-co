import styled from "styled-components";

export const ImageCarousel = styled.div`
  background-color: #000000;
  padding: 28px 25px;

  img {
    height: 28px;
    width: auto;
    object-fit: contain;
    margin: 0 auto;
    filter: brightness(1);
  }

  .slick-track {
    display: flex;
    align-items: center;
  }
`;