import React, { useState } from 'react'
import * as S from './Form.styled'
import Button from '../common/Button/Button';

function Form() {

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false
  })

  const handleInputChange = (e, name) => {
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: e.target.value
    }))
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: false
    }))
  }

  const handleFormSubmit = e => {
    e.preventDefault();
    let valid = true;
    if (inputs.name === '') {
      setErrors(prevErrors => ({ ...prevErrors, name: true }));
      valid = false;
    }
    if (inputs.email === '') {
      setErrors(prevErrors => ({ ...prevErrors, email: true }))
      valid = false;
    }
    if (inputs.phone === '') {
      setErrors(prevErrors => ({ ...prevErrors, phone: true }))
      valid = false;
    }
    if (inputs.message === '') {
      setErrors(prevErrors => ({ ...prevErrors, message: true }))
      valid = false;
    }

    if (valid) {
      console.log('woohoo');
    }
  }

  return (
    <S.FormContainer
      onSubmit={(e) => handleFormSubmit(e)}
    >
      <S.Intro>
        <S.Title>Contact Us</S.Title>
        <S.Subtitle>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</S.Subtitle>
      </S.Intro>
      <S.Form>
        <S.InputGroup>
          <S.Input
            type="text"
            placeholder="Name"
            name="name"
            value={inputs.name}
            onChange={e => handleInputChange(e, "name")}
          />
          {
            errors.name && <S.InputError>Can't be empty</S.InputError>
          }
        </S.InputGroup>
        <S.InputGroup>
          <S.Input
            type="email"
            name="email"
            placeholder="Email address"
            value={inputs.email}
            onChange={e => handleInputChange(e, "email")}
          />
          {
            errors.email && <S.InputError>Can't be empty</S.InputError>
          }
        </S.InputGroup>
        <S.InputGroup>
          <S.Input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={inputs.phone}
            onChange={e => handleInputChange(e, "phone")}
          />
          {
            errors.phone && <S.InputError>Can't be empty</S.InputError>
          }
        </S.InputGroup>
        <S.InputGroup>
          <S.Input
            as="textarea"
            type="text"
            name="message"
            placeholder="Your Message"
            value={inputs.message}
            onChange={e => handleInputChange(e, "message")}
          />
          {
            errors.message && <S.InputError topAligned>Can't be empty</S.InputError>
          }
        </S.InputGroup>
        <Button
          type="submit"
          variation="white"
        >Submit</Button>
      </S.Form>
    </S.FormContainer>
  )
}

export default Form
