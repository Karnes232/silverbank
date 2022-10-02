import React from 'react'
import logo from '../images/icon.webp'

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo-box">
                <img src={logo} alt="Logo" className="header__logo"/>
            </div>
            <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">Silverbank</span>
                <span className="heading-primary--sub">snorkeling with humpback whales</span>
            </h1>

            <a href="#tours" className="btn btn--white btn--animated">Discover our tours</a>
            </div>
        </div>
    )
}

export default Header
