import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
  burgerColorHover: "#E50914",
  logo,
  logoWidth: "20vmax",
  logoUrl: "/",
  navColor1: "white", // For background color change
  logoHoverSize: "10px",
  logoHoverColor: "#E50914",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Reselling",
  link4Text: "Contact",
  link5Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/resellings",
  link4Url: "/contact",
  link5Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "space-around",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  nav5justifyContent: "flex-start",
  link1ColorHover: "#E50914",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#E50914",
  searchIconColorHover: "#E50914",
  cartIconColorHover: "#E50914",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
