import React, { Component } from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap'
import "../css/navbar.css";
import dsclogo from "../assets/dsc_linear.png";
import AboutUs from './AboutUs';
import Contact from './Contact';
import { Link, animateScroll as scroll } from "react-scroll";

export class Navbar extends Component {
    constructor(props){
        super();
        this.state={
            width : "350%"
        }
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    openNav() {
        const style = { width : "100%" };
        this.setState({ style });
        document.addEventListener("click", this.closeNav);
    }
    
    closeNav() {
        document.removeEventListener("click", this.closeNav);
        const style = { width : 0 };
        this.setState({ style });
    }

    render() {
        return (
            <div style={{width:"95%",}}>
            <Row>
                <Col md={{ span:4 }} >
                    <img src={dsclogo} alt = "DSC_Logo" style={{ width:"100%",marginLeft:"20px",marginTop:"20px"}}/>
                </Col>
                <Col md={{ span:1, offset: 7, }} >
                    <Button style={{justifyItems:"end"}} onClick={this.openNav}>Menu</Button>
                </Col>
            </Row>
            <div
                ref       = "snav"
                className = "overlay"
                style     = {this.state.style}
            >
                <btn className = "closebtn" onClick = {this.closeNav}>×</btn>
                <div class="overlay-content">
                    
                    <h1 style={{marginLeft:"20%"}}>
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        >Home</Link>
                        <span style={{color:"red",height:"50px",width:"10%"}} ></span>
                    </h1>
                    <h1 style={{marginLeft:"27%"}}><Link
                            activeClass="active"
                            to="aboutus"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        >About Us</Link>
                    </h1>
                    <h1 style={{marginLeft:"34%"}}><Link
                            activeClass="active"
                            to="sponsors"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        >Sponsors</Link>
                    </h1>
                    <h1 style={{marginLeft:"41%"}}><Link
                            activeClass="active"
                            to="speakers"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        >Speakers</Link>
                    </h1>
                    <h1 style={{marginLeft:"48%"}}><Link
                            activeClass="active"
                            to="timeline"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        >Timeline</Link>
                    </h1>
                    <h1 style={{marginLeft:"55%"}}><Link
                            activeClass="active"
                            to="faq"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        >FAQ</Link>
                    </h1>
                    
                    <h1 style={{marginLeft:"62%"}}><Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        >Contact Us</Link>
                    </h1>
                </div>
            </div>
        </div>
        )
    }
}

export default Navbar
