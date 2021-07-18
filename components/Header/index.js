import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <div className="header-title">
        <img className="logo" src="logo.png"></img>
        <div className="title-content">Kevin&apos;s Diary</div>
      </div>
      <div className="header-links">
        <Link href="/">
          <a>DIARY</a>
        </Link>
        <Link href="/about">
          <a>ABOUT</a>
        </Link>
      </div>
    </header>
  )
}

export default Header
