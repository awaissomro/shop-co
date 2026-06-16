// import styled from "styled-components";

// export const HeroSection = styled.section`
//   background-color: #f2f0f1;
//   overflow: hidden;
//   position: relative;
// `;

// export const HeroInner = styled.div`
//   display: flex;
//   flex-direction: row;
//   /* align-items: flex-end; */
//   align-items: stretch;
//   /* align-items: center; */
//   justify-content: space-between;
//   /* justify-content: center; */
//   min-height: 660px;
//   position: relative;

//   @media (max-width: 1024px) {
//     min-height: auto;
//     gap: 40px;
//   }

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//     /* min-height: unset; */
//     gap: 0;
//   }
// `;

// export const HeroText = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   /* gap: 16px; */
//   /* max-width: 550px; */
//   width: 100%;
//   max-width: 600px;
//   /* padding-top: 103px; */
//   /* padding-bottom: 116px; */
//   margin-top: 103px;
//   margin-bottom: 116px;
//   /* padding: 60px 0 40px 0; */
//   /* z-index: 2; */

//   @media (max-width: 1024px) {
//     max-width: 500px;
//     /* padding-top: 60px; */
//     margin-top: 60px;
//     margin-bottom: 60px;
//   }

//   @media (max-width: 768px) {
//     max-width: 100%;
//     /* padding: 40px 0 32px 0; */
//     /* padding-top: 40px;
//     padding-bottom: 30px; */
//     margin-top: 40px;
//     margin-bottom: 30px;
//     align-items: center;
//     text-align: center;
//   }
// `;

// export const HeroTitle = styled.h1`
//   /* font-size: 64px; */
//   line-height: 1;
//   font-family: "Integral CF", sans-serif;
//   text-transform: uppercase;
//   color: #000000;
//   font-size: clamp(36px, 5.5vw, 64px);
//   font-weight: 900;
//   /* line-height: 0.95; */
//   margin: 0 0 20px;
//   /* max-width: 580px; */
//   /* margin: 0; */
//   /* margin-bottom: 30px; */

//   @media (max-width: 1024px) {
//     font-size: 40px;
//   }

//   @media (max-width: 768px) {
//     font-size: 36px;
//     margin-bottom: 16px;
//   }
// `;

// export const HeroDescription = styled.p`
//   font-size: 16px;
//   line-height: 22px;
//   color: rgba(0, 0, 0, 0.6);
//   /* margin: 0; */
//   /* max-width: 540px; */
//   /* margin-bottom: 30px; */
//   margin: 0 0 32px;

//   @media (max-width: 768px) {
//     font-size: 14px;
//     max-width: 100%;
//     margin-bottom: 24px;
//   }
// `;

// export const ShopButton = styled.button`
//   background-color: #000000;
//   color: #ffffff;
//   border: none;
//   border-radius: 62px;
//   padding: 16px 54px;
//   font-size: 16px;
//   cursor: pointer;
//   width: 210px;
//   height: 52px;
//   transition: background-color 0.2s ease;
//   margin-bottom: 48px;

//   &:hover {
//     background-color: #333333;
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//     /* padding: 16px; */
//     max-width: 320px;
//     margin-bottom: 32px;
//   }
// `;

// export const HeroStats = styled.div`
//   display: flex;
//   flex-wrap: nowrap;
//   gap: 24px;
//   /* flex-direction: row; */
//   align-items: center;
//   /* gap: 0; */
//   /* margin-top: 8px; */

//   @media (max-width: 768px) {
//     justify-content: center;
//     width: 100%;
//   }

//   @media (max-width: 400px) {
//     flex-direction: column;
//     align-items: center;
//     gap: 16px;
//   }
// `;

// export const StatItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   /* gap: 4px; */
//   min-width: 120px;

//   h3 {
//     /* font-size: 40px; */
//     font-weight: 500;
//     color: #000000;
//     /* margin: 0; */
//     line-height: 1;
//     font-size: clamp(28px, 4vw, 40px);
//     margin: 0 0 8px;
//   }

//   p {
//     font-size: 14px;
//     color: rgba(0, 0, 0, 0.6);
//     margin: 0;
//     white-space: nowrap;
//   }

//   @media (max-width: 1024px) {
//     h3 {
//       font-size: 32px;
//     }
//   }

//   @media (max-width: 768px) {
//     h3 {
//       font-size: 28px;
//     }
//     p {
//       font-size: 12px;
//     }
//   }
// `;

// export const StatDivider = styled.div`
//   width: 1px;
//   height: 52px;
//   background-color: rgba(0, 0, 0, 0.1);
//   margin: 0 32px;

//   @media (max-width: 768px) {
//     margin: 0 24px;
//   }

//   @media (max-width: 400px) {
//     display: none;
//   }
// `;

// export const HeroImageWrapper = styled.div`
//   display: flex;
//   align-items: flex-end;
//   flex: 0 0 48%;
//   /* flex-shrink: 0;  */
//   /* width: 48%; */
//   min-width: 0;

//   img {
//     /* width: 500px; */
//     width: 100%;
//     max-width: 560px;
//     /* height: 560px; */
//     height: auto;
//     /* object-fit: cover; */
//     /* object-position: top center; */
//     display: block;
//   }

//   @media (max-width: 1024px) {
//     img {
//       max-height: 460px;
//       /* height: fit-content; */
//       object-fit: contain;
//     }
//   }

//   @media (max-width: 768px) {
//     flex:  0 0 auto;
//     width: 100%;
//     justify-content: center;

//     img {
//       /* width: 100%; */
//       max-height: 380px;
//       /* object-position: top center; */
//     }
//   }
// `;

// export const StarLarge = styled.span`
//   position: absolute;
//   /* top: 60px; */
//   top: 80px;
//   /* right: 120px; */
//   right: 8%;
//   width: 104px;
//   height: 104px;
//   font-size: 56px;
//   color: #000000;
//   /* line-height: 1; */
//   pointer-events: none;
//   z-index: 1;

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// export const StarSmall = styled.span`
//   position: absolute;
//   top: 320px;
//   left: 55%;
//   left: 55%;
//   font-size: 32px;
//   color: #000000;
//   line-height: 1;
//   pointer-events: none;
//   z-index: 1;

//   @media (max-width: 1024px) {  
//       left: 50%;
//       top: 280px;
    
//   }

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;


import styled from "styled-components";

export const HeroSection = styled.section`
  background-color: #f2f0f1;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const HeroInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  min-height: 550px;
  position: relative;
  width: 100%;

   /* @media (max-width: 1024px) {
    min-height: 360px;
  } */

  @media (max-width: 1024px) {
    min-height: 360px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: unset;
    gap: 0;
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 0 52%;
  max-width: 550px;
  max-width: 600px;
  padding-top: 50px;
  padding-bottom: 50px;
  z-index: 5;
  position: relative;
    @media (max-width: 1200px) {
    width: 50%;
    /* padding-top: 64px; */
    padding-bottom: 120px;
  }


  @media (max-width: 1024px) {
    flex: 0 0 50%;
    max-width: 50%;
    /* min-height: 460px; */
    /* padding-top: 80px; */
    /* padding-bottom: 50px; */
  }
  @media (max-width: 992px) {
    width: 50%;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media (max-width: 850px) {
    flex: 0 0 48%;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media (max-width: 768px) {
    flex: unset;
    width: 100%;
    max-width: 100%;
    padding-top: 40px;
    padding-bottom: 32px;
    align-items: center;
    text-align: center;
    /* gap: 10px; */
  }
`;

export const HeroTitle = styled.h1`
  line-height: 1.1;
  font-family: "Integral CF", sans-serif;
  text-transform: uppercase;
  color: #000000;
  font-size: clamp(36px, 5.5vw, 64px);
  font-weight: 900;
  margin: 0 0 20px;

   @media (max-width: 1200px) {
    font-size: 42px;
    font-weight: 700;
    line-height: 1;
  }


  @media (max-width: 1024px) {
    font-size: 32px;
    /* padding-bottom: 23px; */
  }

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 16px;
  }
   @media (max-width: 510px) {
    font-size: 32px;
  }
`;

export const HeroDescription = styled.p`
  font-size: 16px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.6);
  margin: 0 0 32px;
  max-width: 440px;

   @media (max-width: 1024px) {
    /* max-width: 100%; */
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0 16px;
  }
`;

export const ShopButton = styled.button`
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 62px;
  padding: 16px 54px;
  font-size: 16px;
  cursor: pointer;
  width: 210px;
  height: 52px;
  transition: background-color 0.2s ease;
  margin-bottom: 48px;

  &:hover {
    background-color: #333333;
  }
  @media (max-width:1200px) {
      margin-bottom: 33px;
  }
    @media (max-width: 992px) {
    width: 150px;
    font-size: 14px;
    padding: 9px 25px;
    /* max-width: 320px; */
    /* margin-bottom: 32px; */
  }


  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
    margin-bottom: 32px;
  }
`;

export const HeroStats = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

   @media (max-width: 1024px) {
    gap: 0;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    gap: 16px 16px;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: 500;
    color: #000000;
    line-height: 1;
    font-size: clamp(28px, 3.5vw, 40px);
    margin: 0 0 8px;
  }

  p {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
    margin: 0;
    white-space: nowrap;
  }

  @media (max-width: 1024px) {
    h3 {
      font-size: 30px;
    }
    p{
      font-size: 13px;
    }
  }

  @media (max-width: 768px) {
    align-items: center;
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 12px;
    }
  }
`;

export const StatDivider = styled.div`
  width: 1px;
  height: 52px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 0 32px;

  @media (max-width: 1024px) {
    margin: 0 20px;
  }

  @media (max-width: 768px) {
    height: 40px;
    margin: 0 20px;
       &:nth-of-type(2) {
      display: none;
  }
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

export const HeroImageWrapper = styled.div`   
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  z-index: 1;
  pointer-events: none;

  img {
    width: auto;
    height: 100%;
    max-height: 663px; 
    object-fit: contain;
    object-position: bottom right;
    display: block;
  }

  @media (max-width: 1200px) {
    width: 52%;
    img {
      max-height: 620px;
    }
  }

  @media (max-width: 1024px) {
    img {
      max-width: 500px;
    }
  }
  @media (max-width: 992px) {
    width: 50%;
    img {
      max-height: 440px;
    }
  }

  @media (max-width: 768px) {
    position: relative;
    flex: unset;
    right: auto;
    bottom: auto;
    width: 100%;
    max-width: 100%;
    height:auto;
    justify-content: center;
    margin-top: 20px;

    img {
      width: 100%;
      max-width: 450px;
      height: auto;
      max-height: unset;
      object-position: center;
    }
  }
`;

export const StarLarge = styled.span`
  position: absolute;
  top: 15%;
  right: 6%;
  font-size: clamp(44px, 5vw, 56px);
  color: #000000;
  pointer-events: none;
  z-index: 3;
  line-height: 1;
  @media (max-width: 1200px) {
    top: 10%;
    right: 4%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StarSmall = styled.span`
  position: absolute;
  left: 50%;
  top: 45%;
  font-size: clamp(24px, 3vw, 32px);
  color: #000000;
  line-height: 1;
  pointer-events: none;
  z-index: 3;

  @media (max-width: 1024px) {
    left: 48%;
  }
  @media (max-width: 992px) {
    left: 42%;
    top: 50%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;





