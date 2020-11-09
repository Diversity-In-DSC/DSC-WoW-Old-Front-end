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
  height: 60px;
  border-bottom: 2px solid #f1f1f1;
  z-index:1;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 5px 1em 0 2em;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <Row className="logo" style={{border:"1px solid red"}}>
        <Col md={4} xs={8} >
            <img src={dsclogo} alt = "DSC_Logo" style={{ width:"100%"}}/>
        </Col>
      </Row>
      <DarkModeButton />
      <Burger />
    </Nav>
  )
}

export default Navbar
