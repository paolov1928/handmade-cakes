import React, { useState } from "react"
import styled, { css } from "styled-components"
import Dropdown from "./DropDown"
const allText = require("../copy.js")

const Button = styled.button`
  background: transparent;
  border-radius: 0.5em;
  border: 2px solid rgba(30, 13, 45, 0.03);
  color: white;
  margin-top: 5vh;
  padding: 1vh;
  display: block;
  min-width: 30vw;
  height: 3em;
  font-size: calc(10px + 2vmin);
  text-align: center;
  background: violet;
  width: 100%;
  max-width: 100%;
`

const Container = styled.div`
  text-align: left;
  margin: 5%;
`

const FormLabels = styled.p`
  color: violet;
  margin: 1vh;
  font-weight: bold;
  font-size: calc(12px + 3vmin);
`

const FormInput = styled.input`
  background: rgba(30, 13, 45, 0.03);
  height: 3em;
  min-width: 30vh;
  ${props =>
    props.larger &&
    css`
      height: 6em;
      min-width: 40vw;
    `}
`

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const { name, email, message } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <Container>
      <FormLabels>{allText.form.title}</FormLabels>
      <FormLabels>{allText.form.firstInput}</FormLabels>
      <FormInput
        type="text"
        name="name"
        value={name}
        onChange={e => onChange(e)}
      />
      <FormLabels>{allText.form.secondInput}</FormLabels>
      <FormInput
        type="email"
        name="email"
        value={email}
        onChange={e => onChange(e)}
      />
      <FormLabels>{allText.form.thirdInput}</FormLabels>
      <FormInput
        type="text"
        name="message"
        value={message}
        onChange={e => onChange(e)}
        larger
      />
      <FormLabels>{allText.form.fourthInput}</FormLabels>
      <Dropdown options={allText.dropdownArrays.drip} />
      <FormLabels>{allText.form.fifthInput}</FormLabels>
      <Dropdown options={allText.dropdownArrays.topping} />
      <FormLabels>{allText.form.sixthInput}</FormLabels>
      <Dropdown options={allText.dropdownArrays.base} />
      <Button
        onClick={() =>
          fetch("http://localhost:1337/cakes", {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          })
        }
      >
        <b>Submit</b>
      </Button>
    </Container>
  )
}

export default Form
