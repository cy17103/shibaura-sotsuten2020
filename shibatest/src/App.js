import './App.css';

import Btn from './components/Btn';
import Header from './components/Header';
import SnsVertical from './components/SnsVertical';
import BtnAttention from './components/BtnAttention';
import WorksItem from './components/WorksItem';
import TopSection from './components/TopSection';
import NewsItem from './components/NewsItem'
import TopContents from './components/TopContents'
import PortfolioItem from './components/PortfolioItem'
import Footer from './components/Footer'
import { TwitterTimelineEmbed } from '../node_modules/react-twitter-embed'
import Iframe from '../node_modules/react-iframe'


import IcTwitter from '../src/img/twitter-white.svg';
import IcFacebook from '../src/img/facebook-white.svg';
import Scroll from '../src/img/scroll.svg';
import aboutImage from '../src/img/aboutImage.png';



function App() {

  return (
    <div className="App">
      <div className="top">
        <Header />
        <SnsVertical />
        <header className="App-header">
          <TopContents />
          <img src={Scroll} className="scroll"/>
          <BtnAttention />
          
          
        </header> 
        
      </div>
      
      
      <div className="works-container">
        <div className="works-list">
          <div class="loop-wrap ">
            <ul>
              <li><WorksItem className="works-item"/></li>
              <li><WorksItem className="works-item"/></li>
              <li><WorksItem className="works-item"/></li>
              <li><WorksItem className="works-item"/></li>
              <li><WorksItem className="works-item"/></li>
            </ul>

            <ul>
              <li><WorksItem className="works-item"/></li>
              <li><WorksItem className="works-item"/></li>
              <li><WorksItem className="works-item"/></li>
              <li><WorksItem className="works-item"/></li>
              <li><WorksItem className="works-item"/></li>
            </ul>
          </div>
          
          <div class="loop-wrap mg-40">
            <ul>
              <li><WorksItem className="works-item"/></li>
              <li><WorksItem className="works-item"/></li>
              <li><WorksItem className="works-item"/></li>
              <li><WorksItem className="works-item"/></li>
              <li><WorksItem className="works-item"/></li>
            </ul>

            <ul>
              <li><WorksItem className="works-item"/></li>
              <li><WorksItem className="works-item"/></li>
              <li><WorksItem className="works-item"/></li>
              <li><WorksItem className="works-item"/></li>
              <li><WorksItem className="works-item"/></li>
            </ul>
          </div>
        </div>

        <Btn 
          text='作品一覧を見る'
          ic='true'
        />
      </div>

      
       
      {/* news */}
      <div className="container">
          <TopSection 
            sectionTitle='NEWS'
          />
          
          <div className="news-list">
            <NewsItem 
              image='../img/news-default.png'
              date='2020.10.30'
              title='ニュースのタイトル'
              text='公開先の文章やニュースの説明をここに入力します。公開先の文章やニュースの説明をここに入力'
            />

            <NewsItem 
              image='../img/news-default.png'
              date='2020.10.30'
              title='ニュースのタイトル'
              text='公開先の文章やニュースの説明をここに入力します。公開先の文章やニュースの説明をここに入力'
            />

            <NewsItem 
              image='../img/news-default.png'
              date='2020.10.30'
              title='ニュースのタイトル'
              text='公開先の文章やニュースの説明をここに入力します。公開先の文章やニュースの説明をここに入力'
            />            
          </div>

      </div>

      {/* portfolio */}
      <div className="container">
        <TopSection 
          sectionTitle='PORTFOLIO'
        />
        <p className="portfolio-text mg-40">デザイン工学部の学生にポートフォリオを公開していただきました〜〜〜ご覧ください。</p>

        <div className="portfolio-list mg-40">
          <PortfolioItem 
            class='UI/UX'
          />

          <PortfolioItem 
            class='プロダクト'
          />

          <PortfolioItem 
            class='生産'
          />

          <PortfolioItem 
            class='ロボティクス'
          />
        </div>

        <Btn 
          text='ポートフォリオ一覧を見る'
          ic='true'
        />

      

      </div>

      {/* about */}
      <div className="container">
        <TopSection 
            sectionTitle='ABOUT'
        />

        <div className="about-contents">
          <img src={aboutImage} className="about-image" />

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
              <p>2021.3.14(木) - 3.24(木)<br></br>10:00 ~ 18:00 (最終入場時間 17:30)</p>
            </div>

            <div className="about-texts-row mg-16">
              <h4>会場</h4>
              <p>芝浦工業大学芝浦キャンパス<br></br>〒108-8548 東京都港区芝浦3-9-14</p>
            </div>

            <div className="about-texts-row">
              <h4>主催</h4>
              <p>芝浦工業大学学生自治会</p>
            </div>
          </div>
        </div>
        
        <Btn
          text='詳しく見る'
        />

      </div>

      {/* SNS */}
      <div className="container">
        <TopSection 
          sectionTitle='SNS'
        />

        <p className="portfolio-text mg-40">運営スタッフによるSNSアカウントです。<br></br>最新情報はこちらからチェックできます。</p>

        <div className="flex">
          <div className="sns-container">
            <a className="label-twitter" href="https://twitter.com/sit_designex" target="_blank" rel="noopener noreferrer">
              <img src={IcTwitter} className="sns-ic"/>
            </a>

            <div className="twitter-embed">
              <TwitterTimelineEmbed　//Cookie関連の吹き出しがでる
                sourceType="profile"
                screenName="sit_designex"
                theme="light"
                options={{ width: 440, height: 300 }}
              />
            </div>          
          </div>

          <div className="sns-container">
            <a className="label-facebook" href="https://www.facebook.com/shibauradesign2020/" target="_blank" rel="noopener noreferrer">
              <img src={IcFacebook} className="sns-ic"/>
            </a>

            <div className="twitter-embed">
              <Iframe url="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fshibauradesign2020%2F&tabs=timeline&width=440&height=300&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
              width="440px"
              height="300px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"/>
            </div>
          </div>
        </div>

        
      </div>

      
      <Footer />

    </div>
  );
}

export default App;
