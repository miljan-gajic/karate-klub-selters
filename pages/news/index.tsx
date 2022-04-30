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
    return (
      <div style={{ color: 'white' }}>
        <p>Hello from the News page</p>
        <div>
          <p>username: {user.nickname}</p>
          <p>email: {user.email}</p>
          <img src={user ? user?.picture! : ''} alt="" />
        </div>
      </div>
    )
  }

  return (
    <PageContainer>
      <PleaseLogInWrapper>
        <PleaseLoginHeading>
          The page you are trying to access does not exist or there are not
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
