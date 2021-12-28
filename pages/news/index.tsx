import { useUser } from '@auth0/nextjs-auth0'
import { PageContainer } from 'components/PagesContainer/styles'
import {
  LoginButton,
  PleaseLoginHeading,
  PleaseLogInWrapper,
} from 'components/PleaseLogIn/styled'
import { useRouter } from 'next/router'

const News: React.FC = () => {
  const { user, error, isLoading } = useUser()
  const router = useRouter()

  if (user) {
    return <p>Hello from news</p>
  }

  return (
    <PageContainer>
      <PleaseLogInWrapper>
        <PleaseLoginHeading>
          The page you are trying to access does not access or there are not
          enough permissions
        </PleaseLoginHeading>
        <LoginButton onClick={() => router.push('/register')}>
          Login
        </LoginButton>
      </PleaseLogInWrapper>
    </PageContainer>
  )
}

export default News
