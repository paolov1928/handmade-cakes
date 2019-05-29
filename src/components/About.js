import React from "react"
import styled from "styled-components"
import EditableTable from "./EditableTable"

const Title = styled.h3`
  color: black;
  margin: 1vh;
  font-family: cursive;
`

const About = () => {
  return (
    <div>
      <Title>I am Effie the best baker in the whole of the 7 kingdoms</Title>
      <EditableTable />
    </div>
  )
}

export default About
