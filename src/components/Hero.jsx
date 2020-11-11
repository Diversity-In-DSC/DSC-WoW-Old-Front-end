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
                <a href="/" className="github"><img alt="" src="https://camo.githubusercontent.com/ce676e05faf5d1d3cfa8452e3bc556555809eb74/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f6769746875622d69636f6e2e737667" height="35" width="35" ></img></a>
                <a href="/" className="instagram"><img alt="" src="https://github.com/TheDudeThatCode/TheDudeThatCode/raw/master/Assets/Instagram.svg" height="35" width="35" ></img></a>
                <a href="/" className="linkedin"><img alt="" src="https://danielletaylordotcom.files.wordpress.com/2015/12/icon-linkedin.png" height="35" width="35" ></img></a>
                <a href="/" className="facebook"><img alt="" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-circle-512.png" height="35" width="35" ></img></a>
            </React.Fragment>
        )
    }
}

export default Hero;
