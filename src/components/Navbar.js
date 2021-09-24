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
              aria-label="Menu Button"
            >
              <span className="navigation__icon">&nbsp;</span>
            </button>
            
            <div className={isOpen ? "navigation__background navigation__background-open" : "navigation__background"}>&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item" onClick={toggleNav}><a href="/#about" class="navigation__link"><span>01</span>About Silverbank</a></li>
                    <li className="navigation__item" onClick={toggleNav}><a href="/#boat" class="navigation__link"><span>02</span>Our Boat</a></li>
                    <li className="navigation__item" onClick={toggleNav}><a href="/#tours" class="navigation__link"><span>03</span>Tours</a></li>
                    <li className="navigation__item" onClick={toggleNav}><a href="/gallery" class="navigation__link"><span>04</span>Photo Gallery</a></li>
                    <li className="navigation__item" onClick={toggleNav}><a href="/#contact" class="navigation__link"><span>05</span>Contact Us</a></li>
                </ul>
            </nav>
    </div>
  )
}


export default Navbar
