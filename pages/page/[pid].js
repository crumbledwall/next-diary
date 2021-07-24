import Head from '@/components/Head'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Main from '@/components/Diary'
import DIARY from '@/diary.config'
import { useRouter } from 'next/router'

const Page = () => {
  const router = useRouter()
  const { pid } = router.query
  return (
    <div className="container">
      <Head PageName={ DIARY.siteName } />
      <Header />
      <Main page={ pid } />
      <Footer />
    </div>
  )
}

export default Page
