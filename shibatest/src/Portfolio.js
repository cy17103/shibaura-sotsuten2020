import './Portfolio.css';
import './Style.css';

import PageTop from './components/PageTop';
import { motion } from '../node_modules/framer-motion';

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

function Portfolio() {

  return (

    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="Portfolio">
        <PageTop 
            title="PORTFOLIO"
            text="ポートフォリオ一覧"
            current="PORTFOLIO"
        />
        <div className="container">
            {/*ここに内容を追加していく */}
        </div>

    </motion.div>
  );
}

export default Portfolio;
