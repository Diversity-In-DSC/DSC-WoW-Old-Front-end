import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/index.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Faq from './components/Faq'
import AboutUs from './components/AboutUs'
import Speaker from './components/Speaker'
import Sponsor from './components/Sponsor'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Collaborators from './components/Collaborators';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about">
          <div id="aboutus">
            <AboutUs />
          </div>
        </Route>

        <Route path="/speakers">
          <div id="speakers">
            <Speaker />
          </div>
        </Route>

        <Route path="/sponsors">
          <div id="sponsors">
            <Sponsor />
          </div>
        </Route>

        <Route path="/timeline">
          <div id="timeline">
            <Timeline />
          </div>
        </Route>

        <Route path="/collaborators">
          <div id="collaborators">
            <Collaborators />
          </div>
        </Route>

        <Route path="/faq">
          <div id="faq">
            <Faq />
          </div>
        </Route>

        <Route path="/contact">
          <div id="contact">
            <Contact />
          </div>
        </Route>

        <Route exact path="/">
          <div id="home">
            <Hero />
          </div>
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;