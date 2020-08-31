import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';//React Router is the standard routing library for React

class Apps extends Component {
    render() {
     return (
        <Router>
          <PageWrapper  >

            <Route
              path="/"
              componenet={Home}
            />


          </PageWrapper >
        </Router>

   );
  }
}
export default Apps;
