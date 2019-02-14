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
import Agenda from './pages/Agenda/Agenda';
import Dates from './pages/Dates/Dates';
import Register from './pages/Registration/Registration';
import About from './pages/About/About';
import CallForPapers from './pages/CallForPapers/CallForPapers';
import Conf from './pages/Conf/Conf';
import Bio from './pages/Conf/Bio';
import Emails from './pages/Emails/Emails';

class App extends Component {
  render() {
    const homeNavColor = window.location.pathname === '/' ? '' : '#2d2c30';
    const pageBoxColor = window.location.pathname === '/' ? '' : window.location.pathname === '/dates' ?  '#eee' : '#fff';
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
            <Route exact path="/agenda" component={Agenda} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/about" component={About} />
            <Route exact path="/call-for-papers" component={CallForPapers} />
            <Route exact path="/con" component={Conf} />
            <Route path="/bio" component={Bio} />
            <Route path="/email" component={Emails} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
