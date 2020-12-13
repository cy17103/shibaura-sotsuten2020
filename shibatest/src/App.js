import React from 'react';
import Home from'./Home';
import About from './About';
import Works from './Works';
import { BrowserRouter as Router, Route ,Switch, useLocation} from '../node_modules/react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { motion , AnimatePresence } from '../node_modules/framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const location = useLocation();
  const [_, rootPath] = location.pathname.split("/");

  return (
    //const location = useLocation();
    <div>
    
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:0.4}}
            >
              <Header />
            </motion.div>
  
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={rootPath}>
                <Route path="/about" component={About} />
                <Route path="/works" component={Works} />
                <Route exact path="/"><Home /></Route>

              </Switch>
              
            </AnimatePresence>
            <ScrollToTop />
            <Footer />

  
    </div>
  );
}

export default App;
