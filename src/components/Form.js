import React, { useState } from "react"
import styled, { css } from "styled-components"

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #3897f0;
  color: #3897f0;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  display: block;

  ${props =>
    props.primary &&
    css`
      background: #3897f0;
      color: white;
    `}
`

const Container = styled.div`
  text-align: left;
  margin: 5%;
`

const FormLabels = styled.h4`
  color: white;
  margin: 1vh;
`

const FormInput = styled.input`
  background: #3897f0;
  height: 5vh;
  width: 30vh;
  ${props =>
    props.larger &&
    css`
      height: 10vh;
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
      <FormLabels>Please use the form to make an order!</FormLabels>
      <FormLabels>Name (Required)</FormLabels>
      <FormInput
        type="text"
        name="name"
        value={name}
        onChange={e => onChange(e)}
      />
      <FormLabels>Email (Required)</FormLabels>
      <FormInput
        type="email"
        name="email"
        value={email}
        onChange={e => onChange(e)}
      />
      <FormLabels>Message (Required)</FormLabels>
      <FormInput
        type="text"
        name="message"
        value={message}
        onChange={e => onChange(e)}
        larger
      />
      <Button primary>Submit</Button>
    </Container>
  )
}

export default Form
