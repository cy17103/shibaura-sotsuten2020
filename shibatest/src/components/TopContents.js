import React from 'react';
import './TopContents.css';
import Hakaru from '../img/hakaru.png';


class TopContents extends React.Component{

    render(){
        return(
            <div className="top-container">
                <h1>芝浦工業大学デザイン工学部卒業・修了研究展2021</h1>
                
                <img src={Hakaru}  className="hakaru" alt="Hakaru"/>
                
                <div className="exhibition-date">
                    <div className="date">
                        <p>3.14</p>
                        <span className="day">SUN</span>
                    </div>
                    <div className="date-border">-</div>
                    <div className="date">
                        <p>3.28</p>
                        <span className="day">SUN</span>
                    </div> 
                </div>
                
                <div className="exhibition-time">
                    10:00-18:00 [入場無料]
                </div>               

            </div>
        );
    }
}

export default TopContents;