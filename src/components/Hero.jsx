import React, { Component } from 'react'
import '../css/hero.css'
import dscgroup from '../assets/dscwow1gif.gif'

class Hero extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row container-fluid mt-5 mx-auto px-md-5 justify-content-center">
                    <div className="col-10 col-md-6 p-md-0">
                        <div className="hero">
                            <h1><i>W.O.W</i></h1>
                            <p className="hero-text mt-5">
                                Developer Student Clubs WOW brings together
                                developers from around the globe for talks,
                                Hands-on learning with Developer Student Clubs Leads
                                and Google Developer Experts and first look at
                                some of amazing Community Projects.</p>
                            <p className="my-4">  7th December 2020 to 13th December 2020</p>
                            <button className="btn btnbadge mr-1 mr-md-5" >Get WOW badge</button>
                            <button className="btn btnnews" >Share the News!</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <img src={dscgroup} alt="dscgroup" className="img-fluid" />
                    </div>
                </div>
                {/* social */}
                <a href="https://facebook.com/dscwow" className="facebook"><img alt="Facebook" src="https://img.icons8.com/color/2x/facebook-new.png" height="35" width="35" ></img></a>
                <a href="https://instagram.com/dsc.wow" className="instagram"><img alt="Instagram" src="https://img.icons8.com/color/2x/instagram-new.png" height="35" width="35" ></img></a>
                <a href="https://linkedin.com/company/dsc-wow" className="linkedin"><img alt="LinkedIn" src="https://img.icons8.com/fluent/2x/linkedin.png" height="35" width="35" ></img></a>
                <a href="https://twitter.com/DscWow" className="twitter"><img alt="Twitter" src="https://img.icons8.com/fluent/2x/twitter.png" height="35" width="35" ></img></a>
            </React.Fragment>
        )
    }
}

export default Hero;
