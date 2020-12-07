import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About'
import { BrowserRouter as Router, Route ,Link} from '../node_modules/react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import Header from './components/Header';
import Footer from './components/Footer'

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    
      <Router>
        
          <Header />
          <Route exact path='/' component={App}/>
          <Route path='/About' component={About}/>
          <Footer />
          <ScrollToTop />

      </Router>

  </React.StrictMode>,
  document.getElementById('top')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
