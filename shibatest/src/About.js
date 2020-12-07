import './About.css';
import {Link} from '../node_modules/react-router-dom';

import aboutImage from '../src/img/aboutImage.png';




function About() {

  return (
    <div className="About">
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
                2020.3.10<br></br>
                芝浦工業大学デザイン工学部卒業・修了研究展委員
                </p>
            </div>

            <div className="concept">
                <h2>コンセプト</h2>
                <ul className="conceptText">
                    <li>
                        <p>ハカる</p>
                    </li>
                    <li>
                        <p>なぜ「ハカる」にしたのか。その背景や理由などをここに記述する。卒展に込める思い、来場する人に何を伝えたいのか。<br></br>
                        <br></br>
                        なぜ「ハカる」にしたのか。その背景や理由などをここに記述する。卒展に込める思い、来場する人に何を伝えたいのか。<br></br>
                        なぜ「ハカる」にしたのか。その背景や理由などをここに記述する。卒展に込める思い、来場する人に何を伝えたいのか。<br></br>
                        <br></br>
                        なぜ「ハカる」にしたのか。その背景や理由などをここに記述する。卒展に込める思い、来場する人に何を伝えたいのか。</p>
                </li>
                </ul>
            </div>

            <div className="about-contents">
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
            {/*
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12969.460856460524!2d139.7496943!3d35.6433726!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc16d0476cce240aa!2z6Iqd5rWm5bel5qWt5aSn5a2m6Iqd5rWm44Kt44Oj44Oz44OR44K5!5e0!3m2!1sja!2sjp!4v1606932579168!5m2!1sja!2sjp" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </li>
                </ul>
            </div>
            */}
        </div>
    </div>
  );
}

export default About;
