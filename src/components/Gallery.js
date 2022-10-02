import React, { useState, useEffect } from 'react'
import FsLightbox from 'fslightbox-react';
import PhotoAlbum from "react-photo-album";
import { items } from "../data/photoGalleryNew";

const slides = items.map(photo => {
    return photo.src
})

const Gallery = () => {
    const [toggler, setToggler] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    return (
        
        <>
        <PhotoAlbum 
            //layout="masonry" 
            layout="rows"
            // layout="columns"
            photos={items} 
            padding={1} 
            spacing={0}
            columns={2}
            componentsProps={{ imageProps: { loading: "lazy" } }}
            onClick={(event, photo, index) => {
                setToggler(!toggler)
                setPhotoIndex(index+1)
            }}
            />
            <FsLightbox
                toggler={toggler}
                sources={slides}
                slide={photoIndex}
            />
       
        </>
    )
}

export default Gallery
