import styled from 'styled-components'

export const PleaseLogInWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 3rem;
  height: 100vh;
`

export const PleaseLoginHeading = styled.p`
  font-size: 2rem;
  color: #fff;
`

export const LoginButton = styled.button`
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
