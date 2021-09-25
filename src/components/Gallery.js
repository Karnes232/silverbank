import React from 'react'
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';
//import { items } from "../data/photoGallery";
import { useWindowHeight, useWindowWidth } from '../data/windowDimensions';
import nextId from "react-id-generator";
const Gallery = () => {
    //"pro-gallery": "^3.1.38"

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
    //const eventsListener = (eventName, eventData) => console.log({eventName, eventData}); 
      
    // The scrollingElement is usually the window, if you are scrolling inside another element, supply it here

    const items = [
        { // Image Item:
          itemId: nextId(),
          mediaUrl: 'https://i.ibb.co/NL5c439/IMG-8190.jpg',
          metaData: {
            type: 'image',
            height: 1,
            width: 2,
          }
        },
        { 
          itemId: nextId(),
          mediaUrl: 'https://i.ibb.co/tbXw0N6/IMG-8187.jpg',
          metaData: {
            type: 'image',
            height: 1,
            width: 2,
          }
        },
        {
          itemId: nextId(),
          mediaUrl: 'https://i.ibb.co/QY18cxX/IMG-8172.jpg',
          metaData: {
            type: 'image',
            height: 1,
            width: 2,
          }
        },
        {
          itemId: nextId(),
          mediaUrl: 'https://i.ibb.co/g47KJnx/IMG-8162.jpg',
          metaData: {
            type: 'image',
            height: 1,
            width: 2,
          }
        }]

    
    return (
        <ProGallery
            items={items}
            options={options}
            container={container}
            //eventsListener={eventsListener}
            scrollingElement={() => document.getElementById('pro-gallery-default-dom-id') || window}
            className="gallery"
        />
    )
}

export default Gallery
