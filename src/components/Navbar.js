import React from "react"

const Navbar = () => {
  const checkbox = document.querySelector('.navigation__checkbox')

  const toggleNav = () => {
    checkbox.checked = false
  }

  return (
    <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
            <label for="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

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
