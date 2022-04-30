import React, { useRef, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { PageContainer } from 'components/PagesContainer/styles'
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
} from 'components/Register/styled'
import { useUser } from '@auth0/nextjs-auth0'
import { NextPage } from 'next'

const Register: NextPage = () => {
  const [passwordShown, setPasswordShown] = useState(false)
  const userNameRef = useRef<HTMLInputElement>()
  const passRef = useRef<HTMLInputElement>()
  const { user, error, isLoading } = useUser()

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown)
  }

  return (
    <PageContainer>
      <RegisterPage>
        {error && <div>{error}</div>}
        <LogoWrapper>
          <Image src={logo} alt="KK Selters Logo" />
        </LogoWrapper>
        <RegisterFormWrapper>
          <StyledForm
            onSubmit={(e) => {
              e.preventDefault()
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
            {/* <a style={{ color: 'white' }} href="/api/auth/login">
              Login
            </a> */}
            <RegisterButton type="submit">Register fool</RegisterButton>
          </StyledForm>
        </RegisterFormWrapper>
      </RegisterPage>
    </PageContainer>
  )
}

export default Register
