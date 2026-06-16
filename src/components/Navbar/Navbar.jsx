import { Link, useLocation } from "react-router-dom";
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
  SearchResultsDropdown,
} from "../Navbar/NavBar.styles.js";
import { SlArrowDown } from "react-icons/sl";
import { FiShoppingCart } from "react-icons/fi";
import { PiUserCircleBold } from "react-icons/pi";
import { LogoutButton, LogInButton } from "../Navbar/NavBar.styles.js";

import { useState } from "react";
import { newArrivals, topSelling } from "../../data/product.js";

const Nav_links = [
  { label: "Shop", path: "/" },
  { label: "OnSale", path: "/onSale" },
  { label: "NewArrivals", path: "/newArrivals" },
  { label: "Brands", path: "/brands" },
];
const Navbar = ({ isLoggedIn, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [showDropDown, setShwoDropDown] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const allProducts = [...newArrivals, ...topSelling];

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const location = useLocation();
  console.log(location.pathname);

  const hideAuthButtons = ["/signin", "/signup"].includes(
    location.pathname.toLowerCase(),
  );

  return (
    <div style={{ position: "relative" }}>
      <Container>
        <NavBarContainer>
          <HamburgerButton onClick={() => setMenuOpen(!menuOpen)}>
            {/* <svg
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
          </svg> */}
            <svg viewBox="0 0 24 24">
              <path
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </HamburgerButton>
          <Logo>SHOP.CO</Logo>
          <NavLinksWrapper>
            <ul>
              <li>
                <Link to="/">Shop</Link>
                <SlArrowDown onClick={() => setShwoDropDown((prev) => !prev)} />
                {showDropDown && (
                  <DropDownArrow>
                    <Link to="/men">Men</Link>
                    <Link to="/women">Women</Link>
                    <Link to="/accessories">Accessories</Link>
                  </DropDownArrow>
                )}
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
            <SearchInput
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm !== "" && (
              <SearchResultsDropdown>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <li key={product.id}>
                      <Link
                        to={`/product/${product.slug}`}
                        onClick={() => setSearchTerm("")}
                      >
                        {product.name}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>no products found</li>
                )}
              </SearchResultsDropdown>
            )}
          </SearchWrapper>
          <IconsWrapper>
            <FiShoppingCart />
            <PiUserCircleBold />
            {isLoggedIn ? (
              <LogoutButton onClick={onLogout} className="desktop-only">
                Logout
              </LogoutButton>
            ) : (
              !hideAuthButtons && (
                <LogInButton className="desktop-only" to="/signin">
                  Login
                </LogInButton>
              )
            )}
          </IconsWrapper>
        </NavBarContainer>
      </Container>
      <MobileMenu $isOpen={menuOpen}>
        <ul>
          {Nav_links.map((link) => (
            <li key={link.path}>
              <Link to={link.path} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>{" "}
            </li>
          ))}

          {isLoggedIn ? (
            <li>
              <LogoutButton
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  textAlign: "left",
                  background: "none",
                  color: "#000",
                  padding: "0",
                  fontWeight: 500,
                  fontSize: "18px",
                }}
                onClick={() => {
                  onLogout();
                  setMenuOpen(false);
                }}
              >
                Logout
              </LogoutButton>
            </li>
          ) : (
            !hideAuthButtons && (
              <li>
                <Link to="/signin" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
              </li>
            )
          )}
        </ul>
      </MobileMenu>
    </div>
  );
};

export default Navbar;
