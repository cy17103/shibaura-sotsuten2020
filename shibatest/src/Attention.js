import './Attention.css';
import './Style.css';
import {Link} from '../node_modules/react-router-dom';
import { motion } from 'framer-motion';


import PageTop from './components/PageTop';

function Attention() {

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

  return (
    <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="Attention"
    >
        {/* <PageTop 
            title="ATTENTION"
            text="本展覧会の新型コロナウイルス感染対策について"
        /> */}

        <div className="container">
            <div className="attentionTitle">
              <h2>本展覧会の新型コロナウイルス<br class="sp"></br>感染対策について</h2>
            </div>

            <div className="titleTexts">
              <p>芝浦工業大学デザイン工学部卒業・修了研究展2021では新型コロナウイルス感染症予防として、以下の対策を実施して開催いたします。</p>
              <p className="redText">ご来校に際しては本ページをご一読のうえ、展覧会にご参加くださいますよう、ご協力をお願いいたします。</p>
              <p className="about-subtext">* 状況により、実施時期・内容等を変更する場合がございます。</p>
            </div>
            
          <div className="check1">
            <h3>ご来校時の体温チェック</h3>
            <p>ご来校時に、スタッフが非接触型体温計で<br class="sp"></br>検温をさせていただきます。37.5度以上の<br class="sp"></br>発熱が見つかった場合、ご本人および同伴の方は事前予約いただいてもご入場いただけ<br class="sp"></br>ません。あらかじめご了承ください。</p>
          </div>

          <div className="check2">
            <h3>ご来校に際してお願い</h3>
            <p>以下のような症状に心当たりがある方は、<br class="sp"></br>ご来校をご遠慮ください。</p><br></br>
            <p className="boldText">
               -  37.5℃を超える発熱がある。<br></br>
               -  息苦しさ、強いだるさがある。<br></br>
               -  咳や微熱など比較的軽い風邪の症状が続いている。<br></br>
               -  味覚や嗅覚に違和感がある。<br></br>
               -  無症状だが、感染もしくは感染者との接触の心配や不安がある。
            </p><br></br>
            <p>ご本人や身近な方が過去14日以内に、「入管法に基づく入国制限対象地域」への訪問歴をお持ちの方はご来場をご遠慮ください。<br></br><br></br>アルコール消毒液を使用した手指の消毒や、石けんを使用したこまめな手洗いにご協力<br class="sp"></br>ください。</p>
            <br></br>
            <p>マスク着用のご協力をお願いいたします。<br class="sp"></br>マスクをお持ちでないお客様は咳やくしゃみをされる際はハンカチ等で口をしっかり覆う「咳エチケット」にご協力ください。</p>
          </div>

          <div className="check3">
            <h3>その他の取り組み</h3>
            <p>・スタッフはマスクの着用をして対応させていただきます。<br></br>
            ・スタッフは手洗いや手指消毒をこまめに<br class="sp"></br>行い、風邪症状や発熱のある場合は参加<br class="sp"></br>いたしません。<br></br>
            ・会場内の混雑状況によってご入場を制限<br class="sp"></br>させていただく場合がございます。<br></br>
            ・校内および周辺では、他の参加者と一定の距離を保つようお声がけする場合がございます。<br></br>
            ・本展覧会のスタッフはマスクの着用をして対応させていただきます。</p>
          </div>
        
        </div>
    </motion.div>
  );
}

export default Attention;