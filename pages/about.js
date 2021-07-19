import Head from '@/components/Head'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import AboutCard from '@/components/About'

const About = () => {
  return (
    <div className="container">
      <Head PageName="About" />
      <Header />
      <AboutCard />
      <Footer />
    </div>
  )
}

export default About
