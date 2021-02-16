import './Work.css';
import './Style.css';


import WorkPage from './components/WorkPage';
import { motion } from 'framer-motion';


const json = require('./test.json');
/*
for(let i=0; i < json.length;i++){
  const item = json[i];
  WorksArray.push({id:item.id,title:item.title,name:item.name,lab:item.lab,image:'WorksItemBG01.png'})
};
 */


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

function Work(props) {

  const id = props.location.state.id;
  const WorksArray = json[id-1];
  console.log(WorksArray);
  

  return (

    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="Work"
    >
    
    <WorkPage array={WorksArray}/>
    
    

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
