import Link from 'next/link'
import { useRef } from 'react'

const Header = () => {
  const links = useRef()

  const changeNavState = () => {
    const linksElement = links.current
    linksElement.className === 'header-links' ? linksElement.className += ' header-links-show' : linksElement.className = 'header-links'
  }

  return (
    <header>
      <div className="header-navbar">
        <div className="header-title">
          <img className="logo" src="logo.png"></img>
          <div className="title-content">Kevin&apos;s Diary</div>
          <div className="header-menu-btn" onClick={changeNavState}>
            <img src="menu.svg"></img>
          </div>
        </div>
        <div className="header-links" ref={links}>
          <Link href="/">
            <a>DIARY</a>
          </Link>
          <Link href="/about">
            <a>ABOUT</a>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
