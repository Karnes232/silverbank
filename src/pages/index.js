import * as React from "react"
import '../scss/main.scss'
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
