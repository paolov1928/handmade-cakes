import React, { useState } from "react"
import styled, { css } from "styled-components"

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid rgba(30, 13, 45, 0.03);
  color: white;
  margin-top: 1vh;
  padding: 1vh;
  display: block;
  min-width: 30vw;
  height: 5vh;
  font-size: calc(10px + 2vmin);
  text-align: left;
  background: violet;
`

const Container = styled.div`
  text-align: left;
  margin: 5%;
`

const FormLabels = styled.h4`
  color: violet;
  margin: 1vh;
`

const FormInput = styled.input`
  background: rgba(30, 13, 45, 0.03);
  height: 5vh;
  min-width: 30vh;
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
