import React, { useState } from "react"

const Navbar = () => {

  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <div className="navigation">
           
            <button
              className={isOpen ? "navigation__button navigation__button-open" : "navigation__button"}
              type="button"
              onClick={toggleNav}
              onKeyDown={toggleNav}
              aria-label="Menu Button"
            >
              <span className="navigation__icon">&nbsp;</span>
            </button>
            
            <div className={isOpen ? "navigation__background navigation__background-open" : "navigation__background"}>&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                <li>
                    <button className="navigation__item" onClick={toggleNav} onKeyDown={toggleNav}><a href="/#about" className="navigation__link"><span>01</span>About Silverbank</a></button></li>
                 <li>   <button className="navigation__item" onClick={toggleNav} onKeyDown={toggleNav}><a href="/#boat" className="navigation__link"><span>02</span>Our Boat</a></button></li>
                  <li>  <button className="navigation__item" onClick={toggleNav} onKeyDown={toggleNav}><a href="/#tours" className="navigation__link"><span>03</span>Tours</a></button></li>
                 <li>   <button className="navigation__item" onClick={toggleNav} onKeyDown={toggleNav}><a href="/gallery" className="navigation__link"><span>04</span>Photo Gallery</a></button></li>
                 <li>   <button className="navigation__item" onClick={toggleNav} onKeyDown={toggleNav}><a href="/#contact" className="navigation__link"><span>05</span>Contact Us</a></button></li>
                </ul>
            </nav>
    </div>
  )
}


export default Navbar
