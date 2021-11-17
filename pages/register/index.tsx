import { PageContainer } from 'components/PagesContainer/styles/styled'
import {
  RegisterPage,
  RegisterFormWrapper,
  StyledForm,
  InputElementsContainer,
  TextInput,
} from 'components/Register/styled/styled'
import React from 'react'

const Register = () => {
  return (
    <PageContainer>
      <RegisterPage>
        <RegisterFormWrapper>
          <StyledForm>
            <InputElementsContainer>
              <TextInput />
            </InputElementsContainer>
            <InputElementsContainer>
              <TextInput />
            </InputElementsContainer>
          </StyledForm>
        </RegisterFormWrapper>
      </RegisterPage>
    </PageContainer>
  )
}

export default Register
