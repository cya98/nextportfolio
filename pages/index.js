import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/home/hero'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>포트폴리오</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </Layout>
  )
}
