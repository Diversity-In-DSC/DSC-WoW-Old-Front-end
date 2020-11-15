import React, { Component } from 'react'
import aboutus from '../assets/aboutusgif12.gif';
import { Row } from 'react-bootstrap';
import Collaborators from './Collaborators'
import '../css/about-us.css'



class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid my-5 mx-auto px-md-5">
                    <Row className="col-10 col-md-5 p-md-0">
                        
                    </Row>
                    <Row className="justify-content-center">
                        <div className="col-10 col-md-5 my-3">
                            <img src={aboutus} alt="About Us" className="img-fluid" style={{width: "80%"}} />
                        </div>
                        <div className="col-10 col-md-5 p-md-0">
                            
                            <h1 className = "about-us-heading">Developer Student Clubs</h1>
                            <h3 className = "about-us-big">Helping students bridge the gap between theory and practice</h3>



                            <div className="about-us">
                                <p className="mt-3" style={{fontSize: "18px"}}>
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
                                
                            </div>
                        </div>
                    </Row>
                </div>
                <Collaborators />
            </React.Fragment>
        )
    }
}

export default AboutUs;