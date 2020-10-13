import React from 'react'
import FaqImage from '../assets/faqImage.png'
import '../css/faq.css'

function Faq() {
    return (
        <div className="faq_sec my-5">
            <div className="row">
                <div className="col-md-7 timeline">
                    <div>
                        <h1><i>FAQS</i></h1>
                        <br />
                        <p>Have a question? Let's see if there is something here that helps answer your queries!</p>
                    </div>
                    <div>
                        <div>
                            <h5 className="mt-5 mb-2">Q. What does DSC WOW stands for?</h5>
                            <p>Ans. WOW stands for Worlds of Wonder. It's brainchild event of 80 DSC leads who came
                            together to bring something  interesting for your doorstep.
                            </p>
                        </div>
                        <div>
                            <h5 className="mt-5 mb-2">Q. What are the perks of attending DSC WOW?</h5>
                            <p>Ans. Apart from the variety of sessions by the best speakers in their domains,
                                we also have goodies and swags for you peeps
                                so stay tuned for that!</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <img style={{ width: "100%" }} src={FaqImage} alt="faqImage" />
                </div>
            </div>
        </div>
    )
}

export default Faq