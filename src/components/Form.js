import React, { useState } from "react"
import styled, { css } from "styled-components"

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  display: block;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`

const Container = styled.div`
  text-align: left;
  margin: 10%;
`

const FormLabels = styled.h3`
  color: white;
  margin: 1vh;
`

const FormInput = styled.input`
  background: palevioletred;
  ${props =>
    props.larger &&
    css`
      height: 10vh;
      width: 40vw;
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
