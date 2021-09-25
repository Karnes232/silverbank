import React from 'react'
import Composition from './Composition'
import image1 from '../images/boat2-desk.webp'
import image2 from '../images/boat3-desk.webp'
import image3 from '../images/boat4-desk.webp'

const BoatInfo = () => {
    return (
        <div class="row">
            <div class="col-1-of-2">
                <h3 class="heading-tertiary u-margin-bottom-small">On Board</h3>
                <p class="paragraph">Blue Sky offers guests a spacious open layout, with a/c for each of the 4 guest rooms. Accommodations include 2 cabins with queen beds, and 2 cabins with double and single berth.</p>

                <h3 class="heading-tertiary u-margin-bottom-small">Smaller more personalized service</h3>
                <p class="paragraph">Here is your chance to join us in a small group of upto a maximum of 10 clients per trip.
                </p>
            </div>
            <div class="col-1-of-2">
                <Composition image1={image1} image2={image2} image3={image3}/>
            </div>
        </div>
    )
}

export default BoatInfo
