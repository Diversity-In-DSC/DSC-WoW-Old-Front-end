import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/index.css'
import history from './_history';

import {routeConstant} from './_constants';
import Navbar from './components/Nav/Navbar';
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

  const {
    HOME,
    ABOUT,
    SPEAKERS,
    SPONSORS,
    TIMELINE,
    COLLABORATORS,
    FAQ,
    CONTACT
  } = routeConstant

  return (
    <>
      <Navbar/>
    <Router history={history}>
      <Switch>
        <Route path={ABOUT}>
          <div id="aboutus">
            <AboutUs />
          </div>
        </Route>

        <Route path={SPEAKERS}>
          <div id="speakers">
            <Speaker />
          </div>
        </Route>

        <Route path={SPONSORS}>
          <div id="sponsors">
            <Sponsor />
          </div>
        </Route>

        <Route path={TIMELINE}>
          <div id="timeline">
            <Timeline />
          </div>
        </Route>

        <Route path={COLLABORATORS}>
          <div id="collaborators">
            <Collaborators />
          </div>
        </Route>

        <Route path={FAQ}>
          <div id="faq">
            <Faq />
          </div>
        </Route>

        <Route path={CONTACT}>
          <div id="contact">
            <Contact />
          </div>
        </Route>

        <Route exact path={HOME}>
          <div id="home">
            <Hero />
          </div>
        </Route>
      </Switch>

      <Footer />
    </Router>
    </>
  );
}

export default App;