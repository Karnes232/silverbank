import * as React from "react"
import '../scss/main.scss'
import LazyLoad from 'react-lazyload';
import SEO from "../components/seo"
import Helment from 'react-helmet'
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import About from "../components/About"
import Boat from "../components/Boat"
import BoatInfo from "../components/BoatInfo"
import Packages from "../components/Packages"
import Tours from '../components/Tours'
import Contact from '../components/Contact'
import Popup from "../components/Popup"

// markup
const IndexPage = () => {
  return (
    <main>
      <Helment>
          <link rel="canonical" href="https://www.silverbankwhales.com/" />
          <meta name="google-site-verification" content="6C1VjAaC2hAZxjbi7ydNSMBeNrN1JlKtIcJDxum0jrs" />
      
      </Helment>
      <SEO title="Whale Watching" />
      <Navbar/>
      <Header/>
      <LazyLoad height={200} offset={50} once>
        <About/>
      </LazyLoad>
      <LazyLoad height={200} offset={50} once>
        <Boat/>
      </LazyLoad>
      <LazyLoad height={200} offset={50} once>
        <BoatInfo/>
      </LazyLoad>
      <LazyLoad height={200} offset={200} once>
        <Packages/>
      </LazyLoad>
      <LazyLoad height={200} offset={50} once>
        <Tours/>
      </LazyLoad>
      <LazyLoad height={200} offset={50} once>
        <Contact/>
      </LazyLoad>
      <LazyLoad height={200} offset={50} once>
        <Popup/>
      </LazyLoad>
    </main>
  )
}

export default IndexPage
