import React from 'react';
import speaker1 from '../assets/speaker1.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import siddhantsgarwalphoto from '../assets/siddhantagarwal.jpg';
import biswajeetmallikphoto from '../assets/biswajeetmallik.jpeg';
import nikitagandhiphoto from '../assets/nikitagandhiphoto.jpg';

//css
import '../css/Speaker.css'

const Speaker=()=> {
    const speakers = [
        {
            id:1,
            name:'Siddhant Agarwal',
            position:'Google',
            img:siddhantsgarwalphoto,
            linkedin:'https://www.linkedin.com/in/swarnim-gupta01',
            twitter:'https://twitter.com/Swarnim31645040'
            
        },{
            id:2,
            name:'Biswajeet Mallik',
            position:'Google',
            img:biswajeetmallikphoto,
            linkedin:'https://www.linkedin.com/in/sidagarwal04/',
            twitter:'https://twitter.com/sidagarwal04'            
        },{
            id:3,
            name:'Nikita Gandhi',
            position:'Google',
            img:nikitagandhiphoto,
            linkedin:'https://www.linkedin.com/in/nikita-gandhi01/',
            twitter:'https://twitter.com/Nikkitagandhi'            
        },{
            id:4,
            name:'Swarnim Gupta',
            position:'Microsoft',
            img:speaker1,
            linkedin:'https://www.linkedin.com/in/swarnim-gupta01',
            twitter:'https://twitter.com/Swarnim31645040'            
        },
        {
            id:5,
            name:'Swarnim Gupta',
            position:'Microsoft',
            img:speaker1,
            linkedin:'https://www.linkedin.com/in/swarnim-gupta01',
            twitter:'https://twitter.com/Swarnim31645040'            
        },
        {
            id:6,
            name:'Swarnim Gupta',
            position:'Microsoft',
            img:speaker1,
            linkedin:'https://www.linkedin.com/in/swarnim-gupta01',
            twitter:'https://twitter.com/Swarnim31645040'            
        },
        {
            id:7,
            name:'Swarnim Gupta',
            position:'Microsoft',
            img:speaker1,
            linkedin:'https://www.linkedin.com/in/swarnim-gupta01',
            twitter:'https://twitter.com/Swarnim31645040'            
        },
        {
            id:8,
            name:'Swarnim Gupta',
            position:'Microsoft',
            img:speaker1,
            linkedin:'https://www.linkedin.com/in/swarnim-gupta01',
            twitter:'https://twitter.com/Swarnim31645040'            
        },
        {
            id:9,
            name:'Swarnim Gupta',
            position:'Microsoft',
            img:speaker1,
            linkedin:'https://www.linkedin.com/in/swarnim-gupta01',
            twitter:'https://twitter.com/Swarnim31645040'            
        },
        {
            id:10,
            name:'Swarnim Gupta',
            position:'Microsoft',
            img:speaker1,
            linkedin:'https://www.linkedin.com/in/swarnim-gupta01',
            twitter:'https://twitter.com/Swarnim31645040'            
        },
    ];
    let card=[];
    card = speakers.map((i)=>{
        return(                                   
              <div className = "px-2 py-2 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-10">
                <div className = "">
                    <div className = "text-center py-5 ma-1 fill-height whiteThemeCard" style = {{cursor: 'pointer'}}>
                    <div className = "v-avatar" style = {{height: '100px',minWidth: '100px' ,width: '100px'}}>
                        <img src = {i.img} alt=""/>
                    </div>
                        <p className = "mt-3 mb-0 google-font mb-0" style = {{fontSize: '110%'}}>
                            {i.name}
                        </p>
                        <p className = "mt-1 mb-0 google-font mt-0" style = {{fontSize:'80%'}}>
                            {i.position}
                        </p>
                    <div className = "container py-0 my-0 container--fluid">
                        <div className = "row py-0 my-0 align-start justify-start">
                            <div className = "py-1 my-0 col-sm-12 col-md-12 col-lg-12 col-12">
                                <a href= {i.twitter} target= "_blank" rel="noopener noreferrer" className = "ml-0 mt-0 mx-1" aria-label = "social media btn">
                                    <span><TwitterIcon/></span>
                                </a>
                                <a href= {i.linkedin} target= "_blank" rel="noopener noreferrer" className = "ml-0 mt-0 mx-1 v-btn v-btn--flat v-btn--icon v-btn--round theme--light v-size--small" aria-label = "social media btn">
                                    <LinkedInIcon/>
                                </a>

                            </div>

                        </div>

                    </div>

                    </div>
                </div>

            </div>);
    })
       return (
            <React.Fragment>
                <div className = "container pb-4 container--fluid white-border white">
                    <div className = "row" style={{justifyContent:'center',alignItems:'center'}}>
                        <div className = "col-md-10 col">
                            <div className = "container my-2 container--fluid">
                                <div className = "row align-center justify-start">
                                    <div className = "text-center col-md-12 col">
                                        <h1>
                                           Speakers at W.O.W 
                                        </h1>
                                        <p>Meet the amazing speakers at our event. 
                                We have the best of speakers lined up for you. 
                                From Googlers to GDE's from Angular to React, 
                                DSC W.O.W will be covering all aspects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="container-fluid mb-5 pb-5">
                    <div className= "row" style={{justifyContent:'center',alignItems:'center'}}>
                         <div className="col-sm-11 col-md-10 col-lg-10 col-12">
                             <div className = "container">
                                <div className = "row">
                                    {card}             
                                </div>
                             </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    
}

export default Speaker;
