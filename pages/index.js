import Head from '@/components/Head'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Main from '@/components/Diary'
import DIARY from '@/diary.config'

const Home = () => {
  return (
    <div className="container">
      <Head PageName={ DIARY.siteName } />
      <Header />
      <Main page={1} />
      <Footer />
    </div>
  )
}

export default Home
