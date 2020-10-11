import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faFacebook,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import '../css/footer.css'
function Footer() {
    return (
        <footer>
            <div className="row container-fluid mx-auto py-3 bg-363636">
                <div className="col-sm-6 col-md-3 mb-3">
                    <div className="b-green"><h4 className="ml-2">ABOUT</h4></div>
                    <p>Lorem ipsum dolor sit amet ident, repudiandae cupiditate tenetur labore consectetur at veniam. Reprehende</p>
                </div>
                <hr />
                <div className="col-sm-6 col-md-3 mb-3">
                    <div className="b-red"><h4 className="ml-2">CONTACT</h4></div>
                    <p className="mb-0">support@example.com</p>
                    <p>+91 9111111111</p>
                </div>
                <hr />
                <div className="col-sm-6 col-md-3 mb-3">
                    <div className="b-blue"><h4 className="ml-2">FOLLOW US</h4></div>
                    <ul className="list-unstyled list-inline mt-3">
                        <li className="list-inline-item mr-2"><a className="icon facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li className="list-inline-item mr-2"><a className="icon instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li className="list-inline-item mr-2"><a className="icon twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li className="list-inline-item"><a className="icon linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    </ul>
                </div>
                <hr />
                <div className="col-sm-6 col-md-3 mb-3">
                    <div className="b-yellow"><h4 className="ml-2">NEWSLETTER</h4></div>
                    <input type="text" className="form-control mt-2" placeholder="Name" required />
                    <input type="email" className="form-control mt-1 mb-2" placeholder="Email" required />
                    <button className="btn btn-block btn-primary">Submit</button>
                </div>
            </div>
            <div className="container-fluid bg-202020 text-center py-3">© 2020 Copyright:<a href="#" className="ml-2">DSC WOW</a></div>
        </footer>
    )
}

export default Footer