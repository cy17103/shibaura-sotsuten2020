import './About.css';
import './Style.css';
import {Link} from '../node_modules/react-router-dom';

import PageTop from './components/PageTop';

import aboutImage from '../src/img/aboutImage.png';

var map;
const google = window.google
function initMap() {
    map = new google.maps.Map(document.getElementById('about'), { // #sampleに地図を埋め込む
        center: { // 地図の中心を指定
              lat: 35.64353, // 緯度
             lng: 139.74965 // 経度
          },
         zoom: 19 // 地図のズームを指定
      });
}

function About() {

  return (
    <div className="About">
        <PageTop 
            title="ABOUT"
            text="展覧会について"
        />
        <div className="container">
            
            <div className="greeting" id="greeting">
                <h2>ごあいさつ</h2>
                <p>芝浦工業大学デザイン工学部卒業・修了研究展は今年度で9回目の開催となります。<br></br>
                <br></br>
                デザイン工学部は2017年に再編成を行い、生まれ変わりました。<br></br>
                今年度は再編成後の学生が行う初の展覧会となります。<br></br>
                ぜひ、進化を遂げたデザイン工学部の新たな一面を感じ取っていただけると幸いです。<br></br>
                <br></br>
                また、新型コロナウイルスの流行によって学生の大学生活・研究活動は例年とは大きく変化しました。<br></br>
                その中で、デザイン工学部の学生がこれまで得てきた知識や経験を活かして取り組んだ研究や作品を展示しています。<br></br>
                他にも在学中に取り組んだコンペやポートフォリオの展示も一部行っております。<br></br>
                <br></br>
                例年通り、大学での展示も行っております。<br></br>
                ご興味がございましたら、ぜひお立ち寄りください。皆様のお越しを心よりお待ちしております。<br></br>
                <br></br>
                    <div className="writername">
                     2020.3.10<br></br>
                      芝浦工業大学デザイン工学部卒業・修了研究展委員
                    </div>
                </p>
            </div>

            <div className="concept">
                <h2>コンセプト</h2>
                <ul>
                    <li>
                        <div className="conceptText">
                        <p>ハカる</p>
                        </div>
                    </li>
                    <li>
                        <p>なぜ「ハカる」にしたのか。その背景や理由などをここに記述す<br></br>る。卒展に込める思い、来場する人に何を伝えたいのか。<br></br>
                        <br></br>
                        なぜ「ハカる」にしたのか。その背景や理由などをここに記述す<br></br>る。卒展に込める思い、来場する人に何を伝えたいのか。<br></br>
                        なぜ「ハカる」にしたのか。その背景や理由などをここに記述す<br></br>る。卒展に込める思い、来場する人に何を伝えたいのか。<br></br>
                        <br></br>
                        なぜ「ハカる」にしたのか。その背景や理由などをここに記述す<br></br>る。卒展に込める思い、来場する人に何を伝えたいのか。</p>
                </li>
                </ul>
            </div>

            <div className="about-contents">
             <h2>開催概要</h2>
            <img src={aboutImage} className="about-image" alt="exhibitionPoster"/>

                <div className="about-texts">
                    <div className="about-texts-row mg-16">
                    <h4>展覧会名</h4>
                    <p>芝浦工業大学デザイン工学部卒業・修了研究展2021</p>
                    </div>

                    <div className="about-texts-row mg-16">
                    <h4>入場料</h4>
                    <p>入場無料</p>
                    </div>

                    <div className="about-texts-row mg-16">
                    <h4>会期</h4>
                        <div >
                        <p>2021.3.14(日) - 3.28(日)<br></br>10:00 ~ 18:00 (最終入場時間 17:30)</p>
                        <p className="about-subtext">*日曜日は休校日のため、ご入場できません。<br></br>*最終開催日は17:00までの入場となります。</p>
                        </div>
                    </div>

                    <div className="about-texts-row mg-16">
                    <h4>会場</h4>
                    <div>
                        <p>芝浦工業大学芝浦キャンパス<br></br>〒108-8548 東京都港区芝浦3-9-14</p>
                        <p className="about-subtext">*大学敷地内に駐車場・駐輪場はございません。</p>
                    </div>
                    </div>

                    <div className="about-texts-row">
                    <h4>主催</h4>
                    <p>芝浦工業大学学生自治会</p>
                    </div>
                </div>
            </div>
            
            <div className="access">
                <h2>アクセス</h2>
                
                <ul className="accessContents">
                    <li>
                    <h3>芝浦工業大学 芝浦キャンパス</h3>
                    <p>〒108-8548東京都港区芝浦3-9-14</p>
                    </li>

                    <ul className="list2">
                        <li>
                        <h4>大きな地図で見る</h4>
                        </li>
                        <li>
                        <img src="" />
                        </li>
                    </ul>

                    <li>
                        <h4>電車でのアクセス</h4>
                        <p>JR山手線 京浜東北線「田町駅」芝浦口から徒歩3分<br></br>
                        都営地下鉄 三田線・浅草線「三田駅」から徒歩5分</p>
                    </li>
                        
                    <li>
                    <div id="map"></div>
    <script src="./About.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?callback=initMap"></script>
                    </li>
                </ul>
            </div>
        
        </div>
    </div>
  );
}

export default About;
