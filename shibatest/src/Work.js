import './Work.css';
import './Style.css';


import WorkPage from './components/WorkPage';
import { motion } from 'framer-motion';
import aboutImage from '../src/img/aboutImage.png';
import kanji from '../src/img/box-do.svg';

const json = require('./test.json');


const containerVariants ={
  hidden:{
      opacity:0
  },

  visible:{
      opacity:1,
      transition:{
          delay:0.4,
          duration:0.8,
          when:"beforeChildren"
      }
  },
  exit:{
      opacity:0,
      transition:{
        delay:0.4,
        duration:0.8
      }
  }
}

function Work() {

  return (

    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="Work"
    >
    
    <WorkPage/>
  <div className="test"></div>
    
    

{/* 
    <div className="work-imgs">
      <img src={aboutImage} className="work-img" alt="exhibitionPoster"/>
      <img src={aboutImage} className="work-img" alt="exhibitionPoster"/>

    </div>

    <div className="work-contents-container">

      <div className="work-contents">
        <div className="work-about">
        <img src={kanji} className="kanji" alt="exhibitionPoster"/>
        <div className="work-title">
          <div className="title">研究タイトルです研究タイトルです研究タイトルです研究タイトルです</div>
          <div className="name-lab">氏名 | 研究室名</div>
        </div>
        </div>
        <hr></hr>
        <div>aaa</div>
      </div>
      <hr></hr>
      
    </div>
*/}
    

    </motion.div>
  );
}

export default Work;
