import React, { Component } from 'react'
import '../css/hero.css'
import aboutus from '../assets/AboutUs.png'

class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row container-fluid my-5 mx-auto px-md-5">
                    <div className="col-12 col-md-7 p-md-0">
                        <div className="hero">
                            <h1><i>About Us</i></h1>
                            <p className="mt-5">
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
                    <div className="col-12 col-md-5">
                        <img src={aboutus} alt="About Us" className="img-fluid w-75" />
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default AboutUs;
