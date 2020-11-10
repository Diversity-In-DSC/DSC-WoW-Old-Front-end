import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import "../css/navbar.css";
import dsclogo from "../assets/dsc_linear.png";
import { Link } from "react-scroll";
import { Link } from "react-router";
import MenuButton from "./MenuButton";
import DarkModeButton from './DarkModeButton';
export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: "100%",
            overflow: "auto"
        }
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    openNav() {
        const style = { width: "100%", overflow: "hidden" };
        this.setState({ style });
        document.addEventListener("click", this.closeNav);
    }

    closeNav() {
        document.removeEventListener("click", this.closeNav);
        const style = { width: 0, overflow: "auto" };
        this.setState({ style });
    }

    render() {
        return (
            <div style={{ width: "95%", }}>
                <Row>
                    <Col md={4} xs={8} >
                        <img src={dsclogo} alt="DSC_Logo" style={{ width: "100%", marginLeft: "20px", marginTop: "20px" }} />
                    </Col>
                    <Col md={{ span: 1, offset: 7, }} style={{ marginTop: "20px", display: 'flex', alignItems: 'center' }}>
                        <MenuButton style={{ justifyItems: "end" }} onClick={this.openNav} color='black' />
                        <DarkModeButton />
                    </Col>
                </Row>
                <div
                    ref="snav"
                    className="overlay"
                    style={this.state.style}
                >
                    <btn className="closebtn" onClick={this.closeNav}>×</btn>
                    <div class="overlay-content">

                        <h3 style={{ marginLeft: "20%" }}>
                            <Link
                                activeClass="active"
                                to="/"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={700}
                            >Home</Link>
                            <span style={{ color: "red", height: "50px", width: "10%" }} ></span>
                        </h3>
                        <h3 style={{ marginLeft: "27%" }}><Link
                            activeClass="active"
                            to="/about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        >About Us</Link>
                        </h3>
                        <h3 style={{ marginLeft: "34%" }}><Link
                            activeClass="active"
                            to="/sponsors"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        >Sponsors</Link>
                        </h3>
                        <h3 style={{ marginLeft: "41%" }}><Link
                            activeClass="active"
                            to="/speakers"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        >Speakers</Link>
                        </h3>
                        <h3 style={{ marginLeft: "48%" }}><Link
                            activeClass="active"
                            to="/timeline"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        >Timeline</Link>
                        </h3>
                        <h3 style={{ marginLeft: "55%" }}><Link
                            activeClass="active"
                            to="/faq"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        >FAQ</Link>
                        </h3>

                        <h3 style={{ marginLeft: "62%" }}><Link
                            activeClass="active"
                            to="/contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        >Contact Us</Link>
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
