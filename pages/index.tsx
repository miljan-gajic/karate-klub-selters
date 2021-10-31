import Container from 'components/Layout/Container'
import Navigation from 'components/Layout/Navigation'
import { TestComponent } from 'components/TestComponent'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Navigation />
        <main className={styles.main}></main>
      </Container>
    </div>
  )
}

export default Home
