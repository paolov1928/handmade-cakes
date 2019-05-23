import React from "react"
import styled, { css } from "styled-components"
import macaroons from "../images/macaroons.jpeg"

const NavbarContainer = styled.div`
  text-align: center;
  background-color: #4b0082;
  color: white;
  height: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
`

const Logo = styled.img`
  float: left;
  margin-right: 10px;
  width: 90px;
  height: 45px;
  border-radius: 50%;
  padding: 3px 4px;
`

const Title = styled.h1`
  color: white;
  margin: 1vh;
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
      <NavbarLinks>Home About</NavbarLinks>
    </NavbarContainer>
  )
}

export default Navbar
