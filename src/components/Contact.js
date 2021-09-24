import React from 'react'

const Contact = () => {
    return (
        <section id="contact" class="section-book">
            <div class="row">
                <div class="book">
                    <div class="book__form">
                        <div class="u-margin-bottom-medium">
                            <h2 class="heading-secondary">
                                Send us a message
                            </h2>
                        </div>
                        <form name='contactSilverBank' method="POST" action="/" data-netlify="true" className="form">
                        <input type="hidden" name="form-name" value="contact" />
                            <div class="form__group">
                                <input name='Name' type="text" class="form__input" placeholder="Full Name" id="name" required/>
                                <label htmlFor="name" class="form__label">Full Name</label>
                            </div>

                            <div class="form__group">
                                <input name='Email' type="email" class="form__input" placeholder="Email address" id="email" required/>
                                <label htmlFor="email" class="form__label">Email address</label>
                            </div>

                            <div class="form__group">
                                <textarea id="message" name="message" class="form__input" placeholder="Send us a message" required/>
                                <label htmlFor="message" class="form__label">Send us a message</label>
                            </div>
                                
                            <div class="form__group">
                                <button type="submit" class="btn btn--green">Next step &rarr;</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
