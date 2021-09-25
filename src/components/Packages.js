import React from 'react'
import LazyLoad from 'react-lazyload';
import video from '../images/grandbay.mp4'

const Packages = () => {
    return (
        <section class="section-package u-margin-bottom-medium" id='tours'>
            <LazyLoad height={200} offset={200} once>
            <div class="bg-video">

                <video
                    className='bg-video__content'
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={video}
                >
                    <source src={video} type="video/mp4" />
                    Your device does not support playing 'video/mp4' videos
                </video>
            </div>
            </LazyLoad>
        </section>
    )
}

export default Packages
