import React, { Component } from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap'
import "../css/navbar.css";
import dsclogo from "../assets/dsc_linear.png";

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
                <a  className = "closebtn" onClick = {this.closeNav}>×</a>
                <div class="overlay-content">
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </div>
        )
    }
}

export default Navbar
