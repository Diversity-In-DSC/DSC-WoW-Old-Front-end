import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import sponsors from '../assets/sponsor.png';
import img1 from '../assets/dscbvppune.png';
import devfolio from '../assets/devfolio.png'
import gdgp from '../assets/gdg pune.png';
import matic from '../assets/matic.png';

class Sponsor extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row container-fluid my-5 mx-auto px-md-5">
                    <div className="col-12 col-md-7 p-md-0">
                        <div className="timeline">
                            <h1><i>Sponsors</i></h1>
                            <p className="mt-3">
                            This beautiful event wouldn’t have been possible without
                            the support of our sponsors and partners.
                            </p>
                            
                            <div className="my-5">
                                <h5 className="mb-3">Community Sponsors</h5>
                                <img src={img1} alt="DSC BVDUCOE Pune" className="img-fluid" />
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <img src={sponsors} alt="Sponsors" className="img-fluid w-75" />
                    </div>

                    <Container fluid>
                        <h5 className="mb-4">Gold Sponsors</h5>
                        <Row className="justify-content-md-center">
                            <Col>
                                {/* Devfolio */}
                                <img src={devfolio} alt="Devfolio" className="img-fluid mr-5" />
                            </Col>

                            <Col>
                                {/* Matic */}
                                <img src={matic} alt="Matic" className="img-fluid mr-5" />
                            </Col>
                                    
                            <Col>
                                {/* GDG Pune */}
                                <img src={gdgp} alt="GDG Pune" className="img-fluid mr-5" />
                            </Col>        
                        </Row>

                        <button 
                            className="btn btn-primary mt-5" style={{background: "#546DDD", borderRadius:"32px"}}>
                                Interested in Sponsoring Us?
                        </button>
                    </Container>
                </div>

            </React.Fragment>
        )
    }
}

export default Sponsor;
