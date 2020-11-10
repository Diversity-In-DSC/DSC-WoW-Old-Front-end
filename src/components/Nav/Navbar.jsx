import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { Col, Row } from 'react-bootstrap'
import dsclogo from "../../assets/dsc_linear.png";
import { Link } from "react-scroll";
import MenuButton from "../MenuButton";
import DarkModeButton from '../DarkModeButton';

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  border-bottom: 2px solid #f1f1f1;
  z-index:1;
  display: flex;
  background-color:white;
  justify-content: space-between;

  img {
    padding: 10px 1em 0 2em;
  }
  @media (max-width: 768px) {
    img{
      padding: 1em 0.5em 0 1em;
    }

  }
`

const Navbar = () => {
  return (
    <Nav>
      <Row className="logo" >
        <Col md={4} xs={10}>
            <img src={dsclogo} alt = "DSC_Logo" style={{ width:"100%"}}/>
        </Col>
        {/* <Col style={{border:"1px solid red",width:"10px"}} >
          <DarkModeButton />
        </Col> */}
        <Col xs={0} sm={0} md={{ span: 6, offset: 2 }}>
          <Burger />
        </Col>
      </Row>
    </Nav>
  )
}

export default Navbar
