import React from "react"
import styled from "styled-components"
import Form from "./Form"
import InstagramEmbed from 'react-instagram-embed';
import macaroons from "../images/macaroons.jpeg"
import weddingCake1 from "../images/wedding-cake-1.jpeg"
import Typography from '@material-ui/core/Typography';

const BackgroundImage = styled.img`
  position: relative;
  margin: 0;
  width: 100%;
  height: 50vh;
  object-fit: cover;
  border: 2px solid #F5F5F5;
  border-radius: 5px;
`

const SecondImage = styled.img`
  position: relative;
  margin: 0;
  width: 50vw;
  height: auto;
  object-fit: cover;
  border: 2px solid #F5F5F5;
  border-radius: 5px;
`

const MacaroonContainer = styled.div`
  position: relative;
  margin-top: 5vh;
  margin-bottom: 5vh;

`

const TextNextToImage = styled.div`
  color: violet;
  text-align: left;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Home = () => {
  return (
    <React.Fragment>
      <MacaroonContainer>
        <BackgroundImage alt={"macaroons"} src={macaroons} />

      </MacaroonContainer>
      <div className='fillerText'>
      <p>Luxury Cake Baking for London and the surrounding area </p>
      </div>
      <div className='introTextContainer'>
        <TextNextToImage>
          <Typography variant="body1" className='introText' >
            <b>Personalised Cake Design for any occasion</b>
          </Typography>
          <Typography variant="body1" className='introText' >
            <b>Catering for Gluten & Dairy Free </b>
          </Typography>
          <Typography variant="body1" className='introText' >
            <b>Email to order and customise your perfect cake</b>
          </Typography>
          <Typography variant="body1" className='introText' >
            <b>London based</b>
          </Typography>
</TextNextToImage>
  <SecondImage alt={"nice cake"} src={weddingCake1}/>


      </div>
      <div className='fillerText'>
      <p>Check out the instagram feed for a showcase of the latest baking projects </p>
      </div>
      <div className='introTextContainer'>
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


</div>
      <Form />

    </React.Fragment>
  )
}

export default Home
