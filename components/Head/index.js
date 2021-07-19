import Head from 'next/head'

const PageHead = ({ PageName }) => {
  return (
    <Head>
      <meta charset="UTF-8" />
      <meta httpEquiv="x-dns-prefetch-control " content="on" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge, chrome=1" />
      <link rel="shortcut icon" href="logo.png" />
      <meta name="viewport" content="width=device-width,
        initial-scale=1.0,
        maximum-scale=1.0,
        user-scalable=0" />
      <meta name="description" content="Kevin&apos;s diary" />
      <meta property="og:title" content="Kevin&apos;s diary" />
      <meta property="og:type" content="Website" />
      <meta property="og:url" content="https://diary.harmless.blue/" />
      <meta property="og:image" content="logo.png" />
      <meta property="og:description" content="Kevin&apos;s diary" />
      <meta name="twitter:card" content="summary" />
      <link rel="canonical" href="https://diary.harmless.blue/" />
      <title>{PageName}</title>
    </Head>
  )
}

export default PageHead
