import './Style.css';
import './Contact.css';

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

function Contact() {

  return (

    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="Contact"
    >
        <PageTop 
            title="CONTACT"
            text="お問い合わせフォーム"
            current="CONTACT"
        />
        <div className="contact-container">
          {/*ここに内容を追加していく */}
          <div className="google-form">
            <iframe className="iframe" src="https://docs.google.com/forms/d/e/1FAIpQLSdDVzN_jdFufeRICIDdl_HV-BMZYPoahw39ynAjBlgG5kty_g/viewform?embedded=true" width="100%"  frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
          </div>
        </div>

    </motion.div>
  );
}

export default Contact;
