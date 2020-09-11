import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route} from 'react-router-dom'; //React Router is the standard routing library for React, removed Link 

//Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';

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
                  path="/about"
                  component={About}
                  />

                <Route
                  path="/contact"
                  component={Contact}
                  />

            
            </PageWrapper >
          </Router>
          
   );
  }
}
export default App;
