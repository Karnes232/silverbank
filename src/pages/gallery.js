import * as React from "react"
import '../scss/main.scss'
import Navbar from "../components/Navbar"
import Gallery from "../components/Gallery"

// markup
const GalleryPage = () => {
  return (
    <main>
      <Navbar/>
      <Gallery/>

    </main>
  )
}

export default GalleryPage