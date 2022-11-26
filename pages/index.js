import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>포트폴리오</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="bg-red-300   text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}
