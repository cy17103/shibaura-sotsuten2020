import './About.css';
import './Style.css';
import {Link} from '../node_modules/react-router-dom';

import PageTop from './components/PageTop';

import aboutImage from '../src/img/aboutImage.png';

import Icon from '@material-ui/core/Icon';

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
                他にも在学中に取り組んだコンペやポート<br class="br-sp"></br>フォリオの展示も一部行っております。<br></br>
                <br></br>
                例年通り、大学での展示も行っております。<br></br>
                ご興味がございましたら、ぜひお立ち寄りください。皆様のお越しを心よりお待ちしております。<br></br>
                <br></br>
                    <div className="writername">
                     2020.3.10<br></br>
                      芝浦工業大学デザイン工学部<br class="br-sp"></br>卒業・修了研究展委員
                    </div>
                </p>
            </div>

            <div className="concept">
                <h2>コンセプト</h2>

                <div className="conceptContents">

                        <div className="conceptTitle">
                            <p>ハカる</p>
                        </div>

                        <div className="conceptText">
                        <p>なぜ「ハカる」にしたのか。その背景や理由などをここに記述する。卒展に込める思い、来場する人に何を伝えたいのか。<br></br>
                        <br></br>
                        なぜ「ハカる」にしたのか。その背景や理由などをここに記述する。卒展に込める思い、来場する人に何を伝えたいのか。<br></br>
                        なぜ「ハカる」にしたのか。その背景や理由などをここに記述する。卒展に込める思い、来場する人に何を伝えたいのか。<br></br>
                        <br></br>
                        なぜ「ハカる」にしたのか。その背景や理由などをここに記述する。卒展に込める思い、来場する人に何を伝えたいのか。</p>
                        </div>
                        
                </div>

            </div>

            <div className="overView">
             <h2>開催概要</h2>

            <div className="overViewcontents">

                <div className="about-texts">
                    <div className="about-texts-row mg-16">
                    <h4>展覧会名</h4>
                    <p>芝浦工業大学デザイン工学部<br class="br-sp"></br>卒業・修了研究展2021</p>
                    </div>

                    <div className="about-texts-row mg-16">
                    <h4>入場料</h4>
                    <p>入場無料</p>
                    </div>

                    <div className="about-texts-row mg-16">
                    <h4>会期</h4>
                        <div >
                        <p>2021.3.14(日) - 3.28(日)<br></br>10:00 ~ 18:00 <br class="br-sp"></br>(最終入場時間 17:30)</p>
                        <p className="about-subtext">*日曜日は休校日のため、ご入場<br class="br-sp"></br>できません。<br></br>*最終開催日は17:00までの入場<br class="br-sp"></br>となります。</p>
                        </div>
                    </div>

                    <div className="about-texts-row mg-16">
                        <h4>会場</h4>
                        <div>
                         <p>芝浦工業大学芝浦キャンパス<br></br>〒108-8548<br class="br-sp"></br>東京都港区芝浦3-9-14</p>
                         <p className="about-subtext">*大学敷地内に駐車場・駐輪場は<br class="br-sp"></br>ございません。</p>
                        </div>
                    </div>

                    <div className="about-texts-row">
                    <h4>主催</h4>
                    <p>芝浦工業大学学生自治会</p>
                    </div>
                </div>
                <img src={aboutImage} className="about-image" alt="exhibitionPoster"/>
            </div>
            </div>
            
            <div className="access">
                <h2>アクセス</h2>

                <div className="accessContents">

                    <div className="accessText">
                
                        <h3>芝浦工業大学 芝浦キャンパス</h3>
                        <p>〒108-8548東京都港区芝浦3-9-14</p>
  
                        <a href="https://www.google.co.jp/maps/place/%E8%8A%9D%E6%B5%A6%E5%B7%A5%E6%A5%AD%E5%A4%A7%E5%AD%A6%E8%8A%9D%E6%B5%A6%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9/@35.6434231,139.7494067,19.35z/data=!4m13!1m7!3m6!1s0x60188bb4d9a8052b:0xc5aaaf0b3d68e69d!2z44CSMTA4LTAwMjMg5p2x5Lqs6YO95riv5Yy66Iqd5rWm77yT5LiB55uu77yZ4oiS77yR77yUIOiKnea1puW3pealreWkp-WtpiDoip3mtabjgq3jg6Pjg7Pjg5Hjgrk!3b1!8m2!3d35.6434443!4d139.7496359!3m4!1s0x60188bb4d90f4165:0xc16d0476cce240aa!8m2!3d35.6433728!4d139.7496946?hl=ja" target="_blank" rel="noopener noreferrer" className="bigMap"> 
                            <ul> 
                                <li>
                                    <h4>大きな地図で見る</h4>
                                </li>
                                <li>
                                    <Icon>open_in_new</Icon>
                                </li>
                            </ul>
                        </a>
                        
                        <h4>電車でのアクセス</h4>
                        <p>JR山手線 京浜東北線<br class="br-sp"></br>「田町駅」芝浦口から徒歩3分<br></br>
                        都営地下鉄 三田線・浅草線<br class="br-sp"></br>「三田駅」から徒歩5分</p>
                    </div>

                    <iframe className="accessMap" src="https://maps.google.co.jp/maps?output=embed&t=m&hl=ja&z=18&ll=35.6433503734224, 139.7496825387055&q=35.6433503734224, 139.7496825387055" frameborder="0" scrolling="no" width="auto"></iframe>
                    
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;
