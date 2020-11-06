import React from 'react'
import FaqImage from '../assets/faqImage.png'
import '../css/faq.css'

function Faq() {
    return (
        <div className="faq_sec my-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div>
                        <h1>FAQS</h1>
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
                                we also have goodies and swags for you peeps so stay tuned for that!</p>
                        </div>
                        <div>
                            <h5 className="mt-5 mb-2">Q.Who can attend DSC WOW?</h5>
                            <p>Ans. Students, Developers, Communities & Institutions.</p>
                        </div>
                        <div>
                            <h5 className="mt-5 mb-2">Q.Is DSC WOW 2020 Free to attend?</h5>
                            <p>Ans.It's FREE! Just put on your learning caps and hop on.</p>
                        </div>
                        <div>
                            <h5 className="mt-5 mb-2">Q.Will Participation Certificates be provided?</h5>
                            <p>Ans. Yes, participation certificates will be provided to all.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <img style={{ width: "90%" }} src={FaqImage} alt="faqImage" />
                </div>
            </div>
        </div>
    )
}

export default Faq
