import styled from 'styled-components'
import { Eye } from '@styled-icons/bootstrap/Eye'
import { EyeSlash } from '@styled-icons/bootstrap/EyeSlash'

export const RegisterPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const RegisterFormWrapper = styled.div`
  margin-top: -1rem;
  width: 500px;
  height: auto;
  padding: 4rem 3rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const StyledLabel = styled.label`
  position: relative;
  width: 100%;
  color: white;
  div {
    margin-bottom: 1.5rem;
  }
`

export const InputElementsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin-bottom: 2rem;

  &:hover {
    box-shadow: 1px 1px 1px thistle;
    border-radius: 8px;
  }
`

export const TextInput = styled.input`
  flex: 1 0;
  min-width: 100%;
  min-height: 25px;
  font-size: inherit;
  background-color: #fff;
  padding-left: 5px;
  border: 0;
  border-radius: 8px;
  &:focus {
    outline: none;
  }
`

export const LogoWrapper = styled.div`
  width: 100px;
  height: 100px;
  img {
    width: 100%;
    border: 1px solid #fff;
    border-radius: 50%;
  }
`

export const RegisterButton = styled.button`
  display: inline-block;
  align-self: center;
  outline: 0;
  appearance: none;
  padding: 0px 12px;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  background-color: rgb(249, 251, 250);
  border: 1px solid rgb(137, 151, 155);
  box-shadow: rgb(6 22 33 / 30%) 0px 1px 2px;
  color: rgb(61, 79, 88);
  font-size: 14px;
  font-weight: 400;
  height: 36px;
  transition: all 150ms ease-in-out 0s;
  &:hover {
    color: rgb(61, 79, 88);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(93, 108, 116);
    box-shadow: rgb(0 0 0 / 30%) 0px 2px 2px, rgb(231 238 236) 0px 0px 0px 2px;
  }
`

export const EyeRegister = styled(Eye)`
  color: #001529;
  position: absolute;
  right: 0.5rem;
  bottom: 0;
  cursor: pointer;
`
export const EyeSlashRegister = styled(EyeSlash)`
  color: #001529;
  position: absolute;
  right: 0.5rem;
  bottom: 0;
  cursor: pointer;
`
