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
  font-size: calc(8px + 2vmin);
  text-align: center;
  background: #f1be5e8a;
  width: 100%;
  max-width: 100%;
`

const Container = styled.div`
  text-align: center;
  margin: 5%;
`
const FormTitle = styled.p`
  color: #f1be5e8a;
  margin: 1vh;
  margin-bottom: 2vh;
  font-weight: bold;
  font-size: calc(4px + 3vmin);
`

const FormLabels = styled.p`
  color: #f1be5e8a;
  margin: 1vh;
  font-weight: bold;
  font-size: calc(4px + 3vmin);
`

const FormInput = styled.input`
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  height: 3em;
  min-width: 30vh;
  ${props =>
    props.larger &&
    css`
      height: 5.5em;
      min-width: 40vw;
    `}
`

const FormMessageInput = styled.textarea`
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  height: 5.5em;
  min-width: 40vw;
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
      <FormTitle>{allText.form.title}</FormTitle>
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
      <FormMessageInput
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
