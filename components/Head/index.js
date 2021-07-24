import Head from 'next/head'
import DIARY from '@/diary.config'

const PageHead = ({ PageName }) => {
  return (
    <Head>
      <meta httpEquiv="x-dns-prefetch-control " content="on" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge, chrome=1" />
      <link rel="shortcut icon" href="logo.png" />
      <meta name="viewport" content="width=device-width,
        initial-scale=1.0,
        maximum-scale=1.0,
        user-scalable=0" />
      <meta name="description" content={ DIARY.siteName } />
      <meta property="og:title" content={ DIARY.siteName } />
      <meta property="og:type" content="Website" />
      <meta property="og:url" content={ DIARY.link } />
      <meta property="og:image" content="logo.png" />
      <meta property="og:description" content={ DIARY.siteName } />
      <meta name="twitter:card" content="summary" />
      <link rel="canonical" href={ DIARY.link } />
      <title>{PageName}</title>
    </Head>
  )
}

export default PageHead
