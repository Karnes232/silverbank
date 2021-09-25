import React from 'react'
import LazyLoad from 'react-lazyload';

const Boat = () => {
    return (
        <section className="section-boat u-margin-bottom-extra-big" id='boat'>
        <LazyLoad height={200} offset={50} once>
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-primary">
                    <span className="heading-primary--main heading-primary--main-boat">Blue Sky</span>
                </h2>
            </div>
        </LazyLoad>
        </section>
    )
}

export default Boat
