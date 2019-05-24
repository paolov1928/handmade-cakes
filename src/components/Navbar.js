import React from "react"
import styled, { css } from "styled-components"
import macaroons from "../images/macaroons.jpeg"
import { Link } from "react-router-dom"

const NavbarContainer = styled.div`
  text-align: center;
  background-color: #3897f0;
  color: white;
  height: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 20px;
`

const Logo = styled.img`
  float: left;
  margin-right: 10px;
  width: 90px;
  height: 45px;
  border-radius: 50%;
  padding: 3px 4px;
  font-size: calc(10px + 2vmin);
`

const Title = styled.h3`
  color: white;
  margin: 1vh;
  font-family: cursive;
`
const LinkTitles = styled.a`
  color: white;
`

const NavbarLinks = styled.div`
  color: white;
  margin: 1vh;
`

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo alt={"logo"} src={macaroons} />
      <Title>Handmade Cakes by Effie</Title>
      <NavbarLinks>
        <Link to="/">
          <LinkTitles>Home</LinkTitles>
        </Link>{" "}
        <Link to="/About">
          <LinkTitles>About</LinkTitles>
        </Link>
      </NavbarLinks>
    </NavbarContainer>
  )
}

export default Navbar
