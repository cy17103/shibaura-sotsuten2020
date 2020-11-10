import logo from './logo.svg';
import Btn from './components/Btn';
import Header from './components/Header';
import SnsVertical from './components/SnsVertical';
import BtnAttention from './components/BtnAttention';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="top-container">
        <Header />
        <header className="App-header">
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
          <BtnAttention />
          
        </header> 


        <SnsVertical />
        <Btn />
        

        <div className="blank"></div>
      </div>
    </div>
  );
}

export default App;
