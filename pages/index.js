import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kevin's Diary</title>
      </Head>

      <header>
        <div className="header-title">
          <img className="logo" src="logo.png"></img>
          <div className="title-content">Kevin's Diary</div>
        </div>
        <div className="header-links">
          <a href="/">Diary</a>
          <a href="/about">About</a>
        </div>
      </header>

      <main></main>

      <footer>
        <div className="footer">2021 © Kevin</div>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #0d0d0d;
        }

        header {
          background: #1c1c1e;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 4rem;
        }

        .header-title {
          display: flex;
          align-items: center;
          max-width: 750px;
          width: 100%;
          font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          font-style: normal;
          font-weight: 600;
          color: inherit;
          text-rendering: optimizeLegibility;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .title-content {
          margin: 0;
          line-height: 1.15;
          font-size: 2rem;
          color: #fff;
        }

        .logo {
          width: 4rem;
        }

        .header-links a {
          text-decoration: none;
          color: #fff;
          margin-right: 1.5rem;
          line-height: 1.15;
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .header-links a:hover {
          color: #822828;
        }

        .footer {
          color: #fff;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background: #0d0d0d;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
