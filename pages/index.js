import Head from '@/components/Head'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Main from '@/components/Diary'

const Home = () => {
  return (
    <div className="container">
      <Head PageName="Kevin&apos;s Diary" />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Home
