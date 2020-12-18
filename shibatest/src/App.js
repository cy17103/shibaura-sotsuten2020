import React from 'react';
import Home from'./Home';
import About from './About';
import Works from './Works';
import Portfolio from './Portfolio';
import Contact from './Contact';
import { Route ,Switch, useLocation} from '../node_modules/react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { motion , AnimatePresence } from '../node_modules/framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {

  const location = useLocation();
  const rootPath = location.pathname.split("/");

  const current = window.location.pathname;
  const pageURLArr = current.split('/')[1]; 
  let pageURLArrCategory;

  if(pageURLArr === ''){
    pageURLArrCategory = "HOME";
  }else{
    pageURLArrCategory = pageURLArr[1];
  };



  return (
    <div>  	
      
      
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.4}}
      >
        <Header currentPath={pageURLArrCategory}/>
      </motion.div>

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={rootPath}>
          <Route path="/about" component={About} />
          <Route path="/works" component={Works} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </AnimatePresence>

      <ScrollToTop />

      <Footer />

    </div>
  );
}

export default App;
