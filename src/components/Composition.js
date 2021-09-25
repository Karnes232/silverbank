import React from 'react'
import LazyLoad from 'react-lazyload';


const Composition = ({image1, image2, image3}) => {
    return (
        <div class="composition">
            <LazyLoad height={200} offset={50} once>
            <img 
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Photo 1"
                class="composition__photo composition__photo--p1"
                src={image1}
            />
            <img 
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Photo 2"
                class="composition__photo composition__photo--p2"
                src={image2}
            />
            <img 
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Photo 3"
                class="composition__photo composition__photo--p3"
                src={image3}
            />
            </LazyLoad>
        </div>
    )
}

export default Composition
