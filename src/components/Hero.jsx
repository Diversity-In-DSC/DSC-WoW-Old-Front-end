import React, { Component } from 'react'
import '../css/hero.css'
import dscgroup from '../assets/dscwow1gif.gif'

class Hero extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row container-fluid mx-auto px-md-5 justify-content-center">
                    <div className="col-12 col-md-5">
                        <img src={dscgroup} alt="dscgroup" className="img-fluid"
                            style={{marginTop: '-5rem'}}
                        />
                    </div>
                    <div className="col-10 col-md-6 p-md-0">
                        <div className="hero">
                            {/* <h1><i>W.O.W</i></h1> */}
                            <p className="hero-text">
                            In a lay man’s perspective, it is a weeklong event 
                            consisting of a 4-day workshop/session and a 48 hours 
                            hackathon named code off duty. But to us developers 
                            and tech enthusiasts, this is much more than some 
                            workshops and hackathon, it is a place where 
                            imagination meets the technology of tomorrow
                            </p>
                            <p className="my-4">  7th December 2020 to 13th December 2020</p>
                            <button className="btn btnbadge mr-1 mr-md-5 mb-2" >Get WOW badge</button>
                            <button className="btn btnnews mb-2" >Share the News!</button>
                        </div>
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
