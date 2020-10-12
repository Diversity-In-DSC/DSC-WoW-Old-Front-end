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
      {/* <Navbar /> */}
      <Hero />
      {/* <AboutUs /> */}
      {/* <Speaker /> */}
      {/* <Sponsor /> */}
      <Timeline /> 
      {/* <Contact /> */}
      <Faq />
      <Footer />
    </>
  );
}

export default App;