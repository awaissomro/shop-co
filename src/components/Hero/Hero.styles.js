import styled from "styled-components";

export const HeroSection = styled.section`
  background-color: #f2f0f1;
  overflow: hidden;
  position: relative;
`;

export const HeroInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  min-height: 500px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    min-height: unset;
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 550px;
  padding: 60px 0 40px 0;
  z-index: 2;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 40px 0 32px 0;
    align-items: center;
    text-align: center;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 64px;
  font-weight: 900;
  line-height: 1;
  color: #000000;
  font-family: "Integral CF", sans-serif;
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 48px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const HeroDescription = styled.p`
  font-size: 16px;
  line-height: 22px;
  color: #00000099;
  margin: 0;
  max-width: 440px;

  @media (max-width: 768px) {
    font-size: 14px;
    max-width: 100%;
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
  width: fit-content;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #333333;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px;
  }
`;

export const HeroStats = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0;
  margin-top: 8px;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h3 {
    font-size: 40px;
    font-weight: 700;
    color: #000000;
    margin: 0;
    line-height: 1;
  }

  p {
    font-size: 14px;
    color: #00000099;
    margin: 0;
    white-space: nowrap;
  }

  @media (max-width: 1024px) {
    h3 { font-size: 32px; }
  }

  @media (max-width: 768px) {
    h3 { font-size: 28px; }
    p { font-size: 12px; }
  }
`;

export const StatDivider = styled.div`
  width: 1px;
  height: 52px;
  background-color: #0000001A;
  margin: 0 32px;

  @media (max-width: 768px) {
    margin: 0 16px;
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

export const HeroImageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-shrink: 0;

  img {
    width: 500px;
    height: 560px;
    object-fit: cover;
    object-position: top center;
    display: block;
  }

  @media (max-width: 1024px) {
    img {
      width: 380px;
      height: 460px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;

    img {
      width: 100%;
      height: 380px;
      object-position: top center;
    }
  }
`;

export const StarLarge = styled.span`
  position: absolute;
  top: 60px;
  right: 120px;
  font-size: 56px;
  color: #000000;
  line-height: 1;
  pointer-events: none;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StarSmall = styled.span`
  position: absolute;
  top: 260px;
  left: 46%;
  font-size: 32px;
  color: #000000;
  line-height: 1;
  pointer-events: none;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;