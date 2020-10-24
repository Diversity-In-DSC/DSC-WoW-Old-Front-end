import React, { Component } from 'react'
import aboutus from '../assets/AboutUs.png'

class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row container-fluid my-5 mx-auto px-md-5">
                    <div className="col-12 col-md-5 my-3">
                        <img src={aboutus} alt="About Us" className="img-fluid" style={{width: "80%"}} />
                    </div>
                    <div className="col-12 col-md-7 p-md-0">
                        <div className="timeline">
                            <h1><i>About Us</i></h1>
                            <p className="mt-3">
                                Developer Student Clubs are university based
                                community groups for students interested in Google
                                developer technologies. Students from all
                                undergraduate or graduate programs with an interest
                                in growing as a developer are welcome.

                                <br/><br/>

                                By joining a DSC, students grow their knowledge in a
                                peer-to-peer learning environment and build solutions for
                                local businesses and their community.
                            </p>
                            <button className="btn btn-primary" style={{background:"#00A452", borderRadius:"32px"}}>
                                Participating DSCs
                            </button>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default AboutUs;
