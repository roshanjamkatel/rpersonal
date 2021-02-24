import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'


import NavBar from './navBar/NavBar.js';
import About from './About.js';
import Links from './Links.js';
import Projects from './Projects.js';


function App() {
  return (
    <div className="App">
     <Router>
        <NavBar/>
          <Switch>
            
            <Route exact path="/home">
                <Links/>
            </Route>

            <Route exact path="/about">
                <About />
            </Route>

            <Route exact path="/projects">
                <Projects />
            </Route>

            <Route exact path="/links">
                <Links />
            </Route>
            


          </Switch>
        </Router> 
    </div>
  );
}

export default App;
