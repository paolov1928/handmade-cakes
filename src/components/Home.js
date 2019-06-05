import React from "react"
import styled from "styled-components"
import Form from "./Form"
import InstagramEmbed from "react-instagram-embed"
import macaroons from "../images/macaroons.jpeg"
import weddingCake1 from "../images/wedding-cake-1.jpeg"
import Typography from "@material-ui/core/Typography"
import PricesTable from "./PricesTable"
const allText = require("../copy.js")

const BackgroundImage = styled.img`
  position: relative;
  margin: 0;
  width: 100%;
  height: 50vh;
  object-fit: cover;
  border: 2px solid #f5f5f5;
  border-radius: 5px;
`

const SecondImage = styled.img`
  position: relative;
  margin: 0;
  width: 50vw;
  height: auto;
  object-fit: cover;
  border: 2px solid #f5f5f5;
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
      <div className="fillerText scroll-gallery">
        <p>{allText.home.fillerGallery}</p>
      </div>
      <div className="introTextContainer">
        <TextNextToImage>
          {allText.home.typography.map((text, i) => (
            <p variant="body1" className="introText" key={i}>
              <b>{text}</b>
            </p>
          ))}
        </TextNextToImage>
        <SecondImage alt={"nice cake"} src={weddingCake1} />
      </div>
      <div className="fillerText scroll-insta">
        <p>{allText.home.fillerInsta}</p>
      </div>
      <div className="introTextContainer">
        <div className="instaContainer">
          <InstagramEmbed
            url="https://instagr.am/p/Zw9o4/"
            maxWidth={320}
            hideCaption={false}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </div>
      </div>
      <div className="fillerText scroll-prices">
        <p>{allText.home.fillerPrices}</p>
      </div>
      <div className="introTextContainer">
        <PricesTable />
      </div>
      <div className="fillerText scroll-form">
        <p>{allText.home.fillerForm}</p>
      </div>
      <div className="introTextContainer">
        <Form />
      </div>
    </React.Fragment>
  )
}

export default Home
