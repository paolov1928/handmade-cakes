import React from "react"
import styled, { css } from "styled-components"
import niceCake from "../images/nice-cake.jpeg"
import Form from "./Form"
import InstagramEmbed from 'react-instagram-embed';
import macaroons from "../images/macaroons.jpeg"

const BackgroundImage = styled.img`
  position: relative;
  margin: 0;
  width: 100%;
  height: 40vh;
  object-fit: cover;
`

const ImageAndTextContainer = styled.div`
  position: relative;
  margin: 0;
`

const TextOnImage = styled.h4`
  color: violet;
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  text-shadow: 2px 2px black;
  text-align: left;
`

const Home = () => {
  return (
    <React.Fragment>
      <ImageAndTextContainer>
        <BackgroundImage alt={"nice cake"} src={macaroons} />
        <TextOnImage>
            <p>Personalised Cake Design for any occasion
            </p><p> Catering for Gluten & Dairy Free
            </p> Email to order and customise your perfect cake
            <p> London based </p>
</TextOnImage>
      </ImageAndTextContainer>
      <div className='instaContainer'>
      <InstagramEmbed
  url='https://www.instagram.com/p/BxwcLFTnNIw/'
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
</div>
      <Form />

    </React.Fragment>
  )
}

export default Home
