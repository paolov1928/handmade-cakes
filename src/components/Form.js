import React, { useState } from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

const Container = styled.div`
  text-align: center;
`;

const FormLabels = styled.h3`
  color: white;
  margin: 1vh;
`;

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const { name, email, message } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Container>
      <FormLabels>Name (Required)</FormLabels>
      <input type="text" name="name" value={name} onChange={e => onChange(e)} />
      <FormLabels>Email (Required)</FormLabels>
      <input
        type="email"
        name="email"
        value={email}
        onChange={e => onChange(e)}
      />
      <FormLabels>Message (Required)</FormLabels>
      <input
        type="text"
        name="message"
        value={message}
        onChange={e => onChange(e)}
      />
      <Button primary>Submit</Button>
    </Container>
  );
};

export default Form;
