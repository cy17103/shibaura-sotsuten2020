import React from 'react';

import './Home.css';
import './Style.css';

import Btn from './components/Btn';
import Scroll from './components/Scroll';
import SnsVertical from './components/SnsVertical';
import BtnAttention from './components/BtnAttention';
import WorksItem from './components/WorksItem';
import TopSection from './components/TopSection';
import NewsItem from './components/NewsItem'
import PortfolioItem from './components/PortfolioItem'

import { TwitterTimelineEmbed } from '../node_modules/react-twitter-embed'
import Iframe from '../node_modules/react-iframe'
import { motion} from '../node_modules/framer-motion';

import IcTwitter from '../src/img/twitter-white.svg';
import IcFacebook from '../src/img/facebook-white.svg';
import aboutImage from '../src/img/aboutImage.png';
import Hakaru from '../src/img/hakaru.svg';




const containerVariants = {
  hidden:{
    opacity:0
  },
  visible:{
      opacity:1,
      transition:{
            delay:0.4,
            duration:0.8,
            
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

const childVariants = {
  hidden:{
    scale:0.9
  },
  visible:{
    scale:1,
    transition:{
      duration:1.4,
    },
  }
}

function Home() {

  /*  worksItemに渡すデータ */
  const upperWorksArray = [//上段
    {title:'研究タイトル1',lab:'研究室名1', name:'芝浦太郎',image:'WorksItemBG01.png'},
    {title:'研究タイトル2',lab:'研究室名2', name:'芝浦太郎',image:'WorksItemBG02.png'},
    {title:'研究タイトル3',lab:'研究室名3', name:'芝浦太郎',image:'WorksItemBG03.png'},
    {title:'研究タイトル4',lab:'研究室名4', name:'芝浦太郎',image:'WorksItemBG04.png'},
    {title:'研究タイトル5',lab:'研究室名5', name:'芝浦太郎',image:'WorksItemBG05.png'},
    {title:'研究タイトル5',lab:'研究室名6', name:'芝浦太郎',image:'WorksItemBG06.png'},
    {title:'研究タイトル5',lab:'研究室名7', name:'芝浦太郎',image:'WorksItemBG07.png'},
    {title:'研究タイトル5',lab:'研究室名8', name:'芝浦太郎',image:'WorksItemBG08.png'},
    {title:'研究タイトル5',lab:'研究室名9', name:'芝浦太郎',image:'WorksItemBG09.png'},
    {title:'研究タイトル5',lab:'研究室名10', name:'芝浦太郎',image:'WorksItemBG10.png'},
  ];

  const lowerWorksArray = [//下段
    {title:'研究タイトル6',lab:'研究室名11', name:'芝浦太郎',image:'WorksItemBG10.png'},
    {title:'研究タイトル7',lab:'研究室名12', name:'芝浦太郎',image:'WorksItemBG09.png'},
    {title:'研究タイトル8',lab:'研究室名13', name:'芝浦太郎',image:'WorksItemBG08.png'},
    {title:'研究タイトル9',lab:'研究室名14', name:'芝浦太郎',image:'WorksItemBG07.png'},
    {title:'研究タイトル10',lab:'研究室名15', name:'芝浦太郎',image:'WorksItemBG06.png'},
    {title:'研究タイトル10',lab:'研究室名16', name:'芝浦太郎',image:'WorksItemBG05.png'},
    {title:'研究タイトル10',lab:'研究室名17', name:'芝浦太郎',image:'WorksItemBG04.png'},
    {title:'研究タイトル10',lab:'研究室名18', name:'芝浦太郎',image:'WorksItemBG03.png'},
    {title:'研究タイトル10',lab:'研究室名19', name:'芝浦太郎',image:'WorksItemBG02.png'},
    {title:'研究タイトル10',lab:'研究室名20', name:'芝浦太郎',image:'WorksItemBG01.png'},
  ];

  /*  NewsItemに渡すデータ */

  const NewsArray = [
    {date:'2020.9.30',title:'ニュースのタイトルニュースのタイトルニュースのタイトル',text:'公開先の文章やニュースの説明をここに入力します。公開先の文章やニュースの説明をここに入力公開先の文章やニュースの説明をここに入力',image:'NewsItemBG01.png'},
    {date:'2020.10.30',title:'ニュースのタイトル2',text:'公開先の文章やニュースの説明をここに入力します。公開先の文章やニュースの説明をここに入力',image:'NewsItemBG02.png'},
    {date:'2020.11.30',title:'ニュースのタイトル3',text:'公開先の文章やニュースの説明をここに入力します。公開先の文章やニュースの説明をここに入力',image:'NewsItemBG03.png'},
  ];
  
  /*  portfolioItemに渡すデータ */
  const PortfolioArray = [
    {status:'UI/UX',name:'橋本環奈',image:'PortfolioBG01.png',className:"mgr-16"},
    {status:'プロダクト',name:'高橋一生',image:'PortfolioBG02.png',className:"mgr-16"},
    {status:'生産',name:'斎藤工',image:'PortfolioBG03.png',className:"mgr-16"},
    {status:'ロボティクス',name:'手越祐也',image:'PortfolioBG04.png'},
  ];


  return (
    
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="Top">

      <div className="mobile-hidden">
        <SnsVertical />
      </div>


      {/* top */} 
      <div className="top-container">
        <motion.div variants={childVariants}>
        <p className="top-exhibition-title"><span>芝浦工業大学デザイン工学部<br class="br-sp"></br>卒業・修了研究展2021</span></p> 

        <img src={Hakaru}  className="hakaru" alt="Hakaru"/>
        <div className="exhibition-date">
            <div className="date">
                <p>3.13</p>
                <span className="day">SUT</span>
            </div>
            <div className="date-border">ー</div>
            <div className="date">
                <p>3.21</p>
                <span className="day">SUN</span>
            </div> 
        </div>
        <div className="exhibition-time">
            10:00-18:00 [入場無料]
        </div>   
        </motion.div>
        <Scroll />

        <BtnAttention/>
      </div>
      
      {/* works */}      
      <div className="work-container">
        
        <div className="works-list" id="works-list">
          <div class="upper-loop-wrap">
            <ul>
            {upperWorksArray.map((work) =>{
              return(
              <li key={work.title}>
                <WorksItem 
                  title={work.title}
                  lab={work.lab}
                  name={work.name}
                  image={work.image}
                />
              </li>
              )
            })}
            </ul>

            <ul>
            {upperWorksArray.map((work) =>{
              return(
              <li key={work.title}>
                <WorksItem 
                  title={work.title}
                  lab={work.lab}
                  name={work.name}
                  image={work.image}
                />
              </li>
              )
            })}
            </ul>

          </div>
          
          <div class="loop-wrap mg-40">
            <ul>
              {lowerWorksArray.map((work) =>{
                return(
                <li key={work.title}>
                  <WorksItem 
                    title={work.title}
                    lab={work.lab}
                    name={work.name}
                    image={work.image}
                  />
                </li>
                )
              })}
            </ul>

            <ul>
            {lowerWorksArray.map((work) =>{
              return(
              <li key={work.title}>
                <WorksItem 
                  title={work.title}
                  lab={work.lab}
                  name={work.name}
                  image={work.image}
                />
              </li>
              )
            })}
            </ul>

          </div>
        </div>

        <Btn 
          text='展示作品一覧を見る'
          ic='true'
          link='/Works'
        />
      </div>

      {/* news */}
      <div className="container">
          <TopSection 
            sectionTitle='NEWS'
          />
          
          <div className="news-list">

          {NewsArray.map((news) =>{
              return(
                <NewsItem key={news.title}
                  date={news.date}
                  title={news.title}
                  text={news.text}
                  image={news.image}
                />
              )
            })}
         
          </div>

      </div>

      {/* portfolio */}
      <div className="container">
        <TopSection 
          sectionTitle='PORTFOLIO'
        />
        <p className="portfolio-text">デザイン工学部の学生にポートフォリオを公開していただきました〜〜〜ご覧ください。</p>

        <div className="portfolio-list">
          {PortfolioArray.map((portfolio) =>{
              return(
                <PortfolioItem key={portfolio.name}
                  status={portfolio.status}
                  name={portfolio.name}
                  image={portfolio.image}
                  className={portfolio.className}
                />
              )
            })}
        </div>
         
        <Btn 
          text='ポートフォリオ一覧を見る'
          ic='true'
          link='/'
        />

      </div>

      {/* about */}
      <div className="container">
        <TopSection 
            sectionTitle='ABOUT'
        />

        <div className="about-contents">
          <img src={aboutImage} className="about-image" alt="exhibitionPoster"/>

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
                  <p className="about-subtext">*日曜日は休校日のため、ご入場できません。<br></br>*最終開催日は17:00までの入場となります。</p>
                </div>
            </div>

            <div className="about-texts-row mg-16">
              <h4>会場</h4>
              <div>
                <p>〒108-8548 <br class="br-sp"></br>東京都港区芝浦3-9-14<br></br>芝浦工業大学 芝浦キャンパス</p>
                <p className="about-subtext">*大学敷地内に駐車場・駐輪場はございません。</p>
              </div>
            </div>

            <div className="about-texts-row">
              <h4>主催</h4>
              <p>芝浦工業大学学生自治会</p>
            </div>
          </div>
        </div>

        


        
        <div>
              <Btn
              text='詳しく見る'
              link='/About'
              />
        </div>
          


        

      </div>

      {/* SNS */}
      <div className="container">
        <TopSection 
          sectionTitle='SNS'
        />

        <p className="portfolio-text">運営スタッフによるSNSアカウントです。<br></br>最新情報はこちらからチェックできます。</p>

        <div className="flex">
          <div className="sns-container">
            <a className="label-twitter" href="https://twitter.com/sit_designex" target="_blank" rel="noopener noreferrer">
              <img src={IcTwitter} className="sns-ic" alt="Twitter"/>
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
              <img src={IcFacebook} className="sns-ic" alt="Facebook"/>
            </a>

            <div className="twitter-embed">
              <Iframe url={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fshibauradesign2020%2F&tabs=timeline&width=440&height=300&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId`}
              width="100%"
              height="300px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"/>
            </div>
          </div>
        </div>

        
      </div>
      
    </motion.div>

            
  );
}

export default Home;
