import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.scss';

// Import Components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

// Import Routes
import Home from './pages/Home/Home';

// Import Pages
import Sponsors from './pages/Sponsors/Sponsors';
import Venue from './pages/Venue/Venue';
import Schedule from './pages/Schedule/Schedule';
import Speakers from './pages/Speakers/Speakers';
import Dates from './pages/Dates/Dates';
import Registration from './pages/Registration/Registration';
import Volunteers from './pages/Volunteers/Volunteers';
import About from './pages/About/About';
import CallForPapers from './pages/CallForPapers/CallForPapers';
import Con from './pages/Con/Con';



class App extends Component {
  render() {
    const homeNavColor = window.location.pathname === '/' ? '' : '#2d2c30';
    const pageBoxColor = window.location.pathname === '/' ? '' : '#fff';
    const divStyle = {
      backgroundColor: `${pageBoxColor}`
    }
    return (
      <Router>
        <div>
          <NavBar bkgColor={homeNavColor}/>
          <div className="page-box" style={divStyle}>
            {/* Nav Routes */} 
            <Route exact path="/" component={Home} />
            <Route exact path="/sponsors" component={Sponsors} />
            <Route exact path="/venue" component={Venue} />
            <Route exact path="/dates" component={Dates} />
            <Route exact path="/speakers" component={Speakers} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/volunteers" component={Volunteers} />
            <Route exact path="/about" component={About} />
            <Route exact path="/call-for-papers" component={CallForPapers} />
            <Route exact path="/con" component={Con} />
            
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
