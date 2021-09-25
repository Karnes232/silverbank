import React from 'react'
import image4 from '../images/image4.webp'
import image7 from '../images/image7.webp'
 
const Popup = () => {
    return (
        <div class="popup" id="popup">
            <div class="popup__content">
                <div class="popup__left">
                    <img 
                        srcset={image4}
                        sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"                           
                        alt="Tour photo"
                        class="popup__img"
                        src={image4}
                    />
                    <img 
                        srcset={image7}
                        sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"                           
                        alt="Tour photo"
                        class="popup__img"
                        src={image7}
                    />
                </div>
                <div class="popup__right">
                    <a href="#section-tours" class="popup__close">&times;</a>
                    <h2 class="heading-secondary popup__right-heading">Start booking now</h2>
                   
                            <p class="popup__text">We will board in the late afternoon, departing the dock around 6pm. Dinner will be provided on board, introductions to staff and other guests. Staff will provide a brief safety orientation.</p>
                  
                            <p class="popup__text">Early in the morning we will be arriving at the Silver Bank in hopes to catch the sunrise with the humpback whales welcoming us. Breakfast will be provided, and then what everyone has been waiting for our first trip in the tender boat to be able to see the whales up close and personal. Lunch will be served on the boat, and again we will have the tender boat make another trip out to swim with the whales for the afternoon. </p>

                            <p class="popup__text">After Dinner is served we will cruise throughout the night to arrive in the morning at Sousa.</p>
                     


                    <a href="#contact" class="btn btn--green">Book now</a>
                </div>
            </div>
        </div>
    )
}

export default Popup
