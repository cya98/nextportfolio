import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Hero from '../components/home/hero'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>프로젝트</title>
        <meta name="description" content="project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>프로젝트</h1>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex py-24 md:flex-row flex-col items-center"></div>
      </section>
    </Layout>
  )
}
