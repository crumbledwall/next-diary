import Head from 'next/head'

const PageHead = ({ PageName }) => {
  return (
        <Head>
            <link rel="shortcut icon" href="logo.png"></link>
            <meta name="viewport" content="width=device-width,
                initial-scale=1.0,
                maximum-scale=1.0,
                user-scalable=0" />
            <title>{PageName}</title>
        </Head>
  )
}

export default PageHead
