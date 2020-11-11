import React, { Component } from 'react';
import Faq from 'react-faq-component';
import {Row, Col} from 'react-bootstrap';


const data = {
  title: "FAQ's",
  rows: [
    {
      title: "What does DSC WOW stands for?",
      content: "- WOW stands for Worlds of Wonder. It's the brainchild event of 115 DSC leads who came together to bring something interesting to your doorstep. "
    },
    {
      title: "What are the perks of attending DSC WOW?",
      content: " - Apart from the variety of sessions by the best speakers in their domains, we also have goodies and swags for you peeps. So stay tuned! "
    },
    {
      title: "Who can attend DSC WOW?",
      content: "- Students, Developers, Communities & Institutions."
    },
    {
      title: "Is DSC WOW 2020 Free to attend?",
      content: "- It's FREE! Just put on your learning caps and hop on."
    },

    {
      title: "Will Participation Certificates be provided?",
      content: "- Yes, participation certificates will be provided to all."
    }]
}

export default class App extends Component {
  render() {
    return (
      <div>
      <Row className="justify-content-center">
        <Col md={8} xs={8}>
          <Faq data={data} styles={{
                    bgColor: "white",
                    titleTextColor: "black",
                    rowTitleColor: "black",
                    rowTitleTextSize: '20px',
                    rowContentColor: "#5b5e5b",
                    rowContentTextSize: '19px',
                      rowContentPaddingTop: '10px',
                      rowContentPaddingBottom: '10px',
                    arrowColor: "blue",
                    }} 
            />
        </Col>
      </Row>
      </div>
    )
  }
}
