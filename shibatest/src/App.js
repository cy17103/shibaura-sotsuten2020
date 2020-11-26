import './App.css';

import logo from './logo.svg';
import Btn from './components/Btn';
import Header from './components/Header';
import SnsVertical from './components/SnsVertical';
import BtnAttention from './components/BtnAttention';
import WorksItem from './components/WorksItem';
import TopSection from './components/TopSection';
import NewsItem from './components/NewsItem';
import TopContents from './components/TopContents';
import Scroll from '../src/img/scroll.svg';
import PortfolioItem from './components/PortfolioItem';

function App() {

  return (
    <div className="App">
      <div className="top">
        <Header />
        <SnsVertical />
        <header className="App-header">
          {/*
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://www.figma.com/file/RKdOnIP63d85yMD64DbUI1/%E5%8D%92%E5%B1%95%E3%83%9A%E3%83%BC%E3%82%B8?node-id=2%3A124"
            target="_blank"
            rel="noopener noreferrer"
          >
            Figmaでみる
          </a>  
          */}
          <TopContents />
          <img src={Scroll} className="scroll"/>
          <BtnAttention />
          
        </header> 

        
        
      </div>

      <div className="works-container">

        <div className="works-list">
            <WorksItem />
            <WorksItem />
            <WorksItem />
            <WorksItem />

        </div>

        <div className="works-list mg-40">
            <WorksItem />
            <WorksItem />
            <WorksItem />
            <WorksItem />

        </div>
        
        <Btn />
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

        <div className="portfolio-list">
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

      

      </div>


      <div className="blank240"></div>

    </div>
  );
}

export default App;
