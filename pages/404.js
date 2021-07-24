import Head from '@/components/Head'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NotFound from '@/components/NotFound'

const NotFoundPage = () => {
  return (
    <div className="container">
      <Head PageName="Page Not Found" />
      <Header />
      <NotFound />
      <Footer />
    </div>
  )
}

export default NotFoundPage
