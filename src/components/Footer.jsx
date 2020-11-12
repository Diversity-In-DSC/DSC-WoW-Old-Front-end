import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import '../css/footer.css'
import dscwowLogo from "../assets/wow_logo.png";
import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';

function Footer() {
    function toTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <Container fluid className="footer-main">
            <Row className="pt-5 justify-content-center">
                <Col md={5} xs={12} className="mx-sm-auto">
                    <div className="text-center">
                        <img 
                            className="footer-dscLogo w-50 mb-3" 
                            src={dscwowLogo}
                            alt=""
                        />
                    </div>

                    <div className="row justify-content-center">
                        <a href="https://www.facebook.com/dscwow"
                            className="mr-4 text-dark"
                        >
                            <FontAwesomeIcon icon={faFacebook} 
                                className="h3"/>
                        </a>
                        <a href="https://instagram.com/dscwow_?igshid=s66ymmaorjji"
                            className="mr-4 text-dark"
                        >
                            <FontAwesomeIcon icon={faInstagram}
                                className="h3"/>
                        </a> 
                        <a href="https://www.linkedin.com/company/dsc-wow"
                            className="mr-4 text-dark"
                        >
                            <FontAwesomeIcon icon={faLinkedin}
                                className="h3"/>
                        </a>
                        <a href="https://twitter.com/DscWow?s=08"
                            className="mr-4 text-dark"
                        >
                            <FontAwesomeIcon icon={faTwitter}
                                className="h3"/>
                        </a>
                        <a href="https://www.github.com/Diversity-In-DSC"
                            className="mr-4 text-dark"
                        >
                            <FontAwesomeIcon icon={faGithub}
                                className="h3"/>
                        </a>
                        
                    </div>
                </Col>
                <Col md={6} xs={8} className="mx-auto"
                    style={{ marginTop: '7rem'}}
                >
                    <Row className="social-media justify-content-end">
                        <Link to="/" spy={true} smooth={true}
                            className="pr-3 text-muted"
                            onClick={toTop}
                        >
                            <h4>Home</h4>
                        </Link>
                        <Link to="/timeline" spy={true} smooth={true}
                            className="pr-3 text-muted"
                            onClick={toTop}
                        >
                            <h4>Timeline</h4>
                        </Link>
                        <Link to="/speakers" spy={true} smooth={true}
                            className="pr-3 text-muted"
                            onClick={toTop}
                        >
                            <h4>Speakers</h4>
                        </Link>
                        <Link to="/faq" spy={true} smooth={true}
                            className="pr-3 text-muted"
                            onClick={toTop}
                        >
                            <h4>FAQ</h4>
                        </Link>
                    </Row>
                </Col>
            </Row>
            <Row className="pb-4 justify-content-center">
                <p style={{fontSize: "18px"}}>
                    Copyright &copy; 2020 | DSC WOW
                </p>
            </Row>
            <div onClick={toTop} className="footer__topBtn">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 15l-5.247-6.44-5.263 6.44-.737-.678 6-7.322 6 7.335-.753.665z" /></svg>
            </div>
        </Container>

    )
}

export default Footer