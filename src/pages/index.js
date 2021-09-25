import * as React from "react"
import '../scss/main.scss'
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
      <About/>
      <Boat/>
      <BoatInfo/>
      <Packages/>
      <Tours/>
      <Contact/>
    </main>
  )
}

export default IndexPage
