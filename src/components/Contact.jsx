import React, { useState} from 'react'
import '../css/contact.css'
import contact from '../assets/contactusgif.gif';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function Contact() {

    const [contactName, setContactName] = useState('');
    const [contactSubject, setContactSubject] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');

    const contactSubmit = async (e) => {
        e.preventDefault();

        if (contactName === "" || contactEmail === "" || contactSubject === "" || contactMessage === "") {
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: {
                "name": contactName,
                "email": contactEmail,
                "subject": contactSubject,
                "message": contactMessage
            }
        };

        const contactResp = await fetch('https://api.dscwow.tech/api/contactus', requestOptions);

        console.log(contactResp);
    }

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
                                <br />
                                Feel free to reach out to us by dropping an email.
                            </p>
                        <form>
                        <div class="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    onChange={event => setContactName(event.target.value)} />
                            </div>
                            <div class="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    onChange={event => setContactEmail(event.target.value)} />
                            </div>
                            <div class="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                    onChange={event => setContactSubject(event.target.value)} />
                            </div>
                            <div class="form-group">
                                <textarea
                                    className="form-control"
                                    placeholder="Message"
                                    onChange={event => setContactMessage(event.target.value)}
                                ></textarea>
                            </div>
                            <button onClick={contactSubmit} type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Contact;

