import { useEffect, useState } from "react"

export const useWindowWidth = () => {
    const isBrowser = typeof window !== 'undefined'
    const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0)
  
    useEffect(() => {
      if (!isBrowser) return false
  
      const handleResize = () => setWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
  
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    })
  
    return width
  }

export const useWindowHeight = () => {
    const isBrowser = typeof window !== 'undefined'
    const [height, setHeight] = useState(isBrowser ? window.innerHeight : 0)
  
    useEffect(() => {
      if (!isBrowser) return false
  
      const handleResize = () => setHeight(window.innerHeight)
      window.addEventListener('resize', handleResize)
  
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    })
  
    return height
}