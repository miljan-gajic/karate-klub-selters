import { useUser } from '@auth0/nextjs-auth0'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Login from './login'
import News from './news'
import Register from './register'

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser()
  console.log(user)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <main className={styles.main}>{!user ? <Login /> : <News />}</main>
      </div>
    </div>
  )
}

export default Home
