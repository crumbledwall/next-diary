import Head from 'next/head'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import AboutCard from '@/components/About'

const About = () => {
  return (
    <div className="container">
      <Head>
        <link rel="shortcut icon" href="logo.png"></link>
        <title>About</title>
      </Head>
      <Header />
      <AboutCard />
      <Footer />
    </div>
  )
}

export default About
