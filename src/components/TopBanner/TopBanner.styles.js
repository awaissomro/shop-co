import styled from "styled-components";

export const Banner = styled.div`
  background-color: black;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items : center;
  position: relative;
  /* padding:5px; */
  padding: 10px 48px;

  span {
    font-size: 14px;
    ${"" /* font-family:'Satoshi'; */}
  }
  a {
    text-decoration: underline;
    font-size: 16px;
  }
  &:hover a {
    color: grey;
    text-decoration: underline;
  }
   .close-btn{
    position: absolute;
    right:16px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
export const BannerText = styled.div`
  background-color: black;
  color: #ffffff;
  display:flex;
  justify-content :center;
  align-items:center;
  gap:8px;
  flex-wrap: wrap;
  text-align: center;
  
  Link{
    /* text-decoration: underline; */
  }
`;

