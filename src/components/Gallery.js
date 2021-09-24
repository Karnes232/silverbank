import React from 'react'
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';
import { items } from "../data/photoGallery";
import { useWindowHeight, useWindowWidth } from '../data/windowDimensions';

const Gallery = () => {
    

    // The options of the gallery (from the playground current state)
    const options = {
        galleryLayout: 0,
    };
      
    // The size of the gallery container. The images will fit themselves in it
    const container = {
        width: useWindowWidth(),
        height: useWindowHeight()
    };
      
    // The eventsListener will notify you anytime something has happened in the gallery.
    const eventsListener = (eventName, eventData) => console.log({eventName, eventData}); 
      
    // The scrollingElement is usually the window, if you are scrolling inside another element, supply it here

    
    return (
        <ProGallery
            items={items}
            options={options}
            container={container}
            eventsListener={eventsListener}
        />
    )
}

export default Gallery
