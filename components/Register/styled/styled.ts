import React from 'react'
import styled from 'styled-components'

export const RegisterPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const RegisterFormWrapper = styled.div`
  width: 500px;
  height: auto;
  padding: 2rem 3rem;
`

export const StyledForm = styled.form`
  width: 100%;
`

export const InputElementsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid;
  border-radius: 5px;
  &:hover {
    box-shadow: 1px 1px 1px thistle;
  }
`

export const TextInput = styled.input`
  flex: 1 0;
  min-width: 50px;
  min-height: 25px;
  font-size: inherit;
  background-color: transparent;
  padding-left: 5px;
  border: 0;
  background: #fff;
  &:focus {
    outline: none;
  }
`
