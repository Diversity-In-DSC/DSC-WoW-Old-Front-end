import React, { Component } from 'react'
import '../css/contact.css'
import contact from '../assets/contact.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <Row className="p-md-0 mx-5 justify-content-center">
                    <h1>Contact Us</h1>
                </Row>

                <div className="row container-fluid mb-5 mt-3 px-md-5 mx-auto justify-content-center">
                    <Col md={5} className="mb-3">
                        <img src={contact} alt="Contact Us" className="img-fluid w-75" />
                    </Col>

                    <div className="col-10 col-md-5 p-md-0">
                        <div className="timeline">                            
                            <p className="my-5">
                                Have a query that isn’t answered in the FAQ docs?
                                Want to sponsor DSC WOW?
                                <br/>
                                Feel free to reach out to us by dropping an email.
                            </p>
                            <form>
                                <div class="form-group">
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        placeholder="Email"/>
                                </div>
                                <div class="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Subject"/>
                                </div>
                                <div class="form-group">
                                    <textarea 
                                        className="form-control" 
                                        placeholder="Message"
                                        ></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Send</button>
                            </form>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Contact;

