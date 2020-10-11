import React, { Component } from 'react'
import '../counter/hero.css' //Specify the file loctaion
import dscgroup from '../counter/DSCwow.png' //Specify the image loctaion


 class Hero extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="hero">
                <h1>WOW</h1><br />
                <p><b><i>Developer Student Clubs WOW brings together<br />
                developers from around the groble for talks,<br /> 
                Hands-on learning with Developer Student Clubs Leads<br /> 
                and Google Developer Experts and first look at<br /> 
                some of amazing Community Projects.</i></b><br /><br />
                24th November 2020 to 29th November 2020
                </p>
    
                </div> <div className="dscgroup"><img src={dscgroup} alt="dscgroup"/></div>

                <button className="btnbadge" >Get WOW badge</button>
                <button className="btnnews" >Share the News!</button>
                //add all the social links
                <a href="#" className="github"><img src="https://camo.githubusercontent.com/ce676e05faf5d1d3cfa8452e3bc556555809eb74/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f6769746875622d69636f6e2e737667"  height="35" width="35" ></img></a>
                <a href="#" className="Instagram"><img src="https://github.com/TheDudeThatCode/TheDudeThatCode/raw/master/Assets/Instagram.svg"  height="35" width="35" ></img></a>
                <a href="#" className="linkedin"><img src="https://danielletaylordotcom.files.wordpress.com/2015/12/icon-linkedin.png"  height="35" width="35" ></img></a>
                <a href="#" className="facebook"><img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-circle-512.png"  height="35" width="35" ></img></a>

            </React.Fragment>
        )
    }
}

export default Hero;
