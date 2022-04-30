import {
  LoginButton,
  PleaseLoginHeading,
  PleaseLogInWrapper,
} from 'components/PleaseLogIn/styled'
import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { PageContainer } from 'components/PagesContainer/styles'
import { useUser } from '@auth0/nextjs-auth0'

const Login: NextPage = () => {
  const router = useRouter()
  const { user, error, isLoading } = useUser()

  const redirectToLogin = () => {
    return router.push('/api/auth/login')
  }

  console.log('ERROR', error)
  return (
    <PageContainer>
      <PleaseLogInWrapper>
        <PleaseLoginHeading>Please log in to continue</PleaseLoginHeading>
        <LoginButton onClick={redirectToLogin}>Log in</LoginButton>
      </PleaseLogInWrapper>
    </PageContainer>
  )
}

export default Login
