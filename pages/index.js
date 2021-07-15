import Head from 'next/head'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Main from '@/components/Main'

export default function Home () {
  return (
    <div className="container">
      <Head>
        <title>Kevin&apos;s Diary</title>
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
