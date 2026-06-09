import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 40px;
  gap: 32px;
  max-width: 1240px;
  margin: 0 auto;
  border-bottom: 1px solid #0000001a;
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 900;
  text-transform: uppercase;
  color: #000;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;

  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 480px)  { grid-template-columns: repeat(1, 1fr); }
`;

export const ViewAllButton = styled.button`
  border: 1px solid #00000033;
  background-color: transparent;
  border-radius: 62px;
  padding: 14px 54px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover { background-color: #000; color: #fff; }

  @media (max-width: 768px) { width: 100%; padding: 16px; }
`;