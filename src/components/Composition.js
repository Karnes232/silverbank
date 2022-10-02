import React from 'react'

const Composition = ({image1, image2, image3}) => {
    return (
        <div class="composition">
            <img 
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Whale Watching"
                class="composition__photo composition__photo--p1"
                src={image1}
            />
            <img 
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Whale Watching"
                class="composition__photo composition__photo--p2"
                src={image2}
            />
            <img 
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Whale Watching"
                class="composition__photo composition__photo--p3"
                src={image3}
            />
        </div>
    )
}

export default Composition
