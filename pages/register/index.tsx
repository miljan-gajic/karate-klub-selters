import React, { useRef, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { PageContainer } from 'components/PagesContainer/styles/styled'
import logo from 'public/images/kk_selters_logo_register.jpg'
import {
  RegisterPage,
  RegisterFormWrapper,
  StyledForm,
  InputElementsContainer,
  TextInput,
  StyledLabel,
  LogoWrapper,
  RegisterButton,
  EyeRegister,
  EyeSlashRegister,
} from 'components/Register/styled/styled'

const Register = () => {
  const [passwordShown, setPasswordShown] = useState(false)
  const [error, setError] = useState()
  const userNameRef = useRef<HTMLInputElement>()
  const passRef = useRef<HTMLInputElement>()

  const handleSubmit = (user, pass) => {
    console.log({ user, pass })
    axios
      .post('http://localhost:3000/api/users/login', {
        username: user,
        password: pass,
      })
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err)
      })
  }

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown)
  }

  return (
    <PageContainer>
      <RegisterPage>
        {/* {error && <div>{error}</div>} */}
        <LogoWrapper>
          <Image src={logo} alt="KK Selters Logo" />
        </LogoWrapper>
        <RegisterFormWrapper>
          <StyledForm
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit(userNameRef?.current?.value, passRef?.current?.value)
            }}
          >
            <InputElementsContainer>
              <StyledLabel>
                <div>Username : </div>
                <TextInput ref={userNameRef} />
              </StyledLabel>
            </InputElementsContainer>
            <InputElementsContainer>
              <StyledLabel>
                <div>Password : </div>
                <TextInput
                  type={passwordShown ? 'text' : 'password'}
                  ref={passRef}
                />
                {passwordShown ? (
                  <EyeSlashRegister
                    size="25"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <EyeRegister size="25" onClick={togglePasswordVisibility} />
                )}
              </StyledLabel>
            </InputElementsContainer>
            <RegisterButton type="submit">Register fool</RegisterButton>
          </StyledForm>
        </RegisterFormWrapper>
      </RegisterPage>
    </PageContainer>
  )
}

export default Register
