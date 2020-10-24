import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Faq from './components/Faq'
import AboutUs from './components/AboutUs'
import Speaker from './components/Speaker'
import Sponsor from './components/Sponsor'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* TODO: complete the component and uncomment */}
      <Navbar />
      <div id="home">
      <Hero />
      </div>
      <div id="aboutus">
        <AboutUs /> 
      </div>
      <div id="speakers">
      <Speaker />
      </div>
      <div id="sponsors">
      <Sponsor />
      </div>
      <div id="timeline">
      <Timeline /> 
      </div>
      <div id="faq">
      <Faq />
      </div>
      <div id="contact">
        <Contact /> 
      </div>
      <Footer />
    </>
  );
}

export default App;