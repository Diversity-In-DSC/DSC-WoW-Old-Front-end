import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import img1 from '../assets/dscbvppune.png';
import devfolio from '../assets/devfolio.png'
import gdgp from '../assets/gdg pune.png';
import matic from '../assets/matic.png';
import fold from '../assets/fold.png';
import portis from '../assets/portis.svg';
import fb from '../assets/fb.png';
import jovian from '../assets/jovian.png';
import jb from '../assets/jetbrains.png';
import echo from '../assets/echo.png';
import digital from '../assets/digital.png';
import gmc from '../assets/give.png';
import '../css/sponsor.css'

class Sponsor extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row container-fluid my-5 mx-auto px-md-5">
                    <div className="col-12 p-md-0">
                        <div className="timeline">
                            <Row className="justify-content-center">
                                <h1>Sponsors</h1>
                            </Row>
                            <Row className="justify-content-center">
                                <p className="mt-3">
                                    This beautiful event wouldn’t have been possible without
                                    the support of our sponsors and partners.
                                </p>
                            </Row>
                            
                            <Container>
                                <div className="my-5">
                                    <Row className="justify-content-md-center">
                                        <h4 className="mb-3">Community Sponsors</h4>
                                    </Row>
                                    <Row className="justify-content-md-center">
                                        <img src={img1} alt="DSC BVDUCOE Pune" className="img-fluid image__DSC" />
                                    </Row>
                                </div>
                            </Container>

                        </div>
                    </div>
                    {/* <div className="col-12 col-md-5 my-3">
                        <img src={sponsors} alt="Sponsors" className="img-fluid w-75" />
                    </div> */}

                    <Container className="mt-5 sponsor-img">
                        <Row className = "justify-content-md-center mb-5">
                            <h4>Gold Sponsors</h4>
                        </Row>

                        {/* ROW 1 */}
                        <Row className="justify-content-md-center mb-5">
                            <Col xs lg="2" className="mr-lg-5">
                                {/* Devfolio */}
                                <a href="https://devfolio.co/" target="_blank" rel="noopener noreferrer">
                                    <img src={devfolio} alt="Devfolio" className="img-fluid image__devfolio" />
                                </a>
                            </Col>

                            <Col xs lg="2" className="mr-lg-5">
                                {/* Matic */}
                                <a href="https://matic.network/" target="_blank" rel="noopener noreferrer">
                                    <img src={matic} alt="Matic" className="img-fluid image__matic" />
                                </a>
                            </Col>
                                    
                            <Col xs lg="2" className="mr-lg-5">
                                {/* GDG Pune */}
                                <a href="https://gdg.community.dev/gdg-pune/" target="_blank" rel="noopener noreferrer">
                                    <img src={gdgp} alt="GDG Pune" className="img-fluid image__GDGPune" />
                                </a>
                            </Col>        
                        </Row>

                        {/* ROW 2 */}
                        <Row className="justify-content-md-center mb-5">
                            <Col xs lg="2" className="mr-lg-5">
                                {/* Fold */}
                                <a href="https://fold.money/" target="_blank" rel="noopener noreferrer">
                                    <img src={fold} alt="fold" className="img-fluid image__fold" />
                                </a>
                            </Col>

                            <Col xs lg="2" className="mr-lg-5">
                                {/* portis */}
                                <a href="https://www.portis.io/" target="_blank" rel="noopener noreferrer">
                                    <img src={portis} alt="Portis" className="img-fluid image__portis" />
                                </a>
                            </Col>

                            <Col xs lg="2" className="mr-lg-5">
                                {/* Jovian.ml */}
                                <a href="https://www.jovian.ai/" target="_blank" rel="noopener noreferrer">
                                    <img src={jovian} alt="jovian.ml" className="img-fluid" />
                                </a>
                            </Col>                                            
                        </Row>

                        {/* ROW 3 */}
                        <Row className="justify-content-md-center mb-5">
                            <Col xs lg="2" className="mr-lg-5">
                                {/* FB Developer Cirles */}
                                <a href="https://developers.facebook.com/developercircles/" target="_blank" rel="noopener noreferrer">
                                    <img src={fb} alt="Facebook Developer Cirles" className="img-fluid" />
                                </a>
                            </Col>

                            <Col xs lg="2" className="mr-lg-5">
                                {/* JetBrains */}
                                <a href="https://www.jetbrains.com/" target="_blank" rel="noopener noreferrer">
                                    <img src={jb} alt="Jetbrains" className="img-fluid" />
                                </a>
                            </Col>

                            <Col xs lg="2" className="mr-lg-5">
                                {/* Digital Ocean */}
                                <a href="https://www.digitalocean.com/" target="_blank" rel="noopener noreferrer">
                                    <img src={digital} alt="Digital Ocean" className="img-fluid" />
                                </a>
                            </Col>      
                                    
                        </Row>

                        {/* ROW 4 */}
                        <Row className="justify-content-md-center mb-5">
                            <Col xs lg="2" className="mr-lg-5">
                                {/* Echo AR */}
                                <a href="https://www.echoar.xyz/" target="_blank" rel="noopener noreferrer">
                                    <img src={echo} alt="Echo AR" className="img-fluid" />
                                </a>
                            </Col>

                            <Col xs lg="2" className="mr-lg-5">
                                {/* Give My Certificate */}
                                <a href="https://givemycertificate.com/" target="_blank" rel="noopener noreferrer">
                                    <img src={gmc} alt="Give My Certificate" className="img-fluid" />
                                </a>
                            </Col>       
                        </Row>

                        <Row className="justify-content-md-center mb-5">
                            <a 
                                className="btn btn-primary mt-5" 
                                href="mailto:sponsorship@codeoffduty.com"
                                style={{background: "#546DDD", borderRadius:"32px"}}>
                                    Interested in Sponsoring Us?
                            </a>
                        </Row>
                    </Container>
                </div>

            </React.Fragment>
        )
    }
}

export default Sponsor;
