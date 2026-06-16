import styled from "styled-components";


export const Logo = styled.h1`
    font-weight: 900;
    font-size: 32px;
    font-family: 'Integral CF', sans-serif;
    color: #000000;
    margin: 0;
    @media (max-width: 768px) {
    font-size: 24px; 
    flex-shrink: 0;
  }
`
export const NavBarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width:1440px;
    margin: 0 auto;
    padding-top: 15px;
    padding-bottom: 20px;
    gap: 40px;

   
  @media (max-width: 1024px) {
    padding: 20px 20px;
    gap: 10px;
  }

  @media (max-width: 768px) {
    padding: 16px 16px;
    gap: 12px;
  } 

` 
export const LogoutButton = styled.button`
  padding: 0.5rem 1.25rem;
  background: #111;
  color: #fff;
  border: none;
  border-radius: 62px;
  font-size: 0.95rem;
  font-weight: 600;
  font-family: "Satoshi", sans-serif;
  cursor: pointer;
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover {
    opacity: 0.8;
  }

`
export const LogInButton = styled.button`
  padding: 0.5rem 1.25rem;
  background: #111;
  color: #fff;
  border-radius: 62px;
  font-size: 0.95rem;
  font-weight: 600;
  font-family: "Satoshi", sans-serif;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.15s;
  flex-shrink: 0;

  &:hover {
    opacity: 0.8;
  }
`
export const NavLinksWrapper = styled.div`
  ul {
    display: flex;
    justify-content: center;
    gap: 24px;
    list-style: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    flex-wrap: nowrap;
    white-space: nowrap;
    flex-shrink: 0;
  }

  li {
    display: flex;
    align-items: center;
    position: relative;
    gap: 6px;
    /* font-family: "Satoshi"; */
  }

  a {
    text-decoration: none;
    color: #000000;
    font-size: 16px;
  }
  svg{
    width: 13px;
    position: relative;
    top: 2px;
  }

   

  @media (max-width: 900px) {
    display: none; 
  }
`;

export const DropDownArrow = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 180px;
  background: #fff;
  border-radius: 12px;
  padding: 10px 0;
  margin-top: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  z-index: 1000;

  display: flex;
  flex-direction: column;

  a {
    padding: 12px 18px;
    text-decoration: none;
    color: #000;
    font-size: 15px;
    transition: background 0.2s ease;
  }

  a:hover {
    background: #f5f5f5;
  }
`;



export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 62px;
  padding: 12px 16px;
  flex-grow: 1; 
  /* max-width: 600px;  */
  gap: 12px;
  position: relative;
  flex: 1 1 250px;
  min-width: 180px;
  /* flex-shrink: 1 1 250px; */
  max-width: 500px;

  svg {
    color: #000000;
    opacity: 0.4;
    width: 20px;
    height: 20px;

  }
  @media (max-width: 600px) {
    display: none; 
  }
`;
export const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  height:18px;
  font-size: 16px;
  color: #000000;

  &::placeholder {
    color: #000000;
    opacity: 0.4;
  }
`;
export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  cursor: pointer;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.05);
    }
  }
  .desktop-only{
    @media (max-width:900px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    gap: 16px; 
  }
`;

export const HamburgerButton = styled.div`
  display: none;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    transition: transform 0.25s ease;

  }
   &:hover svg {
    transform: scale(1.1);
  }

  
  @media (max-width: 900px) {
    display: block;
    order: -1; 
  }
`;
export const MobileSearchIcon = styled.div`
  display: none;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 600px) {
    display: block;
  }
`;  
export const MobileMenu = styled.div`
  display: none;
   @media (max-width: 900px) {
    /* display: ${({ $isOpen }) => ($isOpen ? "block" : "none")}; */
    display: block;
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    z-index: 999;
    padding: 20px;
    transition:
    opacity 0.3s ease,
    transform 0.3s ease,
    visibility 0.3s ease;
    backdrop-filter: blur(8px); 
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0)" : "translateY(-15px)"};
    visibility: ${({ $isOpen }) =>
    $isOpen ? "visible" : "hidden"};
    pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  

    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    a {
      font-size: 18px;
      font-weight: 500;
      color: #000000;
      text-decoration: none;
      display: block;
      width: 100%;
    }
  }
`;


export const SearchResultsDropdown = styled.ul`
  position: absolute;
  top: calc(100% + 8px); 
  left: 0;
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 20px; 
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  list-style: none;
  margin: 0;
  padding: 10px 0;
  z-index: 1100;
  max-height: 240px;
  overflow-y: auto;
  /* cursor: pointer; */

  li {
    width: 100%;
    padding: 5px 20px;
  }

  a {
    display: block;
    padding: 12px 20px;
    font-size: 15px;
    color: #000000;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #f5f5f5;
    }
  }

  .no-results {
    padding: 16px;
    color: #000000;
    opacity: 0.5;
    font-size: 14px;
    text-align: center;
  }
`;