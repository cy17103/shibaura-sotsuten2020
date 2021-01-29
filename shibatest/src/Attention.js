import './Attention.css';
import './Style.css';
import {Link} from '../node_modules/react-router-dom';

import PageTop from './components/PageTop';

function Attention() {

  return (
    <div className="Attention">
        <PageTop 
            title=" "
            text=""
        />

        <div className="container">
            <div className="noticeTitle">
              <p>本展覧会の新型コロナウイルス感染対策について</p>
            </div>

            <div className="titleTexts">
              <p>芝浦工業大学デザイン工学部卒業・修了研究展2021では新型コロナウイルス感染症予防として、<br></br>以下の対策を実施して開催いたします。</p>
              <p className="redText">ご来校に際しては、本ページをご一読のうえ、展覧会にご参加くださいますよう、ご協力をお願いいたします。</p>
              <p className="about-subtext">* 状況により、実施時期・内容等を変更する場合がございます。</p>
            </div>
            
          <div className="check1">
            <h2>ご来校時の体温チェック</h2>
            <p>ご来校時に、スタッフが非接触型体温計で検温をさせていただきます。37.5度以上の発熱が見つかった場合、ご本人および同伴の方は事前予約いただいてもご入場いただけません。あらかじめご了承ください。</p>
          </div>

          <div className="check2">
            <h2>ご来校に際してお願い</h2>
            <p>以下のような症状に心当たりがある方はご来校をご遠慮ください。</p>
            <p className="boldText">
              -  37.5℃を超える発熱がある。<br></br>
              -  息苦しさ、強いだるさがある<br></br>
              -  咳や微熱など比較的軽い風邪の症状が続いている<br></br>
              -  味覚や嗅覚に違和感がある<br></br>
              -  無症状だが、感染もしくは感染者との接触の心配や不安がある
            </p>
            <p>ご本人や身近な方が過去14日以内に、「入管法に基づく入国制限対象地域」への訪問歴をお持ちの方はご来場をご遠慮ください。<br></br>アルコール消毒液を使用した手指の消毒や、石けんを使用したこまめな手洗いにご協力ください。</p>
            <br></br>
            <p>マスク着用のご協力をお願いいたします。マスクをお持ちでないお客様は、咳やくしゃみをされる際はハンカチ等で口をしっかり覆う「咳エチケット」にご協力ください。</p>
          </div>

          <div className="check3">
            <h2>3.その他の取り組み</h2>
            <p>・スタッフはマスクの着用をして対応させていただきます。<br></br>
            ・スタッフは手洗いや手指消毒をこまめに行い、風邪症状や発熱のある場合は参加いたしません。<br></br>
            ・会場内の混雑状況によってご入場を制限させていただく場合がございます。<br></br>
            ・校内および周辺では、他の参加者と一定の距離を保つようお声がけする場合がございます。<br></br>
            ・本展覧会のスタッフはマスクの着用をして対応させていただきます。</p>
          </div>
        
        </div>
    </div>
  );
}

export default Attention;