import React from "react";
import styled, { css } from "styled-components";
import macaroons from "../images/macaroons.jpeg";

const NavbarContainer = styled.div`
  text-align: center;
  background-color: black;
  color: white;
  height: 50px;
  display: flex;
`;

const Logo = styled.img`
  float: left;
  margin-right: 10px;
  width: 90px;
  border-radius: 50%;
  padding: 3px 4px;
`;

const NavbarLinks = styled.h1`
  color: white;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo alt={"logo"} src={macaroons} />
      <NavbarLinks>Home</NavbarLinks>
      <NavbarLinks>About</NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;
