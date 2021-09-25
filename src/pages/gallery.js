import * as React from "react"
import '../scss/main.scss'
import SEO from "../components/seo"
import Navbar from "../components/Navbar"
import Gallery from "../components/Gallery"

// markup
const GalleryPage = () => {
  return (
    <main>
      <SEO title="Photo Gallery" />
      <Navbar/>
      <Gallery/>

    </main>
  )
}

export default GalleryPage