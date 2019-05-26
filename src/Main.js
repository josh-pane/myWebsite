import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import Experience from "./Experience";
import Clubs from "./Clubs";
import "./index.css";

class Main extends React.Component {
  render() {
    return (
        <div>
          <HashRouter>
          <div className="my-header">
            <h2>Welcome!</h2>
            <span>
              <a href="https://www.linkedin.com/in/joshpane/" target="_blank">
                <img src={require('./img/linkedin.png')} height="25" width="25"  />
              </a>
            </span>
            <span>
              <a href="https://twitter.com/panedorasbox" target="_blank">
                <img src={require('./img/twitter.png')} height="25" width="25"  />
              </a>
            </span>
            <span>
              <a href="https://www.instagram.com/joshua.pane/" target="_blank">
                <img src={require('./img/insta.png')} height="25" width="25"  />
              </a>
            </span>
          </div>
          <ul className="header">
            <li><NavLink exact to="/">FAQ</NavLink></li>
            <li><NavLink to="/Resume">Resume</NavLink></li>
            <li><NavLink to="/Experience">Work Experience</NavLink></li>
            <li><NavLink to="/Clubs">Clubs</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Resume" component={Resume}/>
            <Route path="/Experience" component={Experience}/>
            <Route path="/Clubs" component={Clubs}/>
          </div>
          </HashRouter>
        </div>
    );
  }
}

export default Main;
