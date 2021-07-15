const Header = () => {
  return (
    <header>
      <div className="header-title">
        <img className="logo" src="logo.png"></img>
        <div className="title-content">Kevin&apos;s Diary</div>
      </div>
      <div className="header-links">
        <a href="/">DIARY</a>
        <a href="/about">ABOUT</a>
      </div>
    </header>
  )
}

export default Header
