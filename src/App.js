import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'; //React Router is the standard routing library for React

//Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';

class App extends Component {
    render() {
     return (
          <Router>
            <PageWrapper  >

              <Route
                  exact={true}//when path = to home or / or no /, it is going to render that statement properly, only essential in / route
                  path="/"
                  component={Home}
                />

              <Route
                  path="/ab"
                  render={() => {
                    return(
                      <h1>I am the /ab Route</h1>
                    )
                  }}
                />

                <Route
                  path="/about"
                  render={() => {
                    return(
                      <h1>I am the /about Route</h1>
                    )
                  }}
                />

                <Route
                  path="/about"
                  component={About}
                  />

            
            </PageWrapper >
          </Router>
          
   );
  }
}
export default App;
