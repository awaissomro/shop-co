import { Link } from "react-router-dom";
import { Container } from "../../styles/Container.js";
import {
  NavBarContainer,
  SearchWrapper,
  SearchInput,
  Logo,
  IconsWrapper,
  HamburgerButton,
  NavLinksWrapper,
  MobileMenu,
  DropDownArrow,
  SearchResultsDropdown
} from "../Navbar/NavBar.styles.js";
import { SlArrowDown } from "react-icons/sl";

import { useState } from "react";
import {newArrivals,topSelling} from "../../data/product.js"
import { LogoutButton, LogInButton } from "../Navbar/NavBar.styles.js";



const Nav_links = [
  {label:"Shop", path: "/"},
  {label:"OnSale", path:"/onSale"},
  {label:"NewArrivals", path:"/newArrivals"},
  {label:"Brands", path:"/brands"}
]
const Navbar = ({isLoggedIn,onLogout}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [showDropDown,setShwoDropDown] = useState(false)

  const[searchTerm, setSearchTerm] = useState("");

  const allProducts = [...newArrivals, ...topSelling]

  const filteredProducts = allProducts.filter((product)=>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div style={{position:"relative"}}>
    
    <Container>
    <NavBarContainer>
    {
        isLoggedIn ? (
          <LogoutButton onClick={onLogout} >Logout</LogoutButton>
        ):(
          <LogInButton to="/signup">Login</LogInButton>
        )
      }
      <HamburgerButton onClick={() => setMenuOpen(!menuOpen)}>
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
         
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          )}
        </svg>
      </HamburgerButton>
      <Logo>SHOP.CO</Logo>
      <NavLinksWrapper>
        <ul>
          <li>
            <Link to="/">Shop</Link>
            <SlArrowDown onClick={()=>setShwoDropDown(prev=>!prev)} />
              {
                showDropDown&&(
                  <DropDownArrow>
                    <Link to="/men" >Men</Link>
                    <Link to="/women" >Women</Link>
                    <Link to="/accessories" >Accessories</Link>
                  </DropDownArrow>
                )
              }
          </li>
          <li>
            <Link to="/onSale">On Sale</Link>
          </li>
          <li>
            <Link to="/newArrivals">New Arrivals</Link>
          </li>
          <li>
            <Link to="/brands">Brands</Link>
          </li>
        </ul>
      </NavLinksWrapper>
      <SearchWrapper>
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <SearchInput type="text" placeholder="Search for products..."  value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} />
        {searchTerm !== "" && (
          <SearchResultsDropdown>
            {filteredProducts.length>0 ?(
              filteredProducts.map((product)=>(
                <li key={product.id} >
                <Link to={`/product/${product.slug}`} onClick={()=>setSearchTerm("")} >

                {product.name}
                </Link>
                </li>
               
              ))
            ):(
              <li>no products found</li>
            )}
          </SearchResultsDropdown>
        )}
      </SearchWrapper>
      <IconsWrapper>
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>

        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          ></path>
        </svg>
      </IconsWrapper>
      
    </NavBarContainer>
    
     </Container>
      <MobileMenu $isOpen={menuOpen}>
        <ul>
          {Nav_links.map((link)=>(
            <li key={link.path} ><Link to={link.path} onClick={()=>setMenuOpen(false)}>{link.label}</Link> </li>
          ))}
        </ul>
      </MobileMenu>
      

 </div>
  );
};

export default Navbar;
