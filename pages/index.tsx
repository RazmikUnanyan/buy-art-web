import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home():JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>buyArt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
