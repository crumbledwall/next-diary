import Head from 'next/head'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Main from '@/components/Diary'

const Home = () => {
  return (
    <div className="container">
      <Head>
        <link rel="shortcut icon" href="logo.png"></link>
        <title>Kevin&apos;s Diary</title>
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Home
