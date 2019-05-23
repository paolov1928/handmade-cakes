import React from "react"
import styled, { css } from "styled-components"
import niceCake from "../images/nice-cake.jpeg"

const BackgroundImage = styled.img`
  margin: 0;
  width: 100%;
  height: 40vh;
  object-fit: cover;
`

const ImageAndTextContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
`

const TextOnImage = styled.h1`
  color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Home = () => {
  return (
    <ImageAndTextContainer>
      <BackgroundImage alt={"nice cake"} src={niceCake} />
      <TextOnImage>Baking cakes in SW London</TextOnImage>
    </ImageAndTextContainer>
  )
}

export default Home
